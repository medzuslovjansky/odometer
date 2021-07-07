import { FlavorizationLevel } from '../FlavorizationLevel';
import { Multireplacer } from '../../core/rules/Multireplacer';
import { FlavorizationRuleDTO } from '../FlavorizationRuleDTO';
import { MultireplacerRule } from '../../core/rules';
import { parse as steenparse } from '@interslavic/steen-utils';
import { FlavorizationPredicate } from '../../core/predicates';
import { InterslavicIntermediate } from '../InterslavicIntermediate';
import _ from 'lodash';
import createMapReplacer from '../utils/createMapReplacer';
import { parseCSV } from './parseCSV';

export async function parseRuleSheet(
  buffer: Buffer | string,
): Promise<Record<keyof typeof FlavorizationLevel, Multireplacer>> {
  const rawRecords = await parseCSV(buffer);

  const dtos: FlavorizationRuleDTO[] = rawRecords.map((r, rowIndex) => ({
    rowIndex,
    disabled: r.disabled || '',
    id: r.id || '',
    flavorizationLevel: r.flavorizationLevel || '',
    match: r.match || '',
    flags: r.flags || '',
    partOfSpeech: r.partOfSpeech || '',
    genesis: r.genesis || '',
    replacement1: r.replacement1 || '',
    replacement2: r.replacement2 || '',
    replacement3: r.replacement3 || '',
    replacement4: r.replacement4 || '',
    replacement5: r.replacement5 || '',
  }));

  const replacers: Record<keyof typeof FlavorizationLevel, Multireplacer> = {
    Reverse: new Multireplacer(),
    Standard: new Multireplacer(),
    Silly: new Multireplacer(),
    Etymological: new Multireplacer(),
  };

  for (const dto of dtos) {
    if (dto.disabled || !dto.match) {
      continue;
    }

    if (!dto.id) {
      throw new Error(`Rule at row ${dto.rowIndex} has no ID`);
    }

    const rule = new MultireplacerRule(dto.id);
    const flags = new Set(dto.flags.split(/\s+/));
    rule.searchValue = flags.has('FIXED')
      ? dto.match
      : new RegExp(dto.match, 'g');

    if (flags.has('BY-WORD')) {
      rule.splitter = 'word';
    } else if (flags.has('BY-LETTER')) {
      rule.splitter = 'letter';
    }

    if (dto.genesis) {
      let isApproximate = false;
      let isNegated = false;

      const genesisSet = new Set(
        dto.genesis
          .split('')
          .filter((letter) => {
            switch (letter) {
              case '?':
                isApproximate = true;
                return false;
              case '!':
                isNegated = true;
                return false;
              default:
                return true;
            }
          })
          .map((letter) => steenparse.genesis(letter)),
      );

      const predicate: FlavorizationPredicate<InterslavicIntermediate> =
        isApproximate
          ? (p) => !p.context.genesis || genesisSet.has(p.context.genesis)
          : (p) => !!p.context.genesis && genesisSet.has(p.context.genesis);

      if (isNegated) {
        rule.predicates.andNot(predicate);
      } else {
        rule.predicates.and(predicate);
      }
    }

    if (dto.partOfSpeech && !dto.partOfSpeech.startsWith('*')) {
      const isNegated = dto.partOfSpeech.startsWith('!');
      const partOfSpeech = _.pickBy(
        steenparse.partOfSpeech(dto.partOfSpeech.slice(isNegated ? 1 : 0)),
        _.identity,
      );

      const predicate: FlavorizationPredicate<InterslavicIntermediate> = (
        p,
      ) => {
        return _.isMatch(p.context.partOfSpeech, partOfSpeech);
      };

      if (isNegated) {
        rule.predicates.andNot(predicate);
      } else {
        rule.predicates.and(predicate);
      }
    }

    for (const replacement of [
      dto.replacement1,
      dto.replacement2,
      dto.replacement3,
      dto.replacement4,
      dto.replacement5,
    ]) {
      if (!replacement.trim()) {
        continue;
      }

      if (replacement === 'NULL') {
        rule.replacements.add('');
      } else if (flags.has('MAP')) {
        rule.replacements.add(createMapReplacer(replacement));
      } else {
        rule.replacements.add(replacement);
      }
    }

    switch (dto.flavorizationLevel) {
      case FlavorizationLevel.Silly:
        replacers.Silly.rules.add(rule);
        break;
      case FlavorizationLevel.Etymological:
        replacers.Etymological.rules.add(rule);
        break;
      case FlavorizationLevel.Reverse:
        replacers.Reverse.rules.add(rule);
        break;
      default:
        replacers.Silly.rules.add(rule);
        replacers.Standard.rules.add(rule);
        replacers.Etymological.rules.add(rule);
        break;
    }
  }

  return replacers;
}

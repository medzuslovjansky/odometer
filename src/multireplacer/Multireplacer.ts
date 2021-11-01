import sortedUniqBy from 'lodash/sortedUniqBy';
import { Intermediate } from './Intermediate';
import { IntermediatesCache } from './IntermediatesCache';
import { MultireplacerOutput } from './MultireplacerOutput';
import { MultireplacerRule } from './MultireplacerRule';
import { MultireplacerRuleList } from './MultireplacerRuleList';

export class Multireplacer<Context = unknown> {
  public readonly rules = new MultireplacerRuleList<Context>();

  public process(
    values: string[],
    record: Context,
  ): MultireplacerOutput<Context> {
    let intermediates = values.map((v) => new Intermediate(v, record));
    let nextIntermediates: Intermediate<Context>[] = [];
    let rule: MultireplacerRule<Context>;
    let value: Intermediate<Context>;
    const intermediatesCache = new IntermediatesCache(intermediates);

    for (rule of this.rules) {
      nextIntermediates = [];

      rule.intermediatesCache = intermediatesCache;
      for (value of intermediates) {
        nextIntermediates.push(...rule.apply(value));
      }
      rule.intermediatesCache = null;

      intermediates = sortedUniqBy(
        nextIntermediates.sort(Intermediate.rankSorter),
        Intermediate.identity,
      );
    }

    return { variants: intermediates };
  }
}

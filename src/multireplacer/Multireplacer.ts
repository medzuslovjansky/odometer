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
    const intermediatesCache = new IntermediatesCache<Context>();

    let intermediates = values.map((v) => new Intermediate(v, record));
    let nextIntermediates: Intermediate<Context>[] = [];
    let applied = false;
    let rule: MultireplacerRule<Context>;
    let value: Intermediate<Context>;

    for (rule of this.rules) {
      rule.intermediatesCache = intermediatesCache;
      nextIntermediates = [];
      applied = false;

      for (value of intermediates) {
        if (rule.appliesTo(value)) {
          rule.apply(value, nextIntermediates);
          applied = true;
        }
      }

      if (applied) {
        intermediates = nextIntermediates;
      }
    }

    return { variants: intermediates };
  }
}

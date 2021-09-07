import { Intermediate } from '../utils';
import { MultireplacerOutput } from './MultireplacerOutput';
import { MultireplacerRule } from './MultireplacerRule';
import { MultireplacerRuleList } from './MultireplacerRuleList';
import { Replacement } from './Replacement';

export class Multireplacer<Context = unknown> {
  public readonly rules = new MultireplacerRuleList<Context>();

  public process(
    values: string[],
    record: Context,
  ): MultireplacerOutput<Context> {
    let intermediates = values.map((v) => {
      return Intermediate.cast<Context, Replacement<Context>>(v, record);
    });
    let nextIntermediates: Intermediate<Context, Replacement<Context>>[] = [];
    let applied = false;
    let rule: MultireplacerRule<Context>;
    let value: Intermediate<Context, Replacement<Context>>;

    for (rule of this.rules) {
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

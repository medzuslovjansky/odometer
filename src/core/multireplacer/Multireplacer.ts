import { Intermediate } from '../utils/Intermediate';
import { MultireplacerOutput } from './MultireplacerOutput';
import { MultireplacerRule } from './MultireplacerRule';
import { MultireplacerRuleList } from './MultireplacerRuleList';

export class Multireplacer {
  public readonly rules = new MultireplacerRuleList();

  public process(values: string[], record?: unknown): MultireplacerOutput {
    let intermediates = values.map((v) => Intermediate.cast(v, record));
    let nextIntermediates: Intermediate[] = [];
    let applied = false;
    let rule: MultireplacerRule;
    let value: Intermediate;

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

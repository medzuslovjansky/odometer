import { MultireplacerRuleList } from './MultireplacerRuleList';
import { MultireplacerOutput } from './MultireplacerOutput';
import { Intermediate } from '../utils/Intermediate';

export class Multireplacer {
  public readonly rules = new MultireplacerRuleList();

  public process(values: string[], record?: unknown): MultireplacerOutput {
    let intermediates = values.map((v) => Intermediate.cast(v, record));
    let nextIntermediates: Intermediate[] = [];
    let applied = false;

    for (const rule of this.rules) {
      nextIntermediates = [];
      applied = false;

      for (const value of intermediates) {
        if (rule.appliesTo(value)) {
          nextIntermediates = [...nextIntermediates, ...rule.apply(value)];
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

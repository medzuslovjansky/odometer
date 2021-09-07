import { MultireplacerRule } from './MultireplacerRule';
import { Replacement } from './Replacement';

export class MultireplacerRuleList<Context> {
  protected readonly rules: MultireplacerRule<Context>[] = [];
  protected readonly ruleInstances = new Set<MultireplacerRule<Context>>();

  [Symbol.iterator]() {
    return this.rules[Symbol.iterator]();
  }

  public add(rule: MultireplacerRule<Context>): void {
    if (this.ruleInstances.has(rule)) {
      throw new Error(`Replacement rule (${rule}) has been already added.`);
    }

    this.rules.push(rule);
    this.ruleInstances.add(rule);
  }

  public find(value: MultireplacerRule<Context> | Replacement<Context> | null) {
    if (value instanceof MultireplacerRule) {
      const index = this.rules.indexOf(value);
      if (index >= 0) {
        return this.rules[index];
      }
    }

    if (value instanceof Replacement) {
      for (const rule of this.rules) {
        if (rule.replacements.indexOf(value) >= 0) {
          return rule;
        }
      }
    }

    return null;
  }
}

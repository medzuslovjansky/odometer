import { MultireplacerRule } from './MultireplacerRule';
import { Replacement } from './Replacement';

export class MultireplacerRuleList {
  protected readonly rules: MultireplacerRule[] = [];
  protected readonly ruleIDs = new Set<string>();

  [Symbol.iterator]() {
    return this.rules[Symbol.iterator]();
  }

  public add(rule: MultireplacerRule): void {
    this.validateRule(rule);
    this.ruleIDs.add(rule.id);
    this.rules.push(rule);
  }

  protected validateRule(rule: MultireplacerRule): void {
    if (!rule.id) {
      throw new Error(`Replacement rule (${rule}) should have a defined id`);
    }

    if (this.ruleIDs.has(rule.id)) {
      throw new Error(
        `Replacement rule (${rule}) has a non-unique ID = ${rule.id}`,
      );
    }
  }

  public find(value: MultireplacerRule | Replacement | null) {
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

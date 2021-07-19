import { MultireplacerRule } from './MultireplacerRule';
import { Replacement, ReplacementValue } from './Replacement';

export class ReplacementsList {
  protected readonly replacements: Replacement[] = [];

  constructor(protected readonly owner: MultireplacerRule) {}

  public add(value: ReplacementValue): this {
    this.replacements.push(new Replacement(this.owner, value));
    return this;
  }

  public indexOf(value: Replacement): number {
    return this.replacements.indexOf(value);
  }

  [Symbol.iterator]() {
    return this.replacements[Symbol.iterator]();
  }
}

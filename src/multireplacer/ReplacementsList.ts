import { MultireplacerRule } from './MultireplacerRule';
import { Replacement, ReplacementValue } from './Replacement';

export class ReplacementsList<Context> {
  protected readonly replacements: Replacement<Context>[] = [];

  constructor(protected readonly owner: MultireplacerRule<Context>) {}

  public add(value: ReplacementValue): this {
    this.replacements.push(new Replacement(this.owner, value));
    return this;
  }

  public indexOf(value: Replacement<Context>): number {
    return this.replacements.indexOf(value);
  }

  [Symbol.iterator]() {
    return this.replacements[Symbol.iterator]();
  }
}

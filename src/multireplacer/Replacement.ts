import { MultireplacerRule } from './MultireplacerRule';

export type ReplacementFunction = (
  substring: string,
  ...args: unknown[]
) => string;

export type ReplacementValue = string | ReplacementFunction;

export class Replacement<Context> {
  constructor(
    public readonly owner: MultireplacerRule<Context>,
    public readonly value: ReplacementValue,
  ) {}

  public get index(): number {
    return this.owner.replacements.indexOf(this);
  }

  [Symbol.toStringTag](): string {
    return String(this.value);
  }
}

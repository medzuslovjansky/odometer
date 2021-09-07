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

  [Symbol.toStringTag](): string {
    return String(this.value);
  }
}

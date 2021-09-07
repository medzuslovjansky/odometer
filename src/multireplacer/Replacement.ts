import { MultireplacerRule } from './MultireplacerRule';

export type ReplacementFunction = (substring: string, ...args: any[]) => string;
export type ReplacementValue = string | ReplacementFunction;

export class Replacement<Context> {
  constructor(
    public readonly owner: MultireplacerRule<Context>,
    public readonly value: ReplacementValue,
  ) {}

  [Symbol.toStringTag]() {
    return String(this.value);
  }
}

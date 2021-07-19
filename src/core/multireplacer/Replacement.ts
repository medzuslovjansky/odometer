import { MultireplacerRule } from './MultireplacerRule';

export type ReplacementFunction = (substring: string, ...args: any[]) => string;
export type ReplacementValue = string | ReplacementFunction;

export class Replacement {
  constructor(
    public readonly owner: MultireplacerRule,
    public readonly value: ReplacementValue,
  ) {}

  [Symbol.toStringTag]() {
    return String(this.value);
  }
}

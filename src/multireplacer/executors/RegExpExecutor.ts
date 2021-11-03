import { Executor } from './Executor';
import { Intermediate } from '../Intermediate';
import { Replacement } from '../Replacement';

type ReplacementValue = string | ((match: string, ...args: any[]) => string);

export class RegExpExecutor<T> implements Executor<T> {
  constructor(
    protected readonly regexp: RegExp,
    protected readonly replacements: Replacement<ReplacementValue, T>[],
  ) {}

  protected readonly sticky = new RegExp(this.regexp, 'y');
  protected readonly global = new RegExp(this.regexp, 'g');

  execute(origin: Intermediate<T>): Intermediate<T>[] {
    const lastIndices = new Map<Intermediate, number>();
    const queue: Intermediate<T>[] = [origin];
    const results: Intermediate<T>[] = [];
    let intermediate: Intermediate<T> | undefined;

    while ((intermediate = queue.shift())) {
      this.global.lastIndex = lastIndices.get(intermediate) || 0;

      const match = this.global.exec(intermediate.value);
      if (!match) {
        results.push(intermediate);
        continue;
      }

      for (const replacement of this.replacements) {
        this.sticky.lastIndex = match.index;
        const newValue = intermediate.value.replace(
          this.sticky,
          replacement.value as any,
        );
        if (newValue.length > 1000) {
          this._throwSafeguardError();
        }

        const newIntermediate = new Intermediate(
          newValue,
          intermediate,
          replacement,
        );

        lastIndices.set(newIntermediate, this.sticky.lastIndex);
        queue.push(newIntermediate);
      }

      if (queue.length > 1000) {
        this._throwSafeguardError();
      }
    }

    return results;
  }

  indexOf(replacement: Replacement<unknown, T>): number {
    return this.replacements.indexOf(replacement as Replacement<string, T>);
  }

  _throwSafeguardError(): never {
    throw new Error(
      'High chance of infinite loop detected in the rule: ' + this.regexp,
    );
  }
}

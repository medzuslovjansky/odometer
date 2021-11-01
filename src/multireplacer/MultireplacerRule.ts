import { implementation as replaceAll } from 'string.prototype.replaceall';

import { MultireplacerPredicateGroup } from './predicates';
import { ReplacementsList } from './ReplacementsList';
import { Intermediate } from './Intermediate';
import { IntermediatesCache } from './IntermediatesCache';

export class MultireplacerRule<Context> {
  public readonly predicates = new MultireplacerPredicateGroup<Context>();
  public readonly replacements = new ReplacementsList<Context>(this);

  public comment = '';
  public searchValue: string | RegExp = '';
  public splitter: RegExp | null = null;

  public intermediatesCache: IntermediatesCache<Context> | null;

  public constructor(comment: string) {
    this.comment = comment;
    this.intermediatesCache = null;
  }

  public apply(intermediate: Intermediate<Context>): Intermediate<Context>[] {
    if (!this._appliesTo(intermediate)) {
      return [intermediate];
    }

    const results: Intermediate<Context>[] = [];

    for (const variant of this.replacements) {
      const replacerFn = (substring: string) => {
        return replaceAll.call(substring, this.searchValue, variant.value);
      };

      const newValue = this.splitter
        ? intermediate.value.replace(this.splitter, replacerFn)
        : replacerFn(intermediate.value);

      let newIntermediate = new Intermediate<Context>(
        newValue,
        intermediate,
        variant,
      );

      if (newIntermediate.equals(intermediate)) {
        newIntermediate = intermediate;
      }

      if (this.intermediatesCache) {
        newIntermediate = this.intermediatesCache.add(newIntermediate);
      }

      results.push(newIntermediate);
    }

    return results;
  }

  private _appliesTo(intermediate: Intermediate<Context>): boolean {
    return !!this.searchValue && this.predicates.appliesTo(intermediate);
  }
}

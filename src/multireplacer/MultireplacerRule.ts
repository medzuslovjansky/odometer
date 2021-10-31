import { implementation as replaceAll } from 'string.prototype.replaceall';

import {
  MultireplacerPredicateGroup,
  MultireplacerPredicateObject,
} from './predicates';
import { ReplacementsList } from './ReplacementsList';
import { Intermediate } from './Intermediate';
import { IntermediatesCache } from './IntermediatesCache';

export class MultireplacerRule<Context>
  implements MultireplacerPredicateObject<Context>
{
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

  public appliesTo(intermediate: Intermediate<Context>): boolean {
    return !!this.searchValue && this.predicates.appliesTo(intermediate);
  }

  public apply(
    intermediate: Intermediate<Context>,
    results: Intermediate<Context>[] = [],
  ): Intermediate<Context>[] {
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
      } else if (this.intermediatesCache) {
        newIntermediate = this.intermediatesCache.resolve(newIntermediate);
      }

      if (!results.includes(newIntermediate)) {
        results.push(newIntermediate);
      }
    }

    return results;
  }
}

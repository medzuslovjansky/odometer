import { implementation as replaceAll } from 'string.prototype.replaceall';

import { Intermediate } from '../utils';

import {
  MultireplacerPredicateGroup,
  MultireplacerPredicateObject,
} from './predicates';
import { ReplacementsList } from './ReplacementsList';
import * as Splitters from './splitters';
import { Replacement } from './Replacement';

export class MultireplacerRule<Context>
  implements MultireplacerPredicateObject<Context>
{
  public readonly predicates = new MultireplacerPredicateGroup<Context>();
  public readonly replacements = new ReplacementsList<Context>(this);

  public comment = '';
  public searchValue: string | RegExp = '';
  public splitter: keyof typeof Splitters = 'none';

  public constructor(comment: string) {
    this.comment = comment;
  }

  public appliesTo(
    intermediate: Intermediate<Context, Replacement<Context>>,
  ): boolean {
    return !!this.searchValue && this.predicates.appliesTo(intermediate);
  }

  public apply(
    intermediate: Intermediate<Context, Replacement<Context>>,
    results: Intermediate<Context, Replacement<Context>>[] = [],
  ): Intermediate<Context, Replacement<Context>>[] {
    for (const variant of this.replacements) {
      const newValue = intermediate.value.replace(
        Splitters[this.splitter],
        (substring) =>
          replaceAll.call(substring, this.searchValue, variant.value),
      );

      const newIntermediate = new Intermediate<Context, Replacement<Context>>(
        newValue,
        intermediate,
        variant,
      );
      const newIntermediateDeduped = newIntermediate.equals(intermediate)
        ? intermediate
        : results.find((i) => newIntermediate.equals(i)) || newIntermediate;

      // TODO: review the motivation to check for ... !== intermidate
      if (
        newIntermediateDeduped !== newIntermediate &&
        newIntermediateDeduped !== intermediate
      ) {
        newIntermediateDeduped.deduped.push(newIntermediate);
      }

      if (!results.includes(newIntermediateDeduped)) {
        results.push(newIntermediateDeduped);
      }
    }

    return results;
  }
}

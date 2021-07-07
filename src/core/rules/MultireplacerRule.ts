import { implementation as replaceAll } from 'string.prototype.replaceall';
import { Intermediate } from '../utils/Intermediate';
import { FlavorizationPredicateGroup } from '../predicates/FlavorizationPredicateGroup';
import { FlavorizationPredicateObject } from '../predicates/FlavorizationPredicateObject';
import { ReplacementsList } from './ReplacementsList';
import * as Splitters from '../utils/Splitters';

export class MultireplacerRule implements FlavorizationPredicateObject {
  public readonly predicates = new FlavorizationPredicateGroup();
  public readonly replacements = new ReplacementsList(this);
  public searchValue: string | RegExp = '';
  public splitter: keyof typeof Splitters = 'none';

  constructor(public id: string) {}

  public appliesTo(intermediate: Intermediate): boolean {
    return !!this.searchValue && this.predicates.appliesTo(intermediate);
  }

  public apply(intermediate: Intermediate): Intermediate[] {
    const results: Intermediate[] = [];

    for (const variant of this.replacements) {
      const newValue = intermediate.value.replace(
        Splitters[this.splitter],
        (substring) =>
          replaceAll.call(substring, this.searchValue, variant.value),
      );

      const newIntermediate = new Intermediate(newValue, intermediate, variant);
      const newIntermediateDeduped = newIntermediate.equals(intermediate)
        ? intermediate
        : results.find((i) => newIntermediate.equals(i)) || newIntermediate;

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

import { FlavorizationPredicate } from './FlavorizationPredicate';
import { Intermediate } from '../utils/Intermediate';
import { FlavorizationPredicateObject } from './FlavorizationPredicateObject';
import { FlavorizationPredicateWrapper } from './FlavorizationPredicateWrapper';

export class FlavorizationPredicateGroup
  implements FlavorizationPredicateObject
{
  protected readonly predicates: FlavorizationPredicateObject[] = [];

  and<T extends Intermediate>(predicate: FlavorizationPredicate<T>): this {
    const predicateObject = new FlavorizationPredicateWrapper(predicate, true);
    this.predicates.push(predicateObject);
    return this;
  }

  andNot<T extends Intermediate>(predicate: FlavorizationPredicate<T>): this {
    const predicateObject = new FlavorizationPredicateWrapper(predicate, false);
    this.predicates.push(predicateObject);
    return this;
  }

  appliesTo(intermediate: Intermediate): boolean {
    let p: FlavorizationPredicateObject;
    let i: number;

    const n = this.predicates.length;
    for (i = 0; i < n; i++) {
      p = this.predicates[i];
      if (!p.appliesTo(intermediate)) {
        return false;
      }
    }

    return true;
  }
}

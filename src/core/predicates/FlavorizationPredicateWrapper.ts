import { Intermediate } from '../utils/Intermediate';
import { FlavorizationPredicateObject } from './FlavorizationPredicateObject';
import { FlavorizationPredicateFunction } from './FlavorizationPredicateFunction';
import { FlavorizationPredicate } from './FlavorizationPredicate';

export class FlavorizationPredicateWrapper<
  T extends Intermediate = Intermediate,
> implements FlavorizationPredicateObject<T>
{
  protected sign: boolean;
  protected fn: FlavorizationPredicateFunction<T>;

  constructor(predicate: FlavorizationPredicate<T>, sign = true) {
    this.sign = Boolean(sign);
    this.fn =
      typeof predicate === 'function'
        ? predicate
        : predicate.appliesTo.bind(predicate);
  }

  appliesTo(value: T): boolean {
    return this.sign === Boolean(this.fn(value));
  }
}

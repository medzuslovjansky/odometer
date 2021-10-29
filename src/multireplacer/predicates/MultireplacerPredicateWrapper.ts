import { Intermediate } from '../Intermediate';
import { MultireplacerPredicateObject } from './MultireplacerPredicateObject';
import { MultireplacerPredicateFunction } from './MultireplacerPredicateFunction';
import { MultireplacerPredicate } from './MultireplacerPredicate';

export class MultireplacerPredicateWrapper<Context>
  implements MultireplacerPredicateObject<Context>
{
  protected sign: boolean;
  protected fn: MultireplacerPredicateFunction<Context>;

  constructor(predicate: MultireplacerPredicate<Context>, sign = true) {
    this.sign = Boolean(sign);
    this.fn =
      typeof predicate === 'function'
        ? predicate
        : predicate.appliesTo.bind(predicate);
  }

  appliesTo(value: Intermediate<Context>): boolean {
    return this.sign === Boolean(this.fn(value));
  }
}

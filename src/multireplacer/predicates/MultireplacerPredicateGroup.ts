import { MultireplacerPredicate } from './MultireplacerPredicate';
import { Intermediate } from '../../utils';
import { MultireplacerPredicateObject } from './MultireplacerPredicateObject';
import { MultireplacerPredicateWrapper } from './MultireplacerPredicateWrapper';
import { Replacement } from '../Replacement';

export class MultireplacerPredicateGroup<Context>
  implements MultireplacerPredicateObject<Context>
{
  protected readonly predicates: MultireplacerPredicateObject<Context>[] = [];

  and(predicate: MultireplacerPredicate<Context>): this {
    const predicateObject = new MultireplacerPredicateWrapper<Context>(
      predicate,
      true,
    );

    this.predicates.push(predicateObject);
    return this;
  }

  andNot(predicate: MultireplacerPredicate<Context>): this {
    const predicateObject = new MultireplacerPredicateWrapper<Context>(
      predicate,
      false,
    );

    this.predicates.push(predicateObject);
    return this;
  }

  appliesTo(
    intermediate: Intermediate<Context, Replacement<Context>>,
  ): boolean {
    let p: MultireplacerPredicateObject<Context>;
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

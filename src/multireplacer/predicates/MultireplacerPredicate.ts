import { MultireplacerPredicateFunction } from './MultireplacerPredicateFunction';
import { MultireplacerPredicateObject } from './MultireplacerPredicateObject';

export type MultireplacerPredicate<Context> =
  | MultireplacerPredicateFunction<Context>
  | MultireplacerPredicateObject<Context>;

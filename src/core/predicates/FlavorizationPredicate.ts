import { Intermediate } from '../utils/Intermediate';
import { FlavorizationPredicateFunction } from './FlavorizationPredicateFunction';
import { FlavorizationPredicateObject } from './FlavorizationPredicateObject';

export type FlavorizationPredicate<T extends Intermediate = Intermediate> =
  | FlavorizationPredicateFunction<T>
  | FlavorizationPredicateObject<T>;

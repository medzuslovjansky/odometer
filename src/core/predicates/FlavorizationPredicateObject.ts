import { Intermediate } from '../utils/Intermediate';

export interface FlavorizationPredicateObject<
  T extends Intermediate = Intermediate,
> {
  appliesTo(value: T): boolean;
}

import { Intermediate } from '../utils/Intermediate';

export type FlavorizationPredicateFunction<
  T extends Intermediate = Intermediate,
> = (value: T) => boolean;

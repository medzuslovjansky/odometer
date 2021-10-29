import { Intermediate } from '../Intermediate';

export type MultireplacerPredicateFunction<Context> = (
  value: Intermediate<Context>,
) => boolean;

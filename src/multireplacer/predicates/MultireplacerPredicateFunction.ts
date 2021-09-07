import { Intermediate } from '../../utils';
import { Replacement } from '../Replacement';

export type MultireplacerPredicateFunction<Context> = (
  value: Intermediate<Context, Replacement<Context>>,
) => boolean;

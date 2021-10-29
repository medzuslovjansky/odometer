import { Intermediate } from '../Intermediate';

export interface MultireplacerPredicateObject<Context> {
  appliesTo(value: Intermediate<Context>): boolean;
}

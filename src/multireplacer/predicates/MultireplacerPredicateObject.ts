import { Intermediate } from '../../utils';
import { Replacement } from '../Replacement';

export interface MultireplacerPredicateObject<Context> {
  appliesTo(value: Intermediate<Context, Replacement<Context>>): boolean;
}

import { Intermediate } from '../utils';
import { Replacement } from './Replacement';

export interface MultireplacerOutput<Context = unknown> {
  variants: Intermediate<Context, Replacement<Context>>[];
}

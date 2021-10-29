import { Intermediate } from './Intermediate';

export interface MultireplacerOutput<Context = unknown> {
  variants: Intermediate<Context>[];
}

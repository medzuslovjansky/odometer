import { Replacement } from '../multireplacer';
import { Intermediate } from '../utils';

export type OdometerStats<T> = {
  a: Intermediate<T, Replacement<T>>;
  b: Intermediate<T, Replacement<T>>;
  distance: number;
};

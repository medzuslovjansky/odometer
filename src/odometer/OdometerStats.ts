import { Replacement } from '../multireplacer';
import { Intermediate } from '../utils';

export type OdometerStats<T> = {
  a: Intermediate<T, Replacement<T>> | null;
  b: Intermediate<T, Replacement<T>> | null;
  distance: number;
};

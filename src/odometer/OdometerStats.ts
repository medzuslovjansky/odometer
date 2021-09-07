import { Intermediate } from '../utils';

export type OdometerStats = {
  a: Intermediate | null;
  b: Intermediate | null;
  distance: number;
}

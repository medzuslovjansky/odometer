import { Intermediate } from '../utils';

import { getEditingDistance } from './utils/getEditingDistance';
import { OdometerStats } from './OdometerStats';

export class Odometer {
  public getDifference(
    aSet: Intermediate[],
    bSet: Intermediate[],
  ): OdometerStats {
    let minimalDistance = Number.POSITIVE_INFINITY;
    let aBest: Intermediate | null = null;
    let bBest: Intermediate | null = null;

    for (const aRaw of aSet) {
      const a = aRaw.value.toLowerCase();
      for (const bRaw of bSet) {
        const b = bRaw.value.toLowerCase();
        const avgLength = 0.5 * (a.length + b.length);
        const distance = getEditingDistance(a, b);
        const relativeDistance = distance / avgLength;

        if (relativeDistance < minimalDistance) {
          minimalDistance = relativeDistance;
          aBest = aRaw;
          bBest = bRaw;
        }
      }
    }

    return {
      a: aBest,
      b: bBest,
      distance: minimalDistance,
    };
  }
}

import { Replacement } from '../multireplacer';
import { Intermediate } from '../utils';

import { getEditingDistance } from './utils/getEditingDistance';
import { OdometerStats } from './OdometerStats';

export class Odometer<Context = unknown> {
  public getDifference(
    aSet: Intermediate<Context, Replacement<Context>>[],
    bSet: Intermediate<Context, Replacement<Context>>[],
  ): OdometerStats<Context> | null {
    let minimalDistance = Number.POSITIVE_INFINITY;
    let aBest: Intermediate<Context, Replacement<Context>> | null = null;
    let bBest: Intermediate<Context, Replacement<Context>> | null = null;

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

    if (aBest == null || bBest == null) {
      return null;
    }

    return {
      a: aBest,
      b: bBest,
      distance: minimalDistance,
    };
  }
}
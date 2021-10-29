import sortedUniqBy from 'lodash/sortedUniqBy';
import { getEditingDistance } from './utils/getEditingDistance';
import { Intermediate } from '../multireplacer';

export class Odometer<Context = unknown> {
  public sortByRelevance(
    searchQueries: Intermediate<Context>[],
    searchResults: Intermediate<Context>[],
  ): OdometerComparison<Context>[] {
    const comparisons = new Map<
      Intermediate<Context>,
      OdometerComparison<Context>
    >();

    for (const result of searchResults) {
      let minimalDistance = Number.POSITIVE_INFINITY;

      for (const query of searchQueries) {
        const distance = getEditingDistance(query.value, result.value);
        if (distance < minimalDistance) {
          minimalDistance = distance;
          comparisons.set(result, {
            query,
            result,
            editingDistance: minimalDistance,
          });
        }
      }
    }

    searchResults.sort((a, b) => {
      const c1 = comparisons.get(a);
      const c2 = comparisons.get(b);
      if (c1 && c2) {
        return c1.editingDistance - c2.editingDistance;
      } else if (c1) {
        return -1;
      } else if (c2) {
        return 1;
      } else {
        return 0;
      }
    });

    return sortedUniqBy(searchResults, (r) => (r.root ?? r).value)
      .map<OdometerComparison<Context> | undefined>((r) => comparisons.get(r))
      .filter(Boolean) as Array<OdometerComparison<Context>>;
  }
}

export type OdometerComparison<Context> = {
  query: Intermediate<Context>;
  result: Intermediate<Context>;
  editingDistance: number;
};

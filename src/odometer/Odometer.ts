import { getEditingDistance } from './utils/getEditingDistance';
import { Intermediate } from '../multireplacer';
import { uniqBy } from 'lodash';

export type OdometerOptions = {
  ignoreCase: boolean;
  ignoreNonLetters: boolean;
};

export type OdometerComparison<Context> = {
  query: Intermediate<Context>;
  result: Intermediate<Context>;
  editingDistance: number;
};

export class Odometer<Context = unknown> {
  constructor(
    public readonly options: OdometerOptions = {
      ignoreCase: false,
      ignoreNonLetters: false,
    },
  ) {}

  public sortByRelevance(
    searchQueries: Intermediate<Context>[],
    searchResults: Intermediate<Context>[],
  ): OdometerComparison<Context>[] {
    const closestMatches = new Map<
      Intermediate<Context>,
      OdometerComparison<Context>
    >();

    for (const result of searchResults) {
      let minimalDistance = Number.POSITIVE_INFINITY;
      const resultValue = this.normalize(result);

      for (const query of searchQueries) {
        const queryValue = this.normalize(query);
        const distance = getEditingDistance(queryValue, resultValue);
        if (distance < minimalDistance) {
          minimalDistance = distance;
          closestMatches.set(result, {
            query,
            result,
            editingDistance: minimalDistance,
          });
        }
      }
    }

    searchResults.sort((a, b) => {
      const c1 = closestMatches.get(a);
      const c2 = closestMatches.get(b);
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

    return uniqBy(searchResults, (r) => (r.root ?? r).value)
      .map<OdometerComparison<Context> | undefined>((r) =>
        closestMatches.get(r),
      )
      .filter(Boolean) as Array<OdometerComparison<Context>>;
  }

  protected normalize(intermediate: Intermediate<unknown>): string {
    let value = intermediate.value;

    if (this.options.ignoreNonLetters) {
      value = value.replace(/[^\p{Letter}]/gu, '');
    }

    if (this.options.ignoreCase) {
      value = value.toLowerCase();
    }

    return value;
  }
}

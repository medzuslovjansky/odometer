import { Odometer } from '../Odometer';
import { Intermediate } from '../../multireplacer';

describe('Odometer', () => {
  test('integration (simple)', () => {
    const odometer = new Odometer();

    const [q1, q2, r1, r2] = ['morje', 'måre', 'miare', 'mare'].map(
      (s) => new Intermediate(s, null),
    );

    const result = odometer.sortByRelevance([q1, q2], [r1, r2]);

    expect(result).toEqual([
      {
        query: q2,
        result: r2,
        editingDistance: 1,
      },
      {
        query: q2,
        result: r1,
        editingDistance: 2,
      },
    ]);
  });

  test('integration (dedupe)', () => {
    const odometer = new Odometer();

    const [q, r] = ['mlåt', 'молот'].map((s) => new Intermediate(s, null));
    const [q1, q2] = ['mlat', 'molot'].map((s) => new Intermediate(s, q));
    const [r1, r2, r3] = ['molotok', 'molotoček', 'molot'].map(
      (s) => new Intermediate(s, r),
    );

    const result = odometer.sortByRelevance([q1, q2], [r1, r2, r3]);

    expect(result).toEqual([
      {
        query: q2,
        result: r3,
        editingDistance: 0,
      },
    ]);
  });
});

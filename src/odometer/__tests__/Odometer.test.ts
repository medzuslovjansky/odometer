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
    const odometer = new Odometer({
      ignoreCase: true,
      ignoreNonLetters: true,
    });

    const [Q, ...R] = ['rybomlåt', 'риба-молот', 'СТРАШНА РИБА'].map(
      (s) => new Intermediate(s, null),
    );

    const [q1, q2] = ['рибомлат', 'рибомолот'].map(
      (s) => new Intermediate(s, Q),
    );

    const result = odometer.sortByRelevance([q1, q2], R);

    expect(result).toEqual([
      {
        query: q2,
        result: R[0],
        editingDistance: 1,
      },
      {
        query: q1,
        result: R[1],
        editingDistance: 10,
      },
    ]);
  });
});

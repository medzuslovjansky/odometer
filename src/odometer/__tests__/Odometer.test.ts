import { Odometer } from '../Odometer';
import { Intermediate } from '../../utils';
import { Replacement } from '../../multireplacer';

describe('Odometer', () => {
  test('integration', () => {
    const odometer = new Odometer();

    const [a1, a2, b1, b2] = ['morje', 'måre', 'mare', 'miare'].map(
      (s) => new Intermediate<unknown, Replacement<unknown>>(s, null),
    );

    const result = odometer.getDifference([a1, a2], [b1, b2]);

    expect(result).toEqual({
      a: a2,
      b: b1,
      distance: 0.5,
    });
  });
});

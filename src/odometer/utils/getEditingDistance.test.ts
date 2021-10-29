import { getEditingDistance } from './getEditingDistance';

test.each([
  ['a', 'a', 0],
  ['a', 'ǎ', 1],
  ['אָ', 'א', 1],
  ['noc', 'nòč', 2],
  ['се', 'се', 0],
  ['се', 'сё', 1],
  ['о́', 'о', 1],
])('getEditingDistance(%j, %j) should equal %d', (a, b, expected) => {
  expect(getEditingDistance(a, b)).toBe(expected);
});

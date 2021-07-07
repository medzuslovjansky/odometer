import { ReplacementFunction } from '../../core/rules/Replacement';

export default function createMapReplacer(
  replacement: string,
): ReplacementFunction {
  const pairs = replacement
    .split(/\s*/)
    .map((pair) => pair.split(/-/, 2).map((s) => s.trim()) as [string, string]);

  const map = new Map<string, string>(pairs);
  return function (value: string) {
    if (map.has(value)) {
      return map.get(value) || '';
    }

    const U = value.toUpperCase();
    if (map.has(U)) {
      return map.get(U) || '';
    }

    return value;
  };
}

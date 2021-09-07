function difference(a: string, b: string): number {
  if (a[0] !== b[0]) {
    return 1;
  }

  if (a.length !== b.length) {
    return 0.5;
  }

  const n = a.length;
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      return 0.5;
    }
  }

  return 0;
}

function getEditingDistanceForCharSequences(a: string[], b: string[]): number {
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  const matrix = [];

  // increment along the first column of each row
  let i;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // increment each column in the first row
  let j;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      const delta = difference(b[i - 1], a[j - 1]);
      if (delta === 0) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + delta, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1,
          ),
        ); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

function splitByDiacritics(s: string): string[] {
  const normalized = s.normalize('NFD');
  const result: string[] = [];
  const regex = /\p{Letter}\p{Mark}*/gu;
  let group: string[] | null;
  let n = 0;

  while ((group = regex.exec(normalized)) !== null) {
    const charSequence = group[0];
    result.push(charSequence);
    n += charSequence.length;
  }

  if (n < normalized.length) {
    result.push(normalized.slice(n));
  }

  return result;
}

export function getEditingDistance(a: string, b: string): number {
  return getEditingDistanceForCharSequences(
    splitByDiacritics(a),
    splitByDiacritics(b),
  );
}

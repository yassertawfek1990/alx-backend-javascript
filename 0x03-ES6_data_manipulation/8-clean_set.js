export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  const parts = [];

  for (const x of set.values()) {
    if (typeof x === 'string' && x.startsWith(startString)) {
      const z = x.substring(startString.length);

      if (z && z !== x) {
        parts.push(z);
      }
    }
  }
  return parts.join('-');
}

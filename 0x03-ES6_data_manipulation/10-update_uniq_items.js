export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((z, x) => {
    if (z === 1) {
      map.set(x, 100);
    }
  });
}

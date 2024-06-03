export default function createInt8TypedArray(
  length,
  position,
  value,
) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const r = new DataView(
    new ArrayBuffer(length),
    0,
    length,
  );

  r.setUint8(position, value);
  return r;
}

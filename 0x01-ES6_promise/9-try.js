export default function guardrail(mathFunction) {
  const queue = [];
  let v;

  try {
    v = mathFunction();
  } catch (err) {
    v = err.toString();
  }

  queue.push(v);
  queue.push('Guardrail was processed');

  return queue;
}

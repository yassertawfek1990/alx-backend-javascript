export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* e */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* e */

  return [task, task2];
}

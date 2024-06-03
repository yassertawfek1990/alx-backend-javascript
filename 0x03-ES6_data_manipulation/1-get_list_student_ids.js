export default function getListStudentIds(arr) {
  let r = [];
  if (arr instanceof Array) {
    r = arr.map((item) => item.id);
  }

  return r;
}

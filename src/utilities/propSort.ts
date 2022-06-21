export function propSort(prop) {
  return (a, b) => {
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    return 0;
  };
}
export function nestedPropSort(prop1, prop2) {
  return (a, b) => {
    if (a[prop1][prop2] > b[prop1][prop2]) return 1;
    if (a[prop1][prop2] < b[prop1][prop2]) return -1;
    return 0;
  };
}

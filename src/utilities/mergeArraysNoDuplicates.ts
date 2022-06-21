export function mergeArraysNoDuplicates(uniqueKey, ...arrays) {
  const allArrays = [...arrays.flat()];
  const newArray: any[] = [];
  allArrays.forEach((item) => {
    if (!newArray.find((i) => i[uniqueKey] === item[uniqueKey]))
      newArray.push(item);
  });
  return newArray;
}

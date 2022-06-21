const formatMacroCase = (str) => {
  let parts = str.toLowerCase();
  parts = parts.split("");
  const capitalIndexes: string[] = [];
  const capitals = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  parts.forEach((ch, i) => {
    if (capitals.includes(ch)) capitalIndexes.push(i);
  });
  capitalIndexes.forEach((num, i) => {
    parts.splice(num + i, 0, " ");
  });
  parts[0] = parts[0].toUpperCase();
  return parts.join("");
};

export default formatMacroCase;

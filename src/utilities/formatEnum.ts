export default function formatEnum(e) {
  const newEnum = e.toLowerCase().replaceAll("_", " ").split("");
  newEnum[0] = newEnum[0].toUpperCase();
  return newEnum.join("");
}

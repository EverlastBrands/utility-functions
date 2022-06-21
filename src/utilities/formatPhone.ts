export function formatPhone(number) {
  number = number.toString().split("");
  if (number.length !== 10) return "000-000-0000";
  number.splice(3, 0, "-");
  number.splice(7, 0, "-");
  return number.join("");
}

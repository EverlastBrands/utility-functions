export function formatPhoneSimple(str) {
  let parts = str.split("");
  parts.splice(0, 0, "(");
  parts.splice(4, 0, ")");
  parts.splice(5, 0, " ");
  parts.splice(9, 0, "-");
  return parts.join("");
}

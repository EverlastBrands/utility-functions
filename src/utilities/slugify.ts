export function slugify(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^a-zA-Z0-9 ]/g, "");
}

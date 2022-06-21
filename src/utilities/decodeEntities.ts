var entities = {
  amp: "&",
  apos: "'",
  "#x27": "'",
  "#x2F": "/",
  "#39": "'",
  "#47": "/",
  lt: "<",
  gt: ">",
  nbsp: " ",
  quot: '"',
};

export default function decodeEntities(text) {
  if (!text) return "";
  return text.replace(/&([^;]+);/gm, function (match, entity) {
    return entities[entity] || match;
  });
}

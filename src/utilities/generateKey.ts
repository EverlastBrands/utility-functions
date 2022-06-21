export function generateKey(length = 36) {
  const validCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let newKey = "";
  for (let i = length; i > 0; i--) {
    newKey += validCharacters[getRandomInt(validCharacters.length - 1)];
  }
  return newKey;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

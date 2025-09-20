export const groupKeys = (originalObject, chosenKeys) =>
  chosenKeys
    .filter((key) => key in originalObject && originalObject[key] !== '')
    .map((key) => [key, originalObject[key]]);

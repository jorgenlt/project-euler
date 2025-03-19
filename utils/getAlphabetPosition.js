const getAlphabetPosition = (letter) => {
  const lowerCaseLetter = letter.toLowerCase();
  const position = lowerCaseLetter.charCodeAt(0) - "a".charCodeAt(0) + 1;
  return position;
};

export default getAlphabetPosition;

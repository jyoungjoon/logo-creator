const {
  validateHTMLColorName,
  validateHTMLColorHex,
} = require(`validate-color`);

const isTwoToThreeChars = async (input) => {
  const chars = await input;
  if (chars.length > 3 || chars.length === 0 || chars.length === 1) {
    return false;
  } else {
    return true;
  }
};
const isColor = async (input) => {
  const color = await input;
  return validateHTMLColorName(color) || validateHTMLColorHex(color);
};

module.exports = {
  isTwoToThreeChars,
  isColor,
};

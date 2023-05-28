// Third party modules:
const inquirer = require("inquirer");

// Custom modules:
const generateLogo = require(`./utils/generateLogo.js`);
const { isTwoToThreeChars, isColor } = require(`./utils/handleUserInput.js`);
const writeToFile = require(`./utils/writeToFile.js`);

// Questions Array:
const questions = [
  {
    type: `input`,
    name: `text`,
    message: `Please enter your logo's text. Limit to 2 - 3 characters.`,
    validate: isTwoToThreeChars,
  },
  {
    type: `input`,
    name: `textColor`,
    message: `Please enter a color keyword (e.g. 'white') for the text. \n You may also use Hex color codes (e.g. #FFFFFF). Must include '#' when using Hex code. \n Default color is white.`,
    default: `White`,
    validate: isColor,
  },
  {
    type: `list`,
    name: `shape`,
    message: `Please choose a shape of your logo. Default shape is Circle.`,
    choices: [`Circle`, `Square`, `Triangle`],
    default: `Circle`,
  },
  {
    type: `input`,
    name: `shapeColor`,
    message: `Please enter a color keyword (e.g. 'Blue') for the shape. \n You may also use Hex color codes (e.g. #0000FF). Must include '#' when using Hex code. \n Default is blue.`,
    default: `Blue`,
    validate: isColor,
  },
];

// Define a function that invokes prompts and handle responses using promise; then it calls writeToFile function:
const init = function () {
  inquirer.prompt(questions).then((response) => {
    const logoMarkup = generateLogo(response);
    writeToFile(`logo-${Math.trunc(Math.random() * 9999)}.svg`, logoMarkup);
  });
};

// Call init function to start the application:
init();

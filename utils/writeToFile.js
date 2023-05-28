// Core modules:
const fs = require(`fs`);
const path = require("path");

const writeToFile = function (fileName, data) {
  const fullPath = path.join("./examples", fileName);
  fs.writeFile(fullPath, data, (err) =>
    err
      ? console.error(err)
      : console.log(`Congratulations! Your logo is created at ${fullPath}`)
  );
};

module.exports = writeToFile;

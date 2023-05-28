const Circle = require(`../lib/circle.js`);
const Square = require(`../lib/square.js`);
const Triangle = require(`../lib/triangle.js`);

const shapeClasses = {
  Circle: Circle,
  Square: Square,
  Triangle: Triangle,
};

function generateLogo(data) {
  const ShapeClass = shapeClasses[data.shape];
  const logo = new ShapeClass(data.text, data.textColor, data.shapeColor).render();
  return logo;
}

module.exports = generateLogo;

const Circle = require(`../lib/circle.js`);
const Square = require(`../lib/square.js`);
const Triangle = require(`../lib/triangle.js`);

// Triangle logo test:
const triangle = new Triangle("JYJ", "green", "blue");

describe(`Blue triangle shaped logo creation`, () => {
  it(`should create a blue triangle shaped logo with green 'JYJ' text`, () => {
    expect(triangle.render()).toBe(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0 200, 150 0, 300 200" fill="blue" /><text x="150" y="135" font-size="60" text-anchor="middle" fill="green">JYJ</text></svg>`
    );
  });
});

// Circle logo test:
const circle = new Circle("JYJ", "green", "blue");

describe(`Blue circle shaped logo creation`, () => {
  it(`should create a blue circle shaped logo with green 'JYJ' text`, () => {
    expect(circle.render()).toBe(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="blue" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="green">JYJ</text></svg>`
    );
  });
});

// Square logo test:
const square = new Square("JYJ", "green", "blue");

describe(`Blue square shaped logo creation`, () => {
  it(`should create a blue square shaped logo with green 'JYJ' text`, () => {
    expect(square.render()).toBe(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="200" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">JYJ</text></svg>`
    );
  });
});

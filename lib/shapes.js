class Shapes {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Square extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
    this.shape = "Square";
  }
  render = function () {
    return `<rect x="60" y="10" width="180" height="180" fill="${this.shapeColor}" />`;
  };
}

class Triangle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
    this.shape = "Square";
  }
  render = () => {
    return `<polygon points="150, 0 275, 160 25, 160" fill="${this.shapeColor}" />`;
  };
}

class Circle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
    this.shape = "Square";
  }
  render = () => {
    return `<circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />`;
  };
}

module.exports = { Square, Triangle, Circle };

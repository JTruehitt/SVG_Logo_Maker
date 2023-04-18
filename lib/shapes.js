class Shapes {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Square extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
    this.shape = "Square";
  };
  render = function() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />`;
  };
}

class Triangle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
    this.shape = "Square";
  };
  render = () => {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  };
}

class Circle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
    this.shape = "Square";
  }; render = () => {
    return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />`;
  };
}

module.exports = { Square, Triangle, Circle };

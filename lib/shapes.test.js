const { Square, Triangle, Circle } = require('./shapes');

test('renders Square correctly', () => {
const shape1 = new Square();
shape1.setColor("blue");
expect(shape1.render()).toEqual('<rect x="60" y="10" width="180" height="180" fill="blue" />');
});

test('renders Triangle correctly', () => {
const shape2 = new Triangle();
shape2.setColor("blue");
expect(shape2.render()).toEqual('<polygon points="150, 0 275, 160 25, 160" fill="blue" />');
});

test('renders Circle correctly', () => {
const shape3 = new Circle();
shape3.setColor("blue");
expect(shape3.render()).toEqual('<circle cx="150" cy="100" r="90" fill="blue" />');
});
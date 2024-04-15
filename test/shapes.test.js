const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="0,-80 70,80 -70,80" fill="blue" />');

console.log(shape)

const { Circle, Square, Triangle } = require('../lib/shapes');

test('Circle render method', () => {
    const circle = new Circle('ABC', 'red', 'blue');
    const svgContent = circle.render();
    expect(svgContent).toContain('<circle cx="0" cy="0" r="70" fill="blue"/>');
    expect(svgContent).toContain('<text x="0" y="0" text-anchor="middle" alignment-baseline="middle" fill="red">ABC</text>');
});

test('Square render method', () => {
    const square = new Square('DEF', 'green', 'yellow');
    const svgContent = square.render();
    expect(svgContent).toContain('<rect x="-70" y="-70" width="140" height="140" fill="yellow"/>');
    expect(svgContent).toContain('<text x="0" y="0" text-anchor="middle" alignment-baseline="middle" fill="green">DEF</text>');
});

test('Triangle render method', () => {
    const triangle = new Triangle('GHI', 'purple', 'orange');
    const svgContent = triangle.render();
    expect(svgContent).toContain('<polygon points="0,-80 70,80 -70,80" fill="orange"/>');
    expect(svgContent).toContain('<text x="0" y="20" text-anchor="middle" alignment-baseline="middle" fill="purple">GHI</text>');
});
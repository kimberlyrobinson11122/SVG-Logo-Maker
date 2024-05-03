const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

const filename = "logo.svg";

// Defining the validateColor function (important to do before using inquirer)
const validateColor = input => {
    if (input.match(/^#[0-9a-fA-F]{6}$/i)) {
        // Input hexadecimal color
        return true;
    } else if (input.match(/^[a-zA-Z]+$/)) {
        // Input color name (any alphabetical input)
        return true;
    } else {
        return 'Enter a valid color, please use a color name or hexadecimal.';
    }
};

// User questions/prompts using inquirer
inquirer.prompt([
    {
        type: 'input',
        message: 'What three characters would you like in your logo?',
        name: 'letters',
        validate: input => input.length <= 3 ? true : 'Please enter up to three letters.',
    },
    {
        type: 'input',
        message: 'What color would you like those characters to be?',
        name: 'textColor',
        validate: validateColor,
    },
    {
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
        message: 'What shape would you like the shape of this logo to be?',
        name: 'shape',
    },
    {   
        type: 'input',
        message: 'What color would you like the shape of this logo to be?',
        name: 'shapeColor',
        validate: validateColor,
    }
]).then(data => generateSVG(data));

const generateSVG = data => {
    let shape;
    switch (data.shape) {
        case 'Circle':
            shape = new Circle(data.letters, data.textColor, data.shapeColor);
            break;
        case 'Square':
            shape = new Square(data.letters, data.textColor, data.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(data.letters, data.textColor, data.shapeColor);
            break;
    }
    const svgContent = shape.render();
    fs.writeFileSync(filename, svgContent, "utf-8");
    console.log("You have a newly generated logo.svg file, please save before using the SVG Logo maker again.");
};

module.exports = { generateSVG };

//     <!-- <svg xmlns="http://www.w3.org/2000/svg" -- Reference_kjr_2024-05-03 >
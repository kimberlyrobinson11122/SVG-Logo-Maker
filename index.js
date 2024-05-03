const inquirer = require("inquirer");
const fs = require("fs");

const filename = "logo.svg";

// function CreateShape(letters, textColor, shape, shapeFill) {
//     this.letters = letters;
//     this.textColor = textColor;
//     this.shape = shape;
//     this.shapeFill = shapeFill;
//     this.createNewShape = function () {
//         console.log(`just make this ${this.letters} with ${this.textColor}`);
//         };
//     };

// todo create new object using constr
// const manifest = new CreateShape (
//     'KJR',
//     'White',
//     'Circle',
//     'Pink'
// );

//todo call the createNewShape
// manifest.createNewShape();

//prototype
//circle
// Object.create(??????)
//triangle
//square
//_________________________________________new Try Below_______________________________________________________________________

// class Shape {
//   constructor(letters, textColor, shapeName, shapeFill) {
//     this.letters = letters;
//     this.textColor = textColor;
//     this.shapeName = shapeName;
//     this.shapeType = "";
//     this.shapeFill = shapeFill;
//   }
//   createNewShape = function () {
//         return `<svg class="${this.shapeName}"
//             width="300"
//             height="200"
//             viewBox="-100 -100 200 200"
//             >

//             ${this.shapeType}

//         <text
//             x="0"
//             y="20"
//             text-anchor="middle"
//             alignment-baseline="middle"
//             dominant-baseline="middle"
//             fill="${this.textColor}"
//             font-family="Tahoma"
//             font-weight="bold"
//             font-size="30"
//         >
//             ${this.letters}</text>

//         </g>
//         </svg>`
//   };
// }

// class Circle extends Shape {
//     setShapeType() {
//         this.shapeType = `<circle cx="0" cy="20" r="70" fill="${this.shapeFill}"/>`
//     }
// }

// class Triangle extends Shape {
//     setShapeType() {
//         this.shapeType = `<polygon points="0,-80 70,80 -70,80" fill="${this.shapeFill}"/>`
//     }
// }

// class Square extends Shape {
//     setShapeType() {
//         this.shapeType = `<rect x="0" y="0" width="300" height="300" fill="${this.shapeFill}"/>`
//     }
// }



// function added to handle color selection validation
const validateColor = (input) => {
    if (input.match(/^#[0-9a-fA-F]{6}$/i)) {
        // input is a hexadecimal color
        return true;
    } else if (input.match(/^[a-zA-Z]+$/)) {
        // input is a color name (any alphabetical input)
        return true;
    } else {
        return 'Please enter a valid color using a color name or hexadecimal.';
    }
};

//user questions/prompts
inquirer.prompt([
    {
        type: 'input',
        message: 'What three letters would you like in your logo?',
        name: 'pLetters',
        //validate only three letters, else throw error
    },

    {
        type: 'input',
        message: 'What color would you like that text to be?',
        name: 'pTextColor',
        validate: validateColor,
    },

    {
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
        message: 'What shape would you like your logo to be?',
        name: 'pShape',
       },

    {   type: 'input',
        message: 'What color would you the logo shape to be?',
        name: 'pShapeColor',
        validate: validateColor,
    }

]).then((data) => {
    console.log(data);

        //allows the correct shape to be chosen
        let template
        if (data.pShape === 'Circle') {
            template = fs.readFileSync("lib/shapes_circle.js", "utf-8");
        } else if (data.pShape === 'Square') {
            template = fs.readFileSync("lib/shapes_square.js", "utf-8");
        } else if (data.pShape === 'Triangle') {
            template = fs.readFileSync("lib/shapes_triangle.js", "utf-8");
        };
    })

// uses this template as the guide for generating the new file, this was chosen to provide flexibility with the template if requirements or spec changed
// let template = fs.readFileSync("lib/shapes_triangle.js", "utf-8");

// console.log(template);

//this allows the user input to be added to the generated file
// template = template.replace("{{pLetters}}", data.pLetters);
// template = template.replace("{{pTextColor}}", data.pTextColor);
// template = template.replace("{{pShape}}", data.pShape);
// template = template.replace("{{pShapeColor}}", data.pShapeColor);

//this writes the file - output
fs.writeFileSync(filename, template, "utf-8");

console.log("Generated logo.svg");







// todo create new object using const

//todo call the createNewShape
// createNewShape();

//prototype
//circle
// Object.create(??????)
//triangle
//square
//___________

//newShape.Object.create();

//__________________________________________Original Try, worked but didn't use class____________________________________

// function added to handle color selection validation
// const validateColor = (input) => {
//     if (input.match(/^#[0-9a-fA-F]{6}$/i)) {
//         // input is a hexadecimal color
//         return true;
//     } else if (input.match(/^[a-zA-Z]+$/)) {
//         // input is a color name (any alphabetical input)
//         return true;
//     } else {
//         return 'Please enter a valid color using a color name or hexadecimal.';
//     }
// };

// //user questions/prompts
// inquirer.prompt([
//     {
//         type: 'input',
//         message: 'What three letters would you like in your logo?',
//         name: 'pLetters',
//         //validate only three letters, else throw error
//     },

//     {
//         type: 'input',
//         message: 'What color would you like that text to be?',
//         name: 'pTextColor',
//         validate: validateColor,
//     },

//     {
//         type: 'list',
//         choices: ['Circle', 'Square', 'Triangle'],
//         message: 'What shape would you like your logo to be?',
//         name: 'pShape',
//        },

//     {   type: 'input',
//         message: 'What color would you the logo shape to be?',
//         name: 'pShapeColor',
//         validate: validateColor,
//     }

// ]).then((data) => {
//     console.log(data);

//         //allows the correct shape to be chosen
//         let template
//         if (data.pShape === 'Circle') {
//             template = fs.readFileSync("lib/shapes_circle.js", "utf-8");
//         } else if (data.pShape === 'Square') {
//             template = fs.readFileSync("lib/shapes_square.js", "utf-8");
//         } else if (data.pShape === 'Triangle') {
//             template = fs.readFileSync("lib/shapes_triangle.js", "utf-8");
//         };

//uses this template as the guide for generating the new file, this was chosen to provide flexibility with the template if requirements or spec changed
//let template = fs.readFileSync("lib/shapes_triangle.js", "utf-8");

// console.log(template);

// //this allows the user input to be added to the generated file
// template = template.replace("{{pLetters}}", data.pLetters);
// template = template.replace("{{pTextColor}}", data.pTextColor);
// template = template.replace("{{pShape}}", data.pShape);
// template = template.replace("{{pShapeColor}}", data.pShapeColor);

// //this writes the file - output
// fs.writeFileSync(filename, template, "utf-8");

// console.log("Generated logo.svg");

// });

//     <!-- <svg xmlns="http://www.w3.org/2000/svg" -- do I need this? >

// class Shape {
//     constructor(letters, color, shape, fill) {
//         this.letters = letters;
//         this.color = color;
//         this.shape = shape;
//         this.fill = fill;
//         this.create = function() {
//             console.log(`yayayay`);
//         };
//     };
// };

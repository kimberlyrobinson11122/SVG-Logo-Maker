const inquirer = require("inquirer");
const fs = require("fs");

const filename = "logo.svg"

//user questions/prompts
inquirer.prompt([
    {
        type: 'input',
        message: 'What three letters would you like in your logo?',
        name: 'pLetters',
    }, 

    {
        type: 'input',
        message: 'What color would you like that text to be?',
        name: 'pTextColor',
        validate: function (input) {
            if (input.match(/^#[0-9a-fA-F]{6}$/i)) {
                //input hexadecimal
                return true;
            } else if (['white', 'red', 'green', 'blue', 'pink', 'yellow'].includes(input.toLowerCase())) {
                //input color
                return true;
            } else {
                return 'please enter a valid color using a keyword or hexadecimal.';
            }
        }
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
        validate: function (input) {
            if (input.match(/^#[0-9a-fA-F]{6}$/i)) {
                //input input hexadecimal
                return true;
            } else if (['white', 'red', 'green', 'blue', 'pink', 'yellow'].includes(input.toLowerCase())) {
                //input color
                return true;
            } else {
                return 'please enter a valid color using a keyword or hexadecimal.';
            }
        }
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
     
    //uses this template as the guide for generating the new file, this was chosen to provide flexibility with the template if requirements or spec changed    
    //let template = fs.readFileSync("lib/shapes_triangle.js", "utf-8");

    console.log(template);

    //this allows the user input to be added to the generated file
    template = template.replace("{{pLetters}}", data.pLetters);
    template = template.replace("{{pTextColor}}", data.pTextColor);
    template = template.replace("{{pShape}}", data.pShape);
    template = template.replace("{{pShapeColor}}", data.pShapeColor);

    //this writes the file - output
    fs.writeFileSync(filename, template, "utf-8");

    console.log("Generated logo.svg");

    });

//     <!-- <svg xmlns="http://www.w3.org/2000/svg" -- do I need this? >

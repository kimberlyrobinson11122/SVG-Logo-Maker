const inquirer = require("inquirer");
const fs = require("fs");

//const keyHex

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
                //input hexa
                return true;
            } else if (['white', 'red', 'green', 'blue', 'pink', 'yellow'].includes(input.toLowerCase())) {
                //input color
                return true;
            } else {
                return 'please enter a valid color using a keyword or hexadecimal.';
            }
            }
    },
        //keyword or hexadecimal
     
    {
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle', 'Square'],
        message: 'What shape would you like your logo to be?',
        name: 'pShape',
        //keyword or hexadecimal
    },

    {   type: 'input',
        message: 'What color would you the logo shape to be??',
        name: 'pShapeColor',
        validate: function (input) {
            if (input.match(/^#[0-9a-fA-F]{6}$/i)) {
                //input hexa
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
});

     
    // //uses this template as the guide for generating the new file, this was chosen to provide flexibility with the template if requirements or spec changed    
    // let template = fs.readFileSync("Readme (template).md", "utf-8");

    // console.log(template);

    //this allows the user input to be added to the generated file
    // template = template.replace("{{pName}}", data.pName);
    // template = template.replace("{{pDescription}}", data.pDescription);
    // template = template.replace("{{pBadge}}", badgeEl);
    // template = template.replace("{{pLicensing}}", data.pLicensing);
    // template = template.replace("{{pInstall}}", data.pInstall);
    // template = template.replace("{{pUsage}}", data.pUsage);
    // template = template.replace("{{pContribution}}", data.pContribution);
    // template = template.replace("{{pTest}}", data.pTest);
    // template = template.replace("{{githubUsername}}", data.githubUsername);
    // template = template.replace("{{pEmail}}", data.pEmail);

     //this writes the file - output
//     fs.writeFileSync(filename, template, "utf-8");

//     console.log("Generated logo.svg");

// });

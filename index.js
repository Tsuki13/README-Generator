var fs = require('fs');
var inquirer = require('inquirer');

// array of questions for user
// const questions = [
//     "Title of Project", "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"
// ];

// function to write README file
// function writeToFile(fileName, data) {

// }

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'Description',
                message: 'Please describe your project',
            },
            {
                type: 'input',
                name: 'Table of contents',
                message: 'Please add the Table of contents',
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'Add Installation instructions',
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'Add Usage information',
            },
            {
                type: 'input',
                name: 'License',
                message: 'Add License',
                options: '',
            },
            {
                type: 'input',
                name: 'Contributing',
                message: 'Add Contribution Guidelines',
            },
            {
                type: 'input',
                name: 'Tests',
                message: 'Add test instructions',
            },
            {
                type: 'input',
                name: 'Questions',
                message: 'Enter your Github username',
            },
            {
                type: 'input',
                name: 'Questions',
                message: 'Enter your email address',
            },
        ]).then(answers => {
            //use feedback
            console.log(answers)
        })
        .catch(error => {
            if (error.isTtyError) {
                //prompt couldn't be rendered in the current environment 
            }
        })
}

// function call to initialize program
init();
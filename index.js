var fs = require('fs');
var inquirer = require('inquirer');


// array of questions for user
// const questions = [
//     "Title of Project", "Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"
// ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('saved!');
    })
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please describe your project',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Add Installation instructions',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Add Usage information',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Add License',
                options: '',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Add Contribution Guidelines',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Add test instructions',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your Github username',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address',
            },
        ]).then(answers => {
            console.log(answers)
            // const { title, description, installation, usage, license, contributing, tests, questions } = data;
            writeToFile('README.md', data, (err) => {
                console.log(err)
            });
        })
        .catch(error => {
            if (error.isTtyError) {
                //prompt couldn't be rendered in the current environment 
            }
        })
}

// function call to initialize program
init();
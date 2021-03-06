var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');

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
                type: 'list',
                name: 'license',
                message: 'Choose License',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
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
            let markDownContent = generateMarkdown(answers)
            writeToFile('./README.md', markDownContent)
        });
}
// function call to initialize program
init();
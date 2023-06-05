// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the Project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give small summary about the Project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter destails about installation:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter information about how useful the project is:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md file has been created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('userREADME.md', markdown);
    });
}

// Function call to initialize app
init();
//These npm libraries are needed
const inquirer = require('inquirer');
const fs = require('fs');

//local call; the readMeGenerator file 
const readMeGenerator = require('./utils/readMeGenerator');

//This function sets up the inquirer prompt questions
function userInput(){
return inquirer
    .prompt([
        {type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
        },

        {type: 'input',
        name: 'file',
        message: 'What is the title of your ReadMe?'
        },

        {type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
        },

        {type: 'input',
        name: 'installation',
        message: 'How is you application installed?'
        },

        {type: 'input',
        name: 'use',
        message: 'How is your application used?'
        },

        {type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?'
        },

        {type: 'input',
        name: 'testing',
        message: 'What test does your project have?'
        },

        {type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
        },

        {type: 'input',
        name: 'email',
        message: 'What is your email?'
        },
])};


//This function writes to the file
function writeToFile(file, data){
    fs.appendFile(`${file}.md`, data,
    (err) => err ? console.error(err) : console.log(`${file}.md has been generated.`))
}

async function init() {
    let answers = await userInput();
    writeToFile((answers.file),(readMeGenerator(answers)));
}

init();
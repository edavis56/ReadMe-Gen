//This is an NPM package that allows me to capture inputs to prompts within the terminal
const inquirer = require('inquirer');

//This is an NPM package that allows me to add a file to the file system    
const fs = require('fs');

//Local pulls for js functions to be used in this file
const pReadMe = require('./readMe');
const apiCall = require('./gitApi');

//This is where the prompts are created. 
const questions = () =>
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Project Title?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project: ',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'How do I install the App?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'Usage',
        },
        /*{
            type: 'list',
            message: 'What license should be used?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
            name: 'License',
        },*/
        {
            type: 'input',
            message: 'Who all contributed to this project?',
            name: 'Contributing',
        },
    ]);

    async function install () {

        const userInput = await inquirer.prompt(questions); 

        const userInfo = await apiCall.getUser(userInfo);

        const pReadMe = readMe(userInput, userInfo);

        await writeFile('ReadMe.md', markdown); 
    }












    /*This will create the README.md file with he prompts and inputs.
    questions()
    .then((data) => fs.writeFile('README.md', generateMD(data), function(err){
        if (err) throw err;
        console.log("ReadMe created!");
    }));*/
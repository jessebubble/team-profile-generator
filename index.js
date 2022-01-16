const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const startPrompt = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter Team Managers name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Team Managers ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Team Managers email'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Team Managers office number'
    })
    //.then(answers => {
      //  const { name, id, email, officeNumber } = answers;
        //const manager = new Manager(name, id, email, officeNumber);
    //})
}

startPrompt()

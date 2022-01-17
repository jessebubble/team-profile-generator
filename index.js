const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamProfile = [];
//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const startPrompt = () => {
    return inquirer.prompt([
        {
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
        }
    ]).then(teamInfo => {
        const { name, id, email, officeNumber } = teamInfo;
        const manager = new Manager(name, id, email, officeNumber);

        teamProfile.push(manager);
        console.log(manager);
    })
}
//WHEN I enter the team manager’s name, employee ID, email address, and office number 
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const employeePrompt = () => {
    console.log('++++++++++Create Profile for Employee+++++++++++');

    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Chose role of employee",
            choices: ["Intern", "Engineer"],
        },
        {
            type: "input",
            name: "name",
            message: "Enter name of employee"
        },
        {
            type: "input",
            name: "id",
            message: "Enter id number of employee"
        },
        {
            type: "input",
            name: "email",
            message: "Enter email address of employee"
        },
        {
            type: "input",
            name: "username",
            message: "Enter github username of employee"
        },
        {
            type: "input",
            name: "school",
            message: "Enter name of school for Intern"
        },
        {
            type: "confirm",
            name: "confirmProfileCreated",
            message: "Create more employee profiles?",
            default: false,
        },
    ]).then(teamInfo => {
        let {name, id, email, role, username, school, confirmProfileCreated} = teamInfo;
        
        let employee
        //WHEN I select the intern option
        //THEN I am prompted to enter the intern’s name, ID, email, and school
        if (role === "Intern") {
            employee = new Intern(name, id, email, school)
            console.log(employee)
        //WHEN I select the engineer option
        //THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username
        } else if ("Engineer") {
            employee = new Engineer(name, id, email, username)
            console.log(employee)
        } else {
            return false
        }

        teamProfile.push(employee)

        if(confirmProfileCreated) {
            return employeePrompt(teamProfile)
        } else {
            return teamProfile
        }
    })
}

startPrompt()
.then(employeePrompt)


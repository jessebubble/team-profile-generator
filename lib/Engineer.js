//In addition to Employee's properties and methods
const Employee = require('./Employee')

//Engineer will also have:
//github // GitHub username
class Engineer extends Employee {
    constructor(name, id, email, githubusername) {
        super (name, id, email);

        this.username = githubusername;
    }
    //getGithub()
    getGithub() {
        return this.username
    }
    //getRole() // Overridden to return 'Engineer'
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;
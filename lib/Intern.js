//In addition to Employee's properties and methods
const Employee = require('./Employee')

//Intern will also have: school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email)

        this.school = school;
    }
    //getSchool()
    getSchool() {
        return this.school
    }
    //getRole() // Overridden to return 'Intern'
    getRole() {
        return "Intern"
    }

}

module.exports = Intern;
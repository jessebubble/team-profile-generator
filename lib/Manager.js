//In addition to Employee's properties and methods
const Employee = require('./Employee')

//Manager will also have: officeNumber
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email)

        this.officeNumber = officeNumber
    }
//getRole() // Overridden to return 'Manager'
    getRole() {
        return "Manager"
    }

}

module.exports = Manager;
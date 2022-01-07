//The other three classes will extend Employee.


//The first class is an Employee parent class with the following properties and methods: name, id,  email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //getName()
    getName() {
        return this.name;
    }

    //getId()
    getId() {
        return this.id;
    }

    //getEmail()
    getEmail() {
        return this.email;
    }

    //getRole() // Returns 'Employee'
    getRole() {
        return Employee;
    }
}

module.exports = Employee;
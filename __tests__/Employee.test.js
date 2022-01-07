const Employee = require('../lib/Employee')

//CREATE EMPLOYEE TO TEST
test('create name id email to test', () => {
    const employee = new Employee('Omega', '01', 'omega@vtrigger.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})

//TEST getName()
test('get name of Employee', () => {
    const employee = new Employee('Omega', '01', 'omega@vtrigger.com')

    expect(employee.getName()).toEqual(expect.any(String));
  
})

//TEST getId()
test('get id of Employee', () => {
    const employee = new Employee('Omega', '01', 'omega@vtrigger.com')

    expect(employee.getId()).toEqual(expect.any(Number));

})

//TEST getEmail()
test('get email of Employee', () => {
    const employee = new Employee('Omega', '01', 'omega@vtrigger.com')

    expect(employee.getEmail()).toEqual(expect.any(String));

})

//TEST getRole() // Returns 'Employee'
test('get role of Employee', () => {

})

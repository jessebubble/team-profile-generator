const Manager = require('../lib/Manager')

//CREATE TEST extend Employee adding Manager officeNumber 
test('extend Employee create Manager officeNumber', () => {
    const manager = new Manager('Spector', 21, 'spector@nowornever.com', 444444444)
    
    expect(manager.officeNumber).toEqual(expect.any(Number))
})
//TEST getRole()
test('get role of Manager', () => {
    const manager = new Manager('Spector', 21, 'spector@nowornever.com')

    expect(manager.getRole()).toEqual("Manager")
})
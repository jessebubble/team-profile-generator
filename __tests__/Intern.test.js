const Intern = require('../lib/Intern')

//CREATE TEST extend Employee adding Intern school
test('extend Employee create Intern school', () => {
    const intern = new Intern('Wombats', 666, 'wombats@fixyourselfnottheworld.com', 'Name of School')

    expect(intern.school).toEqual(expect.any(String))
})
//TEST getSchool()
test('get school of Inern', () => {
    const intern = new Intern('Wombats', 666, 'wombats@fixyourselfnottheworld.com', 'Name of School')

    expect(intern.getSchool()).toEqual(expect.stringMatching(intern.school.toString()))
})
//TEST getRole()
test('get role of Intern', () => {
    const intern = new Intern('Wombats', 666, 'wombats@fixyourselfnottheworld.com', 'Name of School')

    expect(intern.getRole()).toEqual('Intern')
})

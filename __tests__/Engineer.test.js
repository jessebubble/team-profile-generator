const Engineer = require('../lib/Engineer')

//CREATE TEST extend Employee adding Engineer gitHub username
test('extend Employee create Engineer github username', () => {
    const engineer = new Engineer('Elton', 111, 'eltonjohn@coldheart.com', 'eltongitjohn')

    expect(engineer.username).toEqual(expect.any(String));
})
//TEST getGithub ()
test('get githubusername from Engineer', () => {
    const engineer = new Engineer('Elton', 111, 'eltonjohn@coldheart.com', 'eltongitjohn')

    expect(engineer.getGithub()).toEqual(expect.stringMatching(engineer.username.toString()))
})

//TEST getRole ()
test('get role of Engineer', () => {
    const engineer = new Engineer('Elton', 111, 'eltonjohn@coldheart.com', 'eltongitjohn')

    expect(engineer.getRole()).toEqual('Engineer')
})

const teamRoster = team => {
    
    const teamHTML = [];
    
    const teamManager = manager => {
        let managerHTML = `
            <div class="card">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4> <i class="fas fa-mug-hot"</i> Manager </h4>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        `;
        
        team.push(managerHTML);
    }
    const teamIntern = intern => {
        let internHTML = `
            <div class="card">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4> <i class="fas fa-user-graduate"></i> Intern </h4>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="list-group-item">School: ${intern.school}</p>
                </div>
            </div>
        `;
        team.push(internHTML);
    }
    const teamEngineer = engineer => {
        let engineerHTML = `
            <div class="card">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4> <i class="fas fa-glasses"></i> Engineer </h4>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.username}">${engineer.username}</a></p>
                </div>
            </div>
        `;
        team.push(engineerHTML);
    }
    for(i = 0; i <team.length; i++) {
        if(team[i].getRole() === 'Manager') {
            teamManager(team[i]);
        }
        if(team[i].getRole() === 'Intern') {
            teamIntern(team[i]);
        }
        if(team[i].getRole() === 'Engineer') {
            teamEngineer(team[i]);
        }
    }

    return teamHTML.join('');

}

module.exports = team => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <div class="container">
                    <h1 class="">The Team</h1>
                </div>
            </header>
            <main>
                div class="container">
                    ${teamRoster(team)}
                </div>
        </body>
        </html>
    `
}
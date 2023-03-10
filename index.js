const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const fs = require('fs');

teamMembers = [];

function generateTeam() {
    // Add Manager

    function addManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is the Manager's full name?"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "What is the Manager's employee ID?"
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the Manager's email?"
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "What is the Manager's office number?"
                }
            ])
            .then(data => {
                const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);

                teamMembers.push(manager);

                addTeamMembers();
            });
    }

    // Show Menu for adding team members

    function addTeamMembers() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "menu",
                    message: "Please select an option below.",
                    choices: ["Add an Employee", "Add an Engineer", "Add an Intern", "Generate Team Profiles"]
                }
            ])
            .then(data => {
                switch(data.menu) {
                    case "Add an Employee":
                        addEmployee();
                        break;
                    case "Add an Engineer":
                        addEngineer();
                        break;
                    case "Add an Intern":
                        addIntern();
                        break;
                    case "Generate Team Profiles":
                        generateHtml();
                        break;
                }
            })
    }

    // Add employee

    function addEmployee() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "employeeName",
                    message: "What is the Employee's full name?"
                },
                {
                    type: "input",
                    name: "employeeId",
                    message: "What is the Employee's employee ID?"
                },
                {
                    type: "input",
                    name: "employeeEmail",
                    message: "What is the Employee's email?"
                }
            ])
            .then(data => {
                const employee = new Employee(data.employeeName, data.employeeId, data.employeeEmail);

                teamMembers.push(employee);
                addTeamMembers();
            })
    }

    // Add engineer

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the Engineer's full name?"
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is the Engineer's employee ID?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the Engineer's email?"
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is the engineer's Github username?"
                }
            ])
            .then(data => {
                const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);

                teamMembers.push(engineer);
                addTeamMembers();
            })
    }

    // Add intern

    function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is the Intern's full name?"
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is the Intern's employee ID?"
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is the Intern's email?"
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is the Intern's school?"
                }
            ])
            .then(data => {
                const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);

                teamMembers.push(intern);
                addTeamMembers();
            })
    }

    // Generates HTML file

    function generateHtml() {
        fs.writeFileSync(`../dist/teamProfiles.html`, `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Golos+Text&family=Source+Code+Pro:wght@800&display=swap" rel="stylesheet">

            <title>Team Profiles</title>
        </head>
        <body>
            <header style="background-color:#50B2C0">
                <div class="jumbotron text-center">
                    <h1 style="font-family:Source Code Pro; color:white">Team Profiles</h1>
                </div>
            </header>
  
            <main>
            ${this.teamMembers.map((member) => {
                if (member.getRole() === "Manager") {
                    return `
                    <div class="card m-5" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title" style="color: #50B2C0">${member.name}</h5>
                    <p class="card-text">Role: Manager
                    Employee ID: ${member.id}
                    Office Number: ${member.officeNumber}</p>
                    <a href="mailto:${member.email}" class="btn" style="background-color:#50B2C0; color:white;">Email</a>
                    </div>
                    </div>
                    `
                } else if (member.getRole() === "Employee") {
                    return `
                    <div class="card m-5" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title" style="color: #50B2C0">${member.name}</h5>
                    <p class="card-text">Role: Employee
                    Employee ID: ${member.id}</p>
                    <a href="mailto:${member.email}" class="btn" style="background-color:#50B2C0; color:white;">Email</a>
                    </div>
                    </div>
                    `
                } else if (member.getRole() === "Engineer") {
                    return `
                    <div class="card m-5" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title" style="color: #50B2C0">${member.name}</h5>
                    <p class="card-text">Role: Engineer
                    Employee ID: ${member.id}</p>
                    <a href="mailto:${member.email}" class="btn" style="background-color:#50B2C0; color:white;">Email</a>
                    <a href="mailto:${member.github}" class="btn" style="background-color:#50B2C0; color:white;">GitHub</a>
                    </div>
                    </div>
                    `
                } else if (member.getRole() === "Intern") {
                    return `
                    <div class="card m-5" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title" style="color: #50B2C0">${member.name}</h5>
                    <p class="card-text">Role: Intern
                    Employee ID: ${member.id}
                    School: ${member.school}</p>
                    <a href="mailto:${member.email}" class="btn" style="background-color:#50B2C0; color:white;">Email</a>
                    </div>
                    </div>
                    `
                }
            })}
                
            </main>
        </body>
        </html>`, (err) => 
            err ? console.log(err) : console.log("Team Profiles Generated!"))
    }

    // Exits the node app

    function exitApp() {

    }
}

generateTeam();

const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

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
    }

    // Add employee

    // Add engineer

    // Add intern

    // Generates HTML file

    // Exits the node app
}

generateTeam();

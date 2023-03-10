const inquirer = require("inquirer");

class Manager {
    getManagerInfo() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the Team Manager's full name."
                },
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the Team Manager's employee ID."
                },
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the Team Manager's email address."
                },
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the Team Manager's office number."
                },
        ])
    }
}

module.exports = Manager;
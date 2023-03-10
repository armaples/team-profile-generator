const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

class Directory {
    // Need inquirer for main menu
    initialize() {
        // ask for team manager information
        this.getManagerInfo();

        // provide menu to add employee, engineer, intern, or finish building team
    }

    // Generate HTML file

    // Logs goodbye and exits the node app
}


module.exports = Directory;
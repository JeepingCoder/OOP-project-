const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/render");
console.log(__dirname);


const employeeArray = [];

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the team member? ",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team member's ID ? ",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member's email ? ",
        name: "email",
      },
      {
        type: "list",
        message: "What is the team member's role ? ",
        name: "role",
        choices: ["Manager", "Intern", "Engineer"],
      },
      {
        type: "input",
        message: "What is the Github user name ? ",
        name: "github",
        when: function (answers) {
          if (answers.role == "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the name of your school ? ",
        name: "school",
        when: function (answers) {
          if (answers.role == "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the office number ? ",
        name: "officeNumber",
        when: function (answers) {
          if (answers.role == "Manager") {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      switch (answers.role) {
        case "Manager":
          let manager = new Manager(
            answers.name,
            answers.email,
            answers.id,
            answers.role,
            answers.officeNumber
          );
          employeeArray.push(manager)
          restart()
          break;

        case "Intern":
          let intern = new Intern(
            answers.name,
            answers.email,
            answers.id,
            answers.role,
            answers.school
          );
          employeeArray.push(intern)
          restart()
          break;

        case "Engineer":
          let engineer = new Engineer(
            answers.name,
            answers.email,
            answers.id,
            answers.role,
            answers.github
          );
          employeeArray.push(engineer)
          restart()
          break;

        default:
          break;
      }
    })
    .catch((error) => {
        if (error.isTytError) {
            console.log(error)
        } else {
            console.log(error)
        }
    }) 
}

function restart() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to add another team member?'
    }])
        .then(function (response) {
            if (response.addMember == true) {
                addEmployee()
            }
            else {
                console.log("Finished!!")
                console.log(employeeArray);
                let team = render(employeeArray)
                console.log(team);
                createTeamHtml(team)
            }
        })
}

function createTeamHtml(content) {
  try {
    if (!fs.existsSync(path.resolve(__dirname, "./dist"))) {
      fs.mkdirSync(path.resolve(__dirname, "./dist"))
    } else {
      console.log("Directory already exists.")
    }
  } catch (error) {
    console.log(error)
  }

  fs.writeFile(path.resolve(__dirname, "./dist/team.html"), content, function(err) {
    if (err) {
      console.log(`Some ${err} occured.`)
    } else {
      console.log("File Created!!")
    }
  })

}

addEmployee();

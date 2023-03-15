const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../src");

const render = (employees) => {
    console.log("employees!!!!!!", employees)
  const html = [];

  html.push(...employees
      .filter((employee) => {
        console.log("getRole", employee.getRole())
        return employee.getRole() === "Manager"
      })
      .map((manager) => renderManager(manager))
  );

  console.log("html Manager", html)

  html.push(...employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );

  html.push(...employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  

  return renderMainHtml(html.join())
};

function renderManager(manager) {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(
    template,
    "officenumber",
    manager.getOfficeNumber()
  );

  return template
}

function renderEngineer(engineer) {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template
}

function renderIntern(intern) {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());

    return template
}

function replacePlaceholders(template, placeholder, value) {
  const pattern = new RegExp(`{{ ${placeholder} }}`, "gm");
  return template.replace((pattern, value));
}

function renderMainHtml(html) {
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
    return replacePlaceholders(template, "team", html)
}

module.exports = render;
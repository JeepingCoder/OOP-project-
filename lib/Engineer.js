const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,email,id,role,github){
        super(name, email, id, role)
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.github = github;
    }
    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }



}

module.exports = Engineer


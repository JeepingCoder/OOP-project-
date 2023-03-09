const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name,email,id,role,school){
        super(name, email, id, role)
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.school = school;
    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }



}

module.exports = Intern
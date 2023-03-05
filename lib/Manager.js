const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,email,id,role,officeNumber){
        super(name, email, id, role)
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager
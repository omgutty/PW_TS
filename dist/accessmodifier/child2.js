import { user } from "./user.js";
class childclass extends user {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    displaydetails() {
        console.log(this.name, this.getage(), this.address, this.drive(), this.salary);
    }
}
let obj3 = new childclass("Tanamyi", 7, 234);
console.log(obj3.name, obj3.getage(), obj3.address);
obj3.drive();
obj3.displaydetails();

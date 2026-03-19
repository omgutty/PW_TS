export class Customerclass {
    static customerfield;
    constructor() {
    }
    static getinstence() {
        if (Customerclass.customerfield == null ||
            Customerclass.customerfield == undefined) {
            this.customerfield = new Customerclass();
        }
        return this.customerfield;
    }
    getinfo() {
        console.log("getting info");
    }
}
let obj1 = Customerclass.getinstence();
let obj2 = Customerclass.getinstence();
console.log(obj1 == obj2);
obj1.getinfo();
//////////////////////////

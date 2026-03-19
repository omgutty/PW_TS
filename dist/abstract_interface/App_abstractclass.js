export class App_abstractclass {
    name;
    age;
    //creation constructor in abstract class
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("constructor from abstract class");
        console.log("name is " + this.name);
        console.log("age is " + this.age);
    }
    method1() {
        console.log("method from abstract class");
    }
    static method2() {
        console.log("static method from abstract class");
    }
}
App_abstractclass.method2();

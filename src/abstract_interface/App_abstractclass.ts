
export abstract class App_abstractclass{

    name:string;
    age:number;
    //creation constructor in abstract class
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
        console.log("constructor from abstract class");
        console.log("name is "+this.name);
        console.log("age is "+this.age);
       
    }

    abstract title():void;
    abstract pageurl():void;

    method1():void{
        console.log("method from abstract class");
    }

    static method2():void{
        console.log("static method from abstract class");
    }

}
App_abstractclass.method2();
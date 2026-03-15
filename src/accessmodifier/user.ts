

export class user{

    public name:string;
    private age:number;
    protected salary:number;
    readonly address:string='Hyd';

    constructor (name:string,age:number,salary:number){
        this.name=name;
        this.age=age;
        this.salary=salary;

    }

    drive():void{
        console.log("driving a car : "+this.name+" age is "+this.age);
    }

    getage():number{
        return this.age;
    }
}

let obj= new user("Om",35,123);

console.log( obj.name); //om

console.log( obj.address); //35

obj.drive();//driving a car : Om age is 35

console.log(obj.getage());

console.log(obj.address);
//obj.address="bangalore"; can not change as it is readonly access, once it is inilized we can not change.


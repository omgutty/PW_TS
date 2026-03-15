//Basic Inheritance (Parent → Child)

class parent{
    name:string="om";
    display(){
        console.log("parent method");
    }
}

class Child extends parent{
}

let obj= new Child();
console.log(obj.name);
obj.display();

/**
 * Child class automatically gets:

parent variables

parent methods
 */

////////////////////////////////////////////

//Child Can Add Its Own Methods

class parent2{
    display ():void{
        console.log("parent 2 display method ");
    }
}
class Child2 extends parent2 {
    show(){
        console.log("Child 2  method");
    }
}

let obj2 = new Child2();
obj2.display();
obj2.show();


////////////////////////////////////////////

//Method Overriding
//Child class can override parent methods.
//Rule
//Child method replaces parent method.

class parent3 {
    show():void{
        console.log("parent 3 show method ");
    }
}

class child3 extends parent3{

    show():void{
        console.log("child 3 show mehtod");
    }
}

let obj3= new child3();
obj3.show();

////////////////////////////////////////////
//4. Access Parent Method using super
class parent4 {
    login(){
        console.log("Parent 4 login");
    }
}

class child4 extends parent4{
    login(): void {
        super.login();
        console.log("child 4 login ")
    }
}

let obj4= new child4();
obj4.login(); //it will  call child , inside it willcall parent 
let obj44 = new parent4();
obj44.login(); //only parent will run 

////////////////////////////////////////////

/**
 * 5. Constructor Rules

If parent has constructor, child must call super().
 */
class parent5{
    name:string;

    constructor(name:string){
        this.name=name;
    }
}

class Child5 extends parent5{

    constructor(name:string){// it must create constructor and super keyword
        super(name);
    }
}

let obj5 = new Child5("Om");
console.log(obj5.name);

let obj55= new parent5("parent of om ");
console.log(obj55.name);

/////////////////////////////////////////
//6. Access Modifier Rules (VERY IMPORTANT)

class Parent6{
    public a=10;
    protected b=20;
    private c=30;
}

class Child6 extends Parent6{
    

    test(){
        console.log(this.a); // allowed
        console.log(this.b); // allowed
        // console.log(this.c);  not allowed
    }
}
let obj6= new Child6();
obj6.test();


///////////////////////////////////////
//7. Child Object Cannot Access Protected Outside

let obj7=new Child6();

console.log(obj7.a); // allowed
// console.log(obj.b); ❌ not allowed
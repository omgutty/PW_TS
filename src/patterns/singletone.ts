class CustomerClass{

    //instance field  will store a object(instance) of class, example obj 
    //This variable will always hold an object of this class
    /**
     * Why needed?
        TypeScript is strongly typed, so:
        It ensures type safety
        Prevents assigning wrong values
        with out this, it will be any, as return type, we are resticting to class object instance type only
     */
    //we restricted to private other wise, Multiple objects can be created externally
    //To restrict direct access and force usage of:get instence() method
    //if it is not static, each object will have its own copy , like obj1 , obj2
    private static instance:CustomerClass;

    //by creating private constructor, we can not create object out side, with new 
    private constructor(){   }

    //static method to access the instance, 
    // only DOOR to access the instance
    static  getinstence(){
        // it is ensuring object is created only once, 
        if(!CustomerClass.instance){
            // you are calling the constructor 
            //which creates an object 
            // and assigned to instance field.
            // Single tone need shared storage.
            this.instance=new CustomerClass();
            //OR //Customerclass.instance = new Customerclass();
        }
        return this.instance;
        //or //return  Customerclass.instance;
    }

    //public method which can be called only using the object 
    getInfo(): void {
        console.log("getting info");
    }
}

//both the times it used only one object only, it is not created two object, out side class 
//1. object is not created outside, we cant 
//2. we can only access by using the class name 
//3. we can only access the by  using the public get instance method, via this DOOR only
let obj1=CustomerClass.getinstence();
let obj2=CustomerClass.getinstence();

console.log(obj1==obj2);
// by using the above variable only we can access the methods of the class, 
//we can craete n number of varibale via DOOR getinstance and call the methods. 
// each time same object(one and only object ) will be utilized, as we restricted with condition
obj1.getInfo();
obj2.getInfo();


class cal{

    //over loaded methods by using signatures or prtotypes, 
    //you should not provide method body 

    add(a:number,b:number):number;
    add(a:string,b:string):string;
    add(a:string,b:number):string;
    add(a:number,b:string):string;
    add(a:string,b:boolean):string;
    add(a:number,b:boolean):string;

    add(a:any,b:any){
        return a+b;
    }
}


//calling 
let obj= new cal();
console.log(obj.add(2,4),
obj.add("om","gutty"),
obj.add("om",7),
obj.add(7,"om"),
obj.add("om",true),
obj.add(7,true),
obj.add(7,false));

let result= obj.add(7,true);

console.log(typeof result);// number, if we want to return type to be as string. check below program 


/**
 * TypeScript overloading only affects compile-time type checking, not runtime behavior.
 *  The actual execution is pure JavaScript, and JavaScript decides how + works.

* 
Does TypeScript method overloading affect runtime behavior?
Answer:
No. TypeScript method overloading exists only at compile time for type checking.
 At runtime JavaScript executes the single implementation method. 
 If the implementation logic returns a different type than the overload signature, 
 JavaScript's runtime behavior will take precedence.
 */


 class addition{
    
    
    addition(a:any, b:any):string{
        return String(a+b)
    }
    //or
    addtion2(a:any,b:any):string{
        return (a + b).toString();
    }

 }

 let obj2= new addition();
 let output2=obj2.addition(10,true); //11
 console.log(output2,typeof output2);// 11 string
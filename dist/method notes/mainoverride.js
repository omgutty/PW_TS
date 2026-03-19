import { audi } from "./overridemethod.js";
//createing child class object
//accesing the child class methods
let obj2 = new audi("Q7", "white", 2);
obj2.autostart();
console.log(obj2.name);
console.log(obj2.getdesign());
//creating parent class object 

import { Customer } from "./class.js";
//creating a obje in different file with importing the customer class 
let obj = new Customer();
//below all are from interface implimentation methods
obj.boarding();
obj.checkin();
obj.roomservice();
obj.laundry();
obj.spa();
obj.carbooking();
obj.autobooking();
// interface method and its extended interface method below 
obj.limitedteaching();
obj.attendence();
obj.ranks();
//this is coming from own method from class.ts not a interface method
obj.addressmethod();
//this is coming from parent class
obj.method1();

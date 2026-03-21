function checkAge(age: number): void {

  if (age < 0) {
try{
    throw new Error("Age cannot be negative");
}
catch(error){
    console.error(error.message);
}
  }else if(age>=0){
  console.log("Valid age:", age);
}
}

checkAge(25); // Valid age: 25

checkAge(-5); // Uncaught Error: Age cannot be negative


/////////////////////////
type User = {

  id:    number;

  name:  string;

  email: string;

};

 //Q: 7 Fill in the blank to make the description property optional in the type below: ?:

type Product = {

  id:           number;

  name:         string;

  description?:string;

};


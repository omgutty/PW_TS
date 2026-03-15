
function getemployeedata():{} {
    return{
        name:"om",
        age:35
    }
}

console.log(getemployeedata());

let a:any= getemployeedata();
console.log(a.name);
console.log(a.age);


//never will be used in 
//error handling and 
// infinte loop 

function throwerror (messsage:string):never{
    throw new Error(messsage);
}
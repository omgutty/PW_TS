

type userid=number|string;
let user1:userid=123;
let user2:userid="abc123";
console.log(user1); // 123
console.log(user2); // "abc123"
// Error: Type 'boolean' is not assignable to type 'userid'

type status="active"|"inactive"|"pending";
let userStatus:status="active";
console.log(userStatus); // "active"
// Error: Type '"deleted"' is not assignable to type 'status'

//customer object type
type customer= {
    id:number;
    name:string;
    email:string;

} |{
    id:number;
    name:string;
    phone:string;
} |{
    id:number;
    name:string;
    email:string;
    phone:string;
}



let customer1:customer={
    id:1,
    name:"Priya",
    email:"priya@example.com"
}
console.log(customer1); // { id: 1, name: 'Priya', email: '


const id = 101;
const name = "Priya";
const active = true;
let user = {
    id: 1,
    name: "Priya",
    email: "priya@test.com",
    isActive: true,
};
// TypeScript error: property "phone" does not exist on type User
//const badUser: User = { id: 2, name: "Raj", phone: "999" };
const gooduser = { id: 1, name: "Raj", email: "abd@gmail.com", isActive: true };
console.log(gooduser.name); // Raj
//Object.values(gooduser).forEach(value => console.log(value)); //Raj
console.log(Object.values(user));
console.log("--------");
console.log(Object.values(gooduser));
const item = { id: 10, name: "Laptop", price: 999, description: "This is a laptop" };
// ❌ Error: Cannot assign to "id" because it is a read-only property
//item.id = 99;
// ✅ OK — description is optional, so undefined is fine
console.log(item.description); // undefined if we not passed n 42line // this is a laptop
export {};

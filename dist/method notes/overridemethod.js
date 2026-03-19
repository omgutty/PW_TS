export class car {
    name;
    color;
    price;
    design = "master design  ";
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    start() {
        console.log("start a car");
    }
    getdesign() {
        return this.design;
    }
}
export class audi extends car {
    constructor(name, color, price) {
        super(name, color, price);
        this.name = name;
        this.color = color;
        this.price = price;
    }
    // we arr over ridding the start method from 
    start() {
        console.log("audi car start ");
    }
    autostart() {
        console.log("audi car auto start ");
    }
}
let obj = new audi("Q6", "black", 1);
obj.start();
console.log(obj.getdesign());

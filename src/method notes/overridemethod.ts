

export class car{
    public name :string;
    public color:string;
    public price:number;
    protected design:string="master design  ";


    constructor(name:string, color:string , price:number){
        this.name=name;
        this.color= color;
        this.price=price;
    }


    start ():void{
        console.log("start a car");
    }

    getdesign():string {
        return this.design;
    }
}


export class audi extends car{

    constructor(name:string, color:string , price:number ){
        super(name,color,price);
        this.name=name;
        this.color=color;
        this.price=price;
    }
    // we arr over ridding the start method from 
    override start():void{
        console.log("audi car start ");
    }

    autostart():void {
        console.log("audi car auto start ");
    }

}

let obj= new audi("Q6","black",1);
obj.start();

console.log(obj.getdesign());

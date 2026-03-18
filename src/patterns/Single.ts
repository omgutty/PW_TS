
export class Customerclass{
    private static customerfield:Customerclass;   
    private constructor(){
    }
    static getinstence():Customerclass{
        if(Customerclass.customerfield==null||
            Customerclass.customerfield==undefined){
                this.customerfield=new Customerclass();
        }
        return this.customerfield;
    }
    getinfo():void{
        console.log("getting info")
    }
}
let obj1=Customerclass.getinstence();
let obj2=Customerclass.getinstence();

console.log(obj1==obj2);
obj1.getinfo();

//////////////////////////


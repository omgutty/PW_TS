import { App_abstractclass } from "./App_abstractclass.js";

export class dashboardpage extends App_abstractclass{

    title(): void {
        console.log("dashboard page title");
    }
    pageurl(): void {
        //throw new Error("Method not implemented.");
        console.log("dashboard page URL");
    }

    override method1():void{
        console.log("child method overrided from parent class");
    }


}

let obj=new dashboardpage();
obj.title();
obj.pageurl();
obj.method1();

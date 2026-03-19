import { App_abstractclass } from "./App_abstractclass.js";
export class dashboardpage extends App_abstractclass {
    title() {
        console.log("dashboard page title");
    }
    pageurl() {
        //throw new Error("Method not implemented.");
        console.log("dashboard page URL");
    }
    method1() {
        console.log("child method overrided from parent class");
    }
}
let obj = new dashboardpage("sachin", 34);
obj.title();
obj.pageurl();
obj.method1();

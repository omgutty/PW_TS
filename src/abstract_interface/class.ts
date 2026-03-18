import {Airlineservice,Hottelservice,transportservice,tutionservice} from "./interface.js"
import { parentclass } from "./parentclass.js";

export class Customer extends parentclass implements Airlineservice ,Hottelservice,transportservice,tutionservice {

    checkin():void{
        console.log("checking in to airport");
    }

    boarding():void{
        console.log("bording completed");
    }

    roomservice():void{
        console.log("checking in to hotel room");
    }
    laundry():void{
        console.log("laundry service ");
    }
    spa():void{
        console.log("free spa");
    }

    carbooking():void{
        console.log("car booking ");
    }
    autobooking():void{
        console.log("auto booking ");
    }

    addressmethod(){
        console.log("my own addrss own method");
    }
    
    //tution service interface imported, 
    limitedteaching(): void {
        console.log("tution service limited teaching ")
    }

    //tution service extends another school servie interface so there methods also must imppliments
    attendence(): void {
        console.log("Attendence is mmust in school ")
    }
    ranks(): void {
        console.log("ranks will come in school ")
    }

}




//instead of using this class methods here, i am exporting this class to antoher file 

import {Airlineservice,Hottelservice,transportservice} from "./interface.js"

export class customer implements Airlineservice ,Hottelservice,transportservice{

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

}

//instead of using this class methods here, i am exporting this class to antoher file 

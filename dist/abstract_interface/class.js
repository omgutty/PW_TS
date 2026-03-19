import { parentclass } from "./parentclass.js";
export class Customer extends parentclass {
    checkin() {
        console.log("checking in to airport");
    }
    boarding() {
        console.log("bording completed");
    }
    roomservice() {
        console.log("checking in to hotel room");
    }
    laundry() {
        console.log("laundry service ");
    }
    spa() {
        console.log("free spa");
    }
    carbooking() {
        console.log("car booking ");
    }
    autobooking() {
        console.log("auto booking ");
    }
    addressmethod() {
        console.log("my own addrss own method");
    }
    //tution service interface imported, 
    limitedteaching() {
        console.log("tution service limited teaching ");
    }
    //tution service extends another school servie interface so there methods also must imppliments
    attendence() {
        console.log("Attendence is mmust in school ");
    }
    ranks() {
        console.log("ranks will come in school ");
    }
}
//instead of using this class methods here, i am exporting this class to antoher file 

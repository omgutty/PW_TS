
export interface Airlineservice{
    checkin():void;
    boarding():void;
}

export interface Hottelservice{
    roomservice():void;
    laundry():void;
    spa():void;
}

interface transportservice  {
    carbooking():void;
    autobooking():void;
}

interface service  {

}
export interface schoolservice{
    attendence():void;
    ranks():void;
}

export interface tutionservice extends schoolservice,service{
    limitedteaching():void;
}

//we can export like this as well 
export {service,transportservice}


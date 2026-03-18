
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

//we can export like this as well 
export {service,transportservice}
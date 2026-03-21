
//question 14:
abstract class Shape {

  constructor() { console.log('Shape created'); }

  abstract area(): void;

  describe(): void { console.log('I am a shape'); }

}

 

class Circle extends Shape {

  constructor() {

    super();

    console.log('Circle created');

  }

  area(): void { console.log('Circle area calculated'); }

}

 

let s = new Circle();

s.area();

s.describe();

//question 15:
interface AirlineService {

  checkIn(): void;

  boarding(): void;

}

 

class Customer implements AirlineService {

  checkIn(): void { console.log('customer Check in'); }

  boarding(): void { console.log('customer boarding'); }

}

 

let c = new Customer();

c.checkIn();

c.boarding();

//question 16:
 interface HotelService {

  roomservice(): void;

  spa(): void;

}

interface CarService {

  rentalcar(): void;

}

 

class Customer4 implements HotelService, CarService {

  roomservice(): void { console.log('customer room service'); }

  spa(): void { console.log('customer spa'); }

  rentalcar(): void { console.log('customer rentalcar'); }

  myownmethod(): void { console.log('my own method'); }

}

 let c4= new Customer4();

c4.roomservice();

c4.spa();

c4.rentalcar();

c4.myownmethod();

//question 17:

 interface AirlineService1 { checkIn(): void; }

interface HotelService1 { spa(): void; }

interface Service1 extends AirlineService1, HotelService1 {
    servicemethod(): void;
 }

 

class LuxuryCustomer1 implements Service1 {

  checkIn(): void { console.log('luxury check in'); }

  spa(): void { console.log('luxury spa'); }

  servicemethod(): void { console.log('service method'); }

}

 

let lc = new LuxuryCustomer1();

lc.checkIn();

lc.spa();

//question 18:
 interface Printable {

  print(): void;

}

 abstract class Document {

  constructor() { console.log('Document ready'); }

  abstract getTitle(): void;

}

 class Report extends Document implements Printable {

  constructor() { super(); }

  getTitle(): void { console.log('Report title'); }

  print(): void { console.log('Printing report'); }

}

 let r = new Report();

r.getTitle();

r.print();


//question 19:
abstract class Apppage {

  constructor() { console.log('abstract constructor'); }

  abstract title(): void;

  loadingTime(): void { console.log('page loading'); }

}

 class LoginPage extends Apppage {

  constructor() { super(); }

  title(): void { console.log('Login Page'); }
  // loadingTime NOT overridden — parent version runs

}

 let lp = new LoginPage();

lp.title();

lp.loadingTime();

//abstract constructor
//Login Page
//page loading'

//question 20:
abstract class Page {

  constructor(name: string) {

    console.log('Page: ' + name);

  }

  abstract show(): void;

}

 class HomePage extends Page {

  constructor() { super('Home'); }

  show(): void { console.log('Showing Home'); }

}

 class ContactPage extends Page {

  constructor() { super('Contact'); }

  show(): void { console.log('Showing Contact'); }

}

 let h = new HomePage();

let cp = new ContactPage();

h.show();

cp.show();

//Page: Home
//Showing Home
//Page: Contact
//Showing Contact
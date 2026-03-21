//pattern exam question 12: 
export class Config {

  private static config: Config;    // holds the single instance

  private constructor() { }             // blocks new Config()

  public static getInstance(): Config {

    if (!Config.config) {

      Config.config = new Config();
        console.log("creating new instance");
    }

    return Config.config;

  }

}

Config.getInstance();
Config.getInstance();//it will not print creating new instance because 
// it is already created in first call and it will return the same instance in second call
//  also.

//question 17: 
//Complete the builder() method in the Shop class:

 export class Shop {
  private constructor() { }
  public static builder(): Shop{//it returns the current class object, so return type is shop and it is static method because we need to call this method by using class name without creating an object of class.
    return new Shop;//it will create a new object of shop class and return it, as it is returning current class object.
  }

  login(): Shop {
    console.log('login');
    return this; // return the current class object to allow chaining
  }

}

Shop.builder().login(); // Example of using the builder method to create a Shop instance and call login()

///////////////////////////////
//question 22:
class Logger {

  private static logger: Logger;

  private constructor() { }

  public static getInstance(): Logger {

    if (!Logger.logger) {

      Logger.logger = new Logger();

    }

    return Logger.logger;

  }

  log(msg: string): void {

    console.log('LOG: ' + msg);

  }

}

 Logger.getInstance().log('App started');

Logger.getInstance().log('User logged in');

////////////////
//question 23:
 class Config2 {

  private static config: Config2;

  private constructor() { }

  public static getInstance(): Config2 {

    if (Config2.config === undefined) {

      Config2.config = new Config2();

      console.log('Config created');

    }

    return Config2.config;

  }

}

 

let a = Config2.getInstance();

let b = Config2.getInstance();

let c = Config2.getInstance();

// It will print 'Config created' only once, when the first instance is created. Subsequent calls to getInstance() will return the same instance without printing anything.

///////////
//question 24:
class Database {

  private static db: Database;

  private constructor() { }

  public static getInstance(): Database {

    if (!Database.db) {

      Database.db = new Database();

    }

    return Database.db;

  }

}

 

let d1 = Database.getInstance();

let d2 = Database.getInstance();

console.log(d1 === d2);

// It will print 'true' because both d1 and d2 reference the same instance of the Database class created by the getInstance() method.

//question 25:
 class Shop3 {

  private constructor() { }

  static builder(): Shop3 { return new Shop3(); }

  login(): Shop3 { console.log('login to app'); return this; }

  search(): Shop3 { console.log('search the product'); return this; }

  logout(): Shop3 { console.log('logout'); return this; }

  build(): void { console.log('shopping done'); }

}

 

Shop3.builder()

  .login()

  .search()

  .logout()

  .build();

  // It will print the following output in order:

  // login to app 
    // search the product
    // logout
    // shopping done    
/////////
//question 26:
class Shop4 {

  private constructor() { }

  static builder(): Shop4 { return new Shop4(); }

  login(): Shop4 { console.log('login to app'); return this; }

  Search(): Shop4 { console.log('search the product'); return this; }

  addToCart(): Shop4 { console.log('add to cart'); return this; }

  payment(): Shop4 { console.log('making payment'); return this; }

  logout(): Shop4 { console.log('logout'); return this; }

  build(): void { console.log('email sent...done!'); }

}

 

// Use Case 2 — browse only

Shop4.builder().login().Search().logout().build();

  // It will print the following output in order:

  // login to app 
    // search the product
    // logout
    // email sent...done!

   /////////////////////////
//question 27:
class Shop5 {

  private constructor() { }

  static builder(): Shop5 { return new Shop5(); }

  login(): Shop5{ console.log('login'); return this; }

  search(): Shop5 { console.log('search'); return this; }

  build(): void { console.log('done'); }

}

 

let s1 = Shop5.builder();

let s2 = Shop5.builder();

console.log(s1 === s2);

//false
/////////
//question 28 
class Counter {

  private static instance: Counter;

  private count: number = 0;

  private constructor() { }

  public static getInstance(): Counter {

    if (!Counter.instance) {

      Counter.instance = new Counter();

    }

    return Counter.instance;

  }

  increment(): void {

    this.count++;

    console.log('Count: ' + this.count);

  }

}

 

Counter.getInstance().increment();

Counter.getInstance().increment();

Counter.getInstance().increment();

// It will print the following output in order:

// Count: 1
// Count: 2
// Count: 3
///////////////////////
//question 29:
class OrderBuilder {

  private constructor() { }

  static builder(): OrderBuilder { return new OrderBuilder(); }

  selectItem(): OrderBuilder {

    console.log('Item selected');

    return this;

  }

  applyDiscount(): OrderBuilder {

    console.log('Discount applied');

    return this;

  }

  placeOrder(): OrderBuilder {

    console.log('Order placed');

    return this;

  }

  build(): void {

    console.log('Order confirmed!');

  }

}

 

OrderBuilder.builder()

  .selectItem()

  .applyDiscount()

  .placeOrder()

  .build();
   // output:

  // Item selected
  // Discount applied
  // Order placed
  // Order confirmed!

  /////////////////////
  //question 30:
  class App {

  private static app: App;

  private constructor() { console.log('App initialized'); }

  public static getInstance(): App {

    if (!App.app) {

      App.app = new App();

    }

    return App.app;

  }

}

 

class Flow {

  private constructor() { }

  static start(): Flow { return new Flow(); }

  step1(): Flow { console.log('Step 1'); return this; }

  step2(): Flow { console.log('Step 2'); return this; }

  finish(): void { console.log('Done'); }

}

 

App.getInstance();

App.getInstance();

 

Flow.start().step1().step2().finish();

// It will print the following output in order:

// App initialized
// Step 1
// Step 2
// Done


//abstract and interface question:
//Question 11:
abstract class Apppage {

  constructor(name: string, time: number) {

    console.log('abstract constructor');

  }

  abstract title(): void;

  abstract pageurl(): void;

  loadingTime(): void { console.log('page loading'); }

}

 

class DashBoardPage extends Apppage {

  constructor() { super('amazon', 40); }

  title(): void { console.log('implementation1'); }

  pageurl(): void { console.log('implementation1'); }

  override loadingTime(): void { console.log('page child loading'); }

}

 

let newobj = new DashBoardPage();

newobj.title();

newobj.pageurl();

newobj.loadingTime();

// It will print the following output in order:

// abstract constructor 
// implementation1
// implementation1
// page child loading

///////
//question 12:
abstract class Vehicle {

  constructor(type: string) {

    console.log('Vehicle: ' + type);

  }

  abstract start(): void;

  stop(): void { console.log('Vehicle stopped'); }

}

 

class Car extends Vehicle {

  constructor() { super('Car'); }

  start(): void { console.log('Car started'); }

}

 

let c2 = new Car();

c2.start();

c2.stop();

//question 13:
 abstract class Animal {

  constructor() { console.log('Animal created'); }

  abstract sound(): void;

  breathe(): void { console.log('Animal breathing'); }

}


class Dog extends Animal {

  constructor() { super(); }

  sound(): void { console.log('Woof!'); }

  override breathe(): void { console.log('Dog breathing fast'); }

}

let d = new Dog();

d.sound();

d.breathe();
// It will print the following output in order:

// Animal created
// Woof!
// Dog breathing fast
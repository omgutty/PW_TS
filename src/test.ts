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


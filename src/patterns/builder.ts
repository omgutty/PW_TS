export class Shop{
    
    private constructor(){

    }

    //this returning this, which means current class object 
    //return type is shop 
    login():Shop{
        //each method return current class object 
        console.log("Login into App ");
        return this;
    }
    
    Search():Shop{
        //each method return current class object 
        console.log("search the product  ");
        return this;
    }
    
    addTocart():Shop{
        //each method return current class object 
        console.log("add to cart  ");
        return this;
    }
    payment ():Shop{
        //each method return current class object 
        console.log("making payment  ");
        return this;
    }

     logout ():Shop{
        //each method return current class object 
        console.log("logout ");
        return this;
    }

    //this Builder method will create a object of class 
    // first call this builder by using the class as it is static method. 
    //after that call each method as a chain. 
    // as each method is returning current class object (as returning this by each method.)
    static Builder():Shop{
        return new Shop;
    }

    // to end the chaining, build we need to call, 
    //as it ends the chain and returning nothing. 
    //same as actions class in selenium, 
    //end chaing 
    build():void{
        console.log("Email is sent- Shopping is done");
    }

}

Shop.Builder().login().Search().addTocart().payment().logout().build();

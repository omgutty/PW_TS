
//retrict the output with number data type 
function add (x:number,y:number):number{
    return x+y;
}


let output:number=  add(2,4);
console.log (output)


//void function 

function price():void{
    console.log("printing price ");
    //return  we can not return as we provide void 
}
price();


//passing the element 
function clickelement(element:string){
    console.log(`clicking on element : ${element}`);
}

clickelement("clickelement");


function islementdisplayed(element:string, timeout:number):boolean{
    let iselement= true;
    if (iselement){
        console.log(`is element is present on the page : ${element} witht in the ${timeout}`);
        return true;
    }else{
        console.log(`element is not found `);
        return false;
    }

}

if(islementdisplayed("elementpath",10)){
    clickelement("elementpath");
}



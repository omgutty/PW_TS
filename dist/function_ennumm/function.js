//retrict the output with number data type 
function add(x, y) {
    return x + y;
}
let output = add(2, 4);
console.log(output);
//void function 
function price() {
    console.log("printing price ");
    //return  we can not return as we provide void 
}
price();
//passing the element 
function clickelement(element) {
    console.log(`clicking on element : ${element}`);
}
clickelement("clickelement");
function islementdisplayed(element, timeout) {
    let iselement = true;
    if (iselement) {
        console.log(`is element is present on the page : ${element} witht in the ${timeout}`);
        return true;
    }
    else {
        console.log(`element is not found `);
        return false;
    }
}
if (islementdisplayed("elementpath", 10)) {
    clickelement("elementpath");
}
export {};

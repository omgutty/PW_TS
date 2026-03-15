class employee{

    getsalary(employeename:string):number{
        if(employeename=="Om"){
            return 123;
        }else if (employeename=="Tanmayi"){
            return 456;
        }else {
            console.log("empoyee is not found");
            return -1;
        }
    }
}

export {employee}

// let e= new employee();
// console.log("employe id is :"+e.getsalary("Om"));
// Write your solution in this file!
const employee={
    name: "Eliazar",
    streetAddress: "Nairobi",
};
function updateEmployeeWithKeyAndValue(employees, key, value){
    const anotherEmployee = {...employee};   
    anotherEmployee[key]= value;
    return anotherEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const anotherEmployee={...employee};
    delete anotherEmployee[key];
    return anotherEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

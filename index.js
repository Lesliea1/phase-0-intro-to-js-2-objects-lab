// Write your solution in this file!
const employee = {
    name: "leslie",
    streetAddress: "222 N Fake St Phoenix Az 95037"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee =  {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value 
    return employee
}
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {employee};
    employee[key] = `Sam`; 
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {employee}
    delete employee[key]
   return employee;
}
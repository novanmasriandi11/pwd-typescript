/**
 * Check if Object Instance of Class
 * 
 * Write a function that checks if a given value is an instance of a given class or superclass. 
 * For this problem, an object is considered an instance of a given class 
 * if that object has access to that class's methods.
 * There are no constraints on the data types that can be passed to the function.
 * For example, the value or the class could be undefined.
 */

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (classFunction === null || classFunction === undefined) {
        return false;
    }
    while (obj !== null && obj !== undefined) {
        const proto = Object.getPrototypeOf(obj);
        if (proto === classFunction.prototype) {
            return true;
        }
        obj = proto;
    }
    return false;
};
class Animal { }
class Dog extends Animal { };

console.log(checkIfInstanceOf(new Date(), Date));
console.log(checkIfInstanceOf(new Dog(), Animal));
console.log(checkIfInstanceOf(5, Number));
console.log(checkIfInstanceOf(Symbol(), Object));
console.log(checkIfInstanceOf(Boolean(), Object));
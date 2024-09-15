 /**
 * 9. Create Hello World Function
 * 
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World". 
 */

function createHelloWorld() {
    
    return function(...args): string {
        return "Hello World";        
    };
};

const f = createHelloWorld();
console.log(f());
console.log(f({}, null, 42));

/**
 * 10. To Be Or Not To Be
 * 
 * Write a function expect that helps developers test their code. 
 * It should take in any value val and return an object with the following two functions.
    -   toBe(val) accepts another value and returns true if the two values === each other. 
        If they are not equal, it should throw an error "Not Equal".
    -   notToBe(val) accepts another value and returns true if the two values !== each other. 
        If they are equal, it should throw an error "Equal".
 */
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (otherValue: any) => {
            if (val === otherValue) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (otherValue: any) => {
            if (val !== otherValue) {
                return true;
            } else {
                throw new Error("Equal")
            }
        }
    }    
};
// console.log(expect(5).toBe(5));
// console.log(expect(5).toBe(null));
// console.log(expect(5).notToBe(5));
// console.log(expect(5).notToBe(null));

/**
 * 11. Calculator with Method Chaining
 * 
 * Design a Calculator class.
 * The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. 
 * It should also allow consecutive operations to be performed using method chaining. 
 * The Calculator class constructor should accept a number which serves as the initial value of result.
 * Your Calculator class should have the following methods:
    add       - This method adds the given number value to the result and returns the updated Calculator.
    subtract  - This method subtracts the given number value from the result and returns the updated Calculator.
    multiply  - This method multiplies the result  by the given number value and returns the updated Calculator.
    divide    - This method divides the result by the given number value and returns the updated Calculator. 
                If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
    power     - This method raises the result to the power of the given number value and returns the updated Calculator.
    getResult - This method returns the result.
 */
class Calculator {
    private result: number;

    constructor(value: number) {
        this.result = value;
    }
    
    add(value: number): Calculator {
        this.result += value;
        return this;
    }
    
    subtract(value: number): Calculator {
        this.result -= value;
        return this;
    }
    
    multiply(value: number): Calculator {
        this.result *= value;
        return this;
    }
    
    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error('Division by zero is not allowed');
        }
        this.result /= value;
        return this;
    }
    
    power(value: number): Calculator {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    getResult(): number {
        return this.result;
    }
}

const example1 = new Calculator(10).add(5).subtract(7).getResult();
console.log(example1);

const example2 = new Calculator(2).multiply(5).power(2).getResult();
console.log(example2);

// const example3 = new Calculator(20).divide(0).getResult();

/**
 * 12. Generate Fibonacci Sequence
 * 
 * Write a generator function that returns a generator object which yields the fibonacci sequence.
 * The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
 * The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
 */
function* fibGenerator(): Generator<number, any, number> {
    let x = 0, y = 1;
    
    while (true) {
        yield x;
        [x, y] = [y, x + y];
    }
};
const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

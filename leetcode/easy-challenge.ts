/**
 * Counter
 * Given an integer n, return a counter function. 
 * This counter function initially returns n 
 * and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */

//Solve
function createCounter(n: number): () => number {
    return function inner() {
        return n++;
    }
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

/**
 * Array Reduce Transformation
 * Given an integer array nums, a reducer function fn, and an initial value init, 
 * return the final result obtained by executing the fn function on each element of the array, 
 * sequentially, passing in the return value from the calculation on the preceding element.
 */

//Solve
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init;
    for (let x = 0; x < nums.length; x++){
        result = fn(result, nums[x]);
    }

    return result;
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr ; }, 100));
console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr ; }, 0));
console.log(reduce([], function sum(accum, curr) { return 0; }, 25));

/**
 * Function Composition
 * Given an array of functions [f1, f2, f3, ..., fn], 
 * return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

//Solve
type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        return functions.reduceRight((acc, F) => F(acc), x);
    }
};

let fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4))

fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4));

fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn(1));

fn = compose([]);
console.log(fn(42));
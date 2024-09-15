/**
 * 1. Counter
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
 * 2. Array Reduce Transformation
 * Given an integer array nums, a reducer function fn, and an initial value init, 
 * return the final result obtained by executing the fn function on each element of the array, 
 * sequentially, passing in the return value from the calculation on the preceding element.
 */

//Solve
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init;
    for (let x = 0; x < nums.length; x++) {
        result = fn(result, nums[x]);
    }

    return result;
};

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100));
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0));
console.log(reduce([], function sum(accum, curr) { return 0; }, 25));

/**
 * 3. Function Composition
 * Given an array of functions [f1, f2, f3, ..., fn], 
 * return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

//Solve
type F = (x: number) => number;

function compose(functions: F[]): F {

    return function (x) {
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

/**
 * 4. Filter Elements from Array
 * 
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 * The fn function takes one or two arguments:
 * arr[i] - number from the arr
 * i - index of arr[i]
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
 * Please solve it without the built-in Array.filter method.
 */

//Solve
type Fn2 = (n: number, i: number) => any

function filter(arr: number[], fn: Fn2): number[] {
    const result: number[] = [];
    for (let x = 0; x < arr.length; x++) {
        if (fn(arr[x], x)) {
            result.push(arr[x]);
        }
    }
    return result;
};
console.log(filter([0, 10, 20, 30], function greaterThan10(n) { return n > 10; }));
console.log(filter([1, 2, 3], function firstIndex(n, i) { return i === 0; }));
console.log(filter([-2, -1, 0, 1, 2], function plusOne(n) { return n + 1 }));

/**
 * 5. Apply Transform Over Each Element in Array
 * 
 * Given an integer array arr and a mapping function fn, 
 * return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

//Solve
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = [];
    for (let x = 0; x < arr.length; x++) {
        result.push(fn(arr[x], x))
    }

    return result;
};
console.log(map([1, 2, 3], function plusone(n) { return n + 1; }));
console.log(map([1, 2, 3], function plusI(n, i) { return n + i; }));
console.log(map([10, 20, 30], function constant() { return 42; }));

/**
 * 6. Find the Width of Columns of a Grid
 * 
 * You are given a 0-indexed m x n integer matrix grid. 
 * The width of a column is the maximum length of its integers.
 * For example, if grid = [[-10], [3], [12]], 
 * the width of the only column is 3 since -10 is of length 3.
 * Return an integer array ans of size n where ans[i] is the width of the i column.
 * The length of an integer x with len digits is equal to len if x is non-negative, 
 * and len + 1 otherwise.
 */

//Solve
function findColumnWidth(grid: number[][]): number[] {
    let result: number[] = [];
    for (let col = 0; col < grid[0].length; col++) {
        let maxLength = 0;

        for (let row = 0; row < grid.length; row++) {
            let numLength = grid[row][col].toString().length;
            maxLength = Math.max(maxLength, numLength);
        }

        result.push(maxLength);
    }
    return result;
};

console.log(findColumnWidth([[1], [22], [333]]));
console.log(findColumnWidth([[-15, 1, 3], [15, 7, 12], [5, 6, -2]]));

/**
 * 7. Counter II
 * 
 * Write a function createCounter. 
 * It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.
 */

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter2(init: number): Counter {
    let currentValue = init;
    const initialValue = init;

    function increment() {
        return ++currentValue;
    }
    function decrement() {
        return --currentValue;
    }
    function reset() {
        currentValue = initialValue;
        return currentValue;
    }

    return {
        increment,
        decrement,
        reset
    };
};

const counter_ = createCounter2(5);
console.log(counter_.increment());
console.log(counter_.reset());
console.log(counter_.decrement());

const counter2 = createCounter2(0);
console.log(counter2.increment())
console.log(counter2.increment())
console.log(counter2.decrement())
console.log(counter2.reset())
console.log(counter2.reset())

/**
 * 8. Count the Number of Consistent Strings
 * 
 * You are given a string allowed consisting of distinct characters and an array of strings words. 
 * A string is consistent if all characters in the string appear in the string allowed.
 * Return the number of consistent strings in the array words.
 */

function countConsistentStrings(allowed: string, words: string[]): number {
    let result = 0;
    const allowedSet = new Set(allowed);
    // console.log(allowedSet);
    for (let word of words) {
        // console.log(word);
        let isConsistent = true;

        for (let char of word) {
            // console.log(char);
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        
        if (isConsistent) {
            result++;
        }
    }

    return result;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));
console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));
 
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
console.log(f({},null,42));
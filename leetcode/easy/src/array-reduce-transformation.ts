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

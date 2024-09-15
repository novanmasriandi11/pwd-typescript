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
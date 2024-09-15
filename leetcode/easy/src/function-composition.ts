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

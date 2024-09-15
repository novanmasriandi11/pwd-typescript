/**
 * 15. Allow One Function Call
 * Given a function fn, 
 * return a new function that is identical to the original function except that it ensures fn is called at most once.
 * The first time the returned function is called, 
 * it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn_: Function): OnceFn {
    let called:boolean = false;

    return function (...args) {
        if (called) return undefined;
        called = true;
        return fn_(...args);
    };
}
let fn_ = (a: number, b: number, c: number) => (a + b + c);
let onceFn = once(fn_);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
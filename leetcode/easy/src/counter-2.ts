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
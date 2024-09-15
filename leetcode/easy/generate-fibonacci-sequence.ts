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
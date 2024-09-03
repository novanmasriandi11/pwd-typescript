/*
    QUESTION 1
    Check whether the number is odd or even
 */

//Define variable and assign the value
let _number1: number = 25;

//Process Check
if (_number1 % 2 === 0) {
    console.log(`${_number1} is even`)
} else {
    console.log(`${_number1} is odd`)
}

/*
    QUESTION 2
    Check whether the number is prime number or not
 */

//Define variable and assign the value
let _number2: number = 7;
let isPrime: boolean = false;

//Process Calculation
if (_number2 <= 1) {
    isPrime = false;
} else if (_number2 <= 3) {
    isPrime = true
} else if (_number2 % 2 === 0 || _number2 % 3 === 0) {
    isPrime = false;
} else {
    for (let i: number = 5; i * i <= _number2; i += 6){
        if (_number2 % i === 0 || _number2 % (i + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${_number2} is a prime number`);
} else {
    console.log(`${_number2} is not a prime number`);
}

/*
    QUESTION 3
    Find the sum of the numbers 1 to N
 */

//Define variable and assign the value
let sum: number = 0;
let _numberSum: number = 5;

//Process Calculation
for (let x: number = 1; x <= _numberSum; x++){
    sum += x;
}

console.log(`Sum of numbers from 1 to ${_numberSum} is: ${sum}`)


/*
    QUESTION 1
    Check whether the number is odd or even
 */

//Define variable and assign the value
let _number: number = 25;

//Process Check
if (_number % 2 === 0) {
    console.log(`${_number} is even`)
} else {
    console.log(`${_number} is odd`)
}

/*
    QUESTION 2
    Check whether the number is prime number or not
 */

//Define variable and assign the value
let number: number = 7;
let isPrime: boolean = false;

//Process Calculation
if (number <= 1) {
    isPrime = false;
} else if (number <= 3) {
    isPrime = true
} else if (number % 2 === 0 || number % 3 === 0) {
    isPrime = false;
} else {
    for (let i = 5; i * i <= number; i += 6){
        if (number % i === 0 || number % (i + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is not a prime number`);
}

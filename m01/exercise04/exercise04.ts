/**
 * Question 1
 * Create a triangle pattern according to the height we provide like the following :
 * 1
 * 1  2
 * 1  2  3
 * 1  2  3  4
 * 1  2  3  4  5
 * 
 * @param height 
 */

//Solve
function trianglePattern(height: number):string {
    let numberPattern: string = '';
    for (let x = 1; x <= height; x++){
        for (let y = 1; y <= x; y++){
            numberPattern += y + ' ';
        }
        numberPattern += '\n';
    }
    // console.log(numberPattern);
    return numberPattern;
}

console.log(trianglePattern(5));

/**
 * Question 2
 * Create a function that receiving array as input,
 * and this function can find maximum value in array
 * without using built in method in javascript. 
 * 
 * @param arrInput
 * @returns maxValue - Highest Value from the input of array
 */

//Solve
function findMaxValue(arrInput: number[]):number {
    let maxValue: number = 0;
    for (let i = 0; i <= arrInput.length; i++){
        if (maxValue < arrInput[i]) {
            maxValue = arrInput[i]
        }
    }
    return maxValue;
}

console.log(findMaxValue([10, 55, 79, 32]));

/**
 * Question 3
 * Create a function that can create a triangle pattern according to the height we provide like the following :
 * 01
 * 02  03
 * 04  05  06
 * 07  08  09  10
 * 
 * @param height
 */

//Solve
function trianglePattern_2(height: number):string {
    let showPattern: string = '';
    let currentNumber: number = 1;
    for (let i = 1; i <= height; i++){
        for (let j = 1; j <= i; j++){
            showPattern += currentNumber < 10 ? `0${currentNumber} ` : currentNumber + ' ';
            currentNumber++;
        }
        showPattern += '\n';
    }
    // console.log(showPattern);
    return showPattern;
}

console.log(trianglePattern_2(4));

/**
 * Question 4
 * Create a function that can loop the number of times according to the input we provide, 
 * and will replace multiples of 3 with "Fizz", 
 * multiples of 5 with "Buzz", 
 * multiples of 3 and 5 with "FizzBuzz".
 * 
 * @param n
 */

//Solve
function fizzBuzzLooping(n: number):string {
    let hasil = `n = ${n} -> `;
    for (let i = 1; i <= n; i++){
        let result = (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' :
                     (i % 3 === 0) ? 'Fizz' :
                     (i % 5 === 0) ? 'Buzz' : i;
        
        hasil += result + ' ';        
        // console.log(result);
    }
    return hasil;
    // console.log(hasil);
}

console.log(fizzBuzzLooping(6));
console.log(fizzBuzzLooping(15));

/**
 * Question 5
 * Create a function to calculate Body Mass Index (BMI)
 * Formula : BMI = weight (kg) / (height (meter))²
 * 
 * @param height - Height in meters
 * @param weight - Weight in kilograms
 * @returns If BMI < 18.5       = "less weigth"
 * @returns if BMI 18.5 - 24.9  = "ideal"
 * @returns if BMI 25.0 - 29.9  = “overweight”
 * @returns if BMI 30.0 - 39.9  = “very overweight”
 * @returns if BMI > 39.9       = “obesity”
 */

//Solve
function calculateBMI(height: number, weight: number): string {
    let status = `Height = ${height}m, Weight = ${weight}kg -> `;
    const bmi: number = weight / (height * height);
    let result = (bmi < 18.5) ? "less weight" :
                 (bmi >= 18.5 && bmi <= 24.9) ? "ideal" :
                 (bmi >= 25.0 && bmi <= 29.9) ? 'overweight' :
                 (bmi >= 30.0 && bmi <= 39.9) ? 'very overweight' : 'obesity'
    status += result;
    return status;
}

console.log(calculateBMI(1.67, 63));
console.log(calculateBMI(1.57, 63));
console.log(calculateBMI(1.61, 83));
console.log(calculateBMI(1.75, 125));

/**
 * Question 6
 * Function to remove all odd numbers in an array and 
 * return a new array that contains even numbers only
 * 
 * @param arrInput - Numbers in array
 * @returns New array with only even numbers
 */

//Solve
function evenNumberOnly(arrInput: number[]): string{
    let output: string = `[${arrInput}] -> `;
    const process: number[] = arrInput.filter(num => num % 2 === 0);
    // return arrInput.filter(num => num % 2 === 0);

    return output += `[${process}]`;
}

console.log(evenNumberOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
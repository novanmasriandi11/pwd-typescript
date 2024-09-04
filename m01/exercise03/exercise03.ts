/*
    QUESTION 1
    Display the multiplication table of a given integer.
*/

//Define variable and assign the value
let _numberMultiplicator: number = 9;
let _multiplyLength: number = 10;

//Process calculation
for (let x: number = 1; x <= _multiplyLength; x++) {
    let _output = `${_numberMultiplicator} x ${x}`
    console.log(_output)
}

/*
    QUESTION 2
    Check whether a string is a palindrome or not.
 */

//Define variable and assign the value 
let _word: string = 'madam';
let result: string = `${_word} -> `;

//Process
const reverseWord = _word.split('').reverse().join('');
result = _word === reverseWord ? `${result}palindrome` : `${result} not palindrome`; 
console.log(result);

/*
    QUESTION 3
    Convert centimeter to kilometer
 */

//Define variable and assign the value
let _distanceInCentiMeter: number = 100000;
const conversionDivider: number = 100000;
let _hasil = `${_distanceInCentiMeter} -> `;

//Process
_hasil += _distanceInCentiMeter / conversionDivider + 'km';
console.log(_hasil)
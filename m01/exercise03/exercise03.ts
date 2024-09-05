/*
    QUESTION 1
    Display the multiplication table of a given integer.
*/

//Define variable and assign the value
let _numberMultiplicator: number = 9;
let _multiplyLength: number = 10;

//Process calculation
for (let x: number = 1; x <= _multiplyLength; x++) {
    let _output:string  = `${_numberMultiplicator} x ${x}`
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
let _hasil:string = `${_distanceInCentiMeter} -> `;

//Process
_hasil += _distanceInCentiMeter / conversionDivider + 'km';
console.log(_hasil)

/*
    QUESTION 4
    Format number as currency (IDR)
 */

//Define variable and assign the value
let _numCurrency: number = 1000;
_hasil = `${_numCurrency} -> `;

//Process
_hasil += _numCurrency.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
console.log(_hasil);

/**
    QUESTION 5
    Remove the first occurrence of a given “search string” from a string
 */

//Define variable and assign the value
let _text: string = "Hello world";
let _textSearch: string = 'ell';
_hasil = `string = "${_text}", search string = "${_textSearch}" -> `;

//Process
for (let character of _textSearch) {
    _text = _text.replace(character,'')
    // console.log(_text);
}
_hasil += _text;
console.log(_hasil);
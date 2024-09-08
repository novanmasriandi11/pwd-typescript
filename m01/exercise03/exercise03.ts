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

/*
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

/*
    QUESTION 6
    Capitalize the first letter of each word in a string 
*/

//Define variable and assign the value
let _capitalizeWord: string = "hello world";
_hasil = `${_capitalizeWord} -> `;

//Process
_capitalizeWord = _capitalizeWord.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// console.log(_capitalizeWord);
console.log(_hasil += _capitalizeWord);

/*
    QUESTION 7
    Swap the case of each character from string.
*/

//Define variables and assign the value
let _swapLetter: string = "The QuiCk BrOwN Fox";
_hasil = `${_swapLetter} -> `;

//Process
_swapLetter = _swapLetter.split('').map(character => character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase()).join(''); 
// console.log(_swapLetter);
console.log(_hasil += _swapLetter);

/*
    QUESTION 8
    Find the largest of two given integers
*/

//Define variable and assign the value
let _numFind1: number = 42;
let _numFind2: number = 27;
_hasil = `num1 = ${_numFind1}, num2 = ${_numFind2} -> `;

//Process
let _findNum = _numFind1 > _numFind2 ? _numFind1 : _numFind2;
_hasil += _findNum;
console.log(_hasil);

/*
    QUESTION 9
    Conditional statement to sort three numbers
*/

//Define variable and assign the value
let _sortNum1: number = 42;
let _sortNum2: number = 27;
let _sortNum3: number = 18;
_hasil = `num1 = ${_sortNum1}, num2 = ${_sortNum2}, num3 = ${_sortNum3} -> `;

//Process
if (_sortNum1 > _sortNum2) {
    [_sortNum1, _sortNum2] = [_sortNum2, _sortNum1];

    // console.log(_sortNum1);
    // console.log(_sortNum2);
    // console.log(_sortNum3);
}
if (_sortNum2 > _sortNum3) {
    [_sortNum2, _sortNum3] = [_sortNum3, _sortNum2];

    // console.log(_sortNum1);
    // console.log(_sortNum2);
    // console.log(_sortNum3);
}
if (_sortNum1 > _sortNum2) {
    [_sortNum1, _sortNum2] = [_sortNum2, _sortNum1];

    // console.log(_sortNum1);
    // console.log(_sortNum2);
    // console.log(_sortNum3);
}
_hasil += `${_sortNum1}, ${_sortNum2}, ${_sortNum3}`;
console.log(_hasil);

/*
    QUESTION 10
    Shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
*/

//Define variable and assign the value
let _inputShow: string = "hello";
_hasil = `${_inputShow} -> `;

//Process
const checkInput = typeof _inputShow === 'string' ? 1 : typeof _inputShow === 'number' ? 2 : 3;
_hasil += checkInput;
console.log(_hasil);
/**
 * Question 1
 * Function to get the lowest, highest and average value in the array.
 * 
 * @params arrInput
 * @returns Array of Lowest, Highest and Average value from the array
 */

//Solve - without sort function
function getStatsWithoutSort(arrInput: number[]): string {
    let output = `arr = [${arrInput}] -> `;
    let lowestValue: number = arrInput[0];
    let highestValue: number = arrInput[0];
    let sum: number = 0;

    for (let i = 0; i < arrInput.length; i++){
        let currentValue = arrInput[i];

        currentValue < lowestValue ? lowestValue = currentValue : null;
        currentValue > highestValue ? highestValue = currentValue : null;
        sum += currentValue;
    }

    const averageValue = (sum / arrInput.length);

    output += `{lowest: ${lowestValue}, highest: ${highestValue}, average: ${averageValue.toFixed(4)}}`;
    return output;
}
console.log(getStatsWithoutSort([12, 5, 23, 18, 4, 45, 32]));

//Solve - with sort function
function getStatsWithSort(arrInput: number[]): string{
    let output = `arr = [${arrInput}] -> `;
    const sorted = arrInput.slice().sort((a, b) => a - b);
    const lowestValue = sorted[0];
    const highestValue = sorted[sorted.length - 1];
    const sum = arrInput.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    const averageValue = sum / arrInput.length;

    output += `{lowest: ${lowestValue}, highest: ${highestValue}, average: ${averageValue.toFixed(4)}}`;
    return output;
}
console.log(getStatsWithSort([12, 5, 23, 18, 4, 45, 32]));

/**
 * Question 2
 * Function that takes an array of words and 
 * returns a string by concatenating the words in the array, 
 * separated by commas and - the last word - by an 'and'.
 * 
 * @param arrInput
 * @returns a string by concatenating the words in the array, 
 * separated by commas and - the last word - by an 'and'.
 */

//Solve
function concatTheWords(arrInput: string[]): string{
    let output = `arr = [${arrInput}] -> `;
    const lastWord = arrInput.pop();
    const concatWords = arrInput.join(', ');

    output += `${concatWords} and ${lastWord}`;

    return output;
}
console.log(concatTheWords(["apple", "banana", "cherry", "date"]));

/**
 * Question 3
 * Function from a given array of numbers and return the second smallest number.
 * 
 * @param arrInput
 * @returns The second smallest number.
 */

//Solve
function getSecondSmallestNumber(arrInput: number[]): string {
    let output = `numbers = [${arrInput}] -> `;
    const secondSmallest = arrInput.sort((a, b) => a - b)[1];    

    output += secondSmallest;
    return output;
}
console.log(getSecondSmallestNumber([5, 3, 1, 7, 2, 6]));

/**
 * Question 4
 * Function to calculate each element in the same position from two arrays of integer. 
 * Assume both arrays are of the same length.
 * 
 * @param arrInput1 - First Array
 * @param arrInput2 - Second Array
 * @returns A new array of calcuate each element from two arrays
 */

//Solve
function calculateTwoArrays(arrInput1: number[], arrInput2: number[]): string{
    let output = `[${arrInput1}] + [${arrInput2}] -> `;

    const sumTwoArrays = arrInput1.map((num, index) => num + (arrInput2[index] || 0));
    
    output += `[${sumTwoArrays}]`;
    return output;
}
console.log(calculateTwoArrays([1, 2, 3], [3, 2, 1]));

/**
 * Question 5
 * Function that adds an element to the end of an array. 
 * However, the element should only be added if it is not already in the array.
 * 
 * @param arrInput
 * @params newElement
 * @returns A new of array with new element if it is not already in the array.
 */

//Solve
function addElementInArray(arrInput: number[], newElement: number): string{
    !arrInput.includes(newElement) ? arrInput.push(newElement) : null;
    
    return `arr = [${arrInput}], newElement = ${newElement} -> [${arrInput}]`;
}
console.log(addElementInArray([1, 2, 3, 4], 4));
console.log(addElementInArray([1, 2, 3, 4], 7));

/**
 * Question 6
 * Function from a given array of mixed data types and return the sum of all the number.
 * 
 * @param arrInput
 * @returns Sum of all the number in the array
 */

//Solve
function sumAllNumber(arrInput: any[]): string{
    const sum = arrInput.filter(item => typeof item === "number").reduce((prevValue, value) => prevValue + value, 0);

    const formatInput = arrInput.map(item => {
        if (item === "3") return '"3"';
        if (item === null) return 'null';
        if (item === undefined) return 'undefined';
        return item;
    }).join(', ');

    return `mixedArray = [${formatInput}] -> ${sum}`;
}
console.log(sumAllNumber(["3", 1, "string", null, false, undefined, 2]));

/**
 * Question 7
 * Function to insert multiple given integer (not an array) to an array and have a maximum size input. 
 * The array can only have a maximum size from a given input. 
 * (if the maximum size of the given input is 5 than the array can only contain 5 elements).
 * 
 * @params maxSize - The maximum size of the array.
 * @params numbers - Multiple numbers to be inserted.
 * @returns A new array with the integers inserted up to maximum size limit.
 */

//Solve
function insertNumberWithLimit(maxSize: number, ...numbers: number[]): string{
    let arrNumber:number[] = [];
    for (let number of numbers) {
        if (arrNumber.length < maxSize) {
            arrNumber.push(number);
        } else {
            break;
        }
    }
    return `maxSize = ${maxSize}, given integers is ${numbers} -> [${arrNumber}]`;
}
console.log(insertNumberWithLimit(5, 5, 10, 24, 3, 6, 7, 8));

/**
 * Question 8
 * Function that will combine 2 given array into one array
 * 
 * @param arrInput1 - First Given Array
 * @param arrInput2 - Second Given Array
 * @returns A new single array of combine the 2 given array
 */

//Solve
function combineTwoArray(arrInput1: number[], arrInput2: number[]): string{
    let arrCombine:number[] = []
    arrCombine.push(...arrInput1, ...arrInput2);
    return `arr1 = [${arrInput1}], arr2 = [${arrInput2}] -> [${arrCombine}]`;
}
console.log(combineTwoArray([1, 2, 3], [4, 5, 6]));

/**
 * Question 9
 * Function to find duplicate values in an array
 * 
 * @param arrInput
 * @returns A new array with the duplicate value
 */

//Solve
function findDuplicateValue(arrInput: number[]): string {
    const duplicates = arrInput.filter((number, index) => arrInput.indexOf(number) !== index)
    return `arr = [${arrInput}] -> [${[...new Set(duplicates)]}]`;
}
console.log(findDuplicateValue([1, 2, 2, 2, 3, 3, 4, 5, 5]));

/**
 * Question 10
 * Function to find the difference in 2 given array
 * 
 * @param arrInput1 - First Array
 * @param arrInput2 - Second Array
 * @returns A new array with the difference value
 */

//Solve
function findDifferenceTwoArray(arrInput1: number[], arrInput2: number[]): string {
    const difference = arrInput1.concat(arrInput2).filter(item => !(arrInput1.includes(item) && arrInput2.includes(item)));

    return `arr1 = [${arrInput1}], arr2 = [${arrInput2}] -> [${difference}]`;
}
console.log(findDifferenceTwoArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
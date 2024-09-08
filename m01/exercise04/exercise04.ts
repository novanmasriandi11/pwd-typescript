/*
    Question 1
    Create a triangle pattern according to the height we provide like the following :
    1
    1  2
    1  2  3
    1  2  3  4
    1  2  3  4  5
*/

//Solve
function trianglePattern(height: number) {
    let numberPattern: string = '';
    for (let x = 1; x <= height; x++){
        for (let y = 1; y <= x; y++){
            numberPattern += y + ' ';
        }
        numberPattern += '\n';
    }
    console.log(numberPattern);
}

trianglePattern(5);

/*
    Question 2
    Create a function that receiving array as input, 
    and this function can find maximum value in array without using built in method in javascript.
    Parameters : array
    Output: number
*/

//Solve
function findMaxValue(arrInput: number[]) {
    let maxValue: number = 0;
    for (let i = 0; i <= arrInput.length; i++){
        if (maxValue < arrInput[i]) {
            maxValue = arrInput[i]
        }
    }
    return maxValue;
}

console.log(findMaxValue([10, 55, 79, 32]));

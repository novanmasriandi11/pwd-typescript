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


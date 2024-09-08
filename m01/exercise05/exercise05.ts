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
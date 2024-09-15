/**
 * 02. Group By
 * 
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array 
 * and it will return a grouped version of the array.
 * A grouped array is an object where each key is the output of fn(arr[i]) 
 * and each value is an array containing all items in the original array which generate that key.
 * The provided callback fn will accept an item in the array and return a string key.
 * The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
 */
interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function <T>(fn: (item: T) => string): Record<string, T[]> {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {} as Record<string, T[]>); 
}
const result = [1, 2, 3].groupBy(String);
console.log(result);

const array = [{ "id": "1" }, { "id": "1" }, { "id": "2" }];
const fn = function (item: { id: any; }) { return item.id };
console.log(array.groupBy(fn));
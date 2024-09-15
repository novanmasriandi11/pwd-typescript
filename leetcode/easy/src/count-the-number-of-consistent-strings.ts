/**
 * 8. Count the Number of Consistent Strings
 * 
 * You are given a string allowed consisting of distinct characters and an array of strings words. 
 * A string is consistent if all characters in the string appear in the string allowed.
 * Return the number of consistent strings in the array words.
 */

function countConsistentStrings(allowed: string, words: string[]): number {
    let result = 0;
    const allowedSet = new Set(allowed);
    // console.log(allowedSet);
    for (let word of words) {
        // console.log(word);
        let isConsistent = true;

        for (let char of word) {
            // console.log(char);
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        
        if (isConsistent) {
            result++;
        }
    }

    return result;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));
console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solve: alterative solution using reduce()

function maxChar(str) {

    const totalCharCount = str.split('').reduce((acc, char) => {
        !acc[char] ? acc[char] = 1 : acc[char]++;
        return acc
    }, {})

    let maxCount = 0;
    let maxChar = '';

    Object.keys(totalCharCount).forEach(char => {
        if (totalCharCount[char] > maxCount) {
            maxCount = totalCharCount[char];
            maxChar = char;
        }
    })

    return maxChar;
}

// Solve: Space O(n) Time O(n)

// function maxChar(str) {
//     const cache = {};

//     for (let char of str) {
//         if (!cache[char]) {
//             cache[char] = 1;
//         } else {
//             cache[char]++;
//         }
//     }

//     let maxCharValue = 0;
//     let charResult = '';

//     Object.keys(cache).forEach(char => {
//         if (cache[char] > maxCharValue) {
//             maxCharValue = cache[char];
//             charResult = char
//         }
//     });

//     return charResult;
// }

module.exports = maxChar;

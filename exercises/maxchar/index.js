// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solve: Space O(n) Time O(n)
function maxChar(str) {
    const cache = {};

    for (let char of str) {
        if (!cache[char]) {
            cache[char] = 1;
        } else {
            cache[char]++;
        }
    }

    let maxCharValue = 0;
    let charResult = '';

    Object.keys(cache).forEach(char => {
        if (cache[char] > maxCharValue) {
            maxCharValue = cache[char];
            charResult = char
        }
    });

    return charResult;
}

module.exports = maxChar;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


/* 

Test Case 1: Is this a string?
Test Case 2: What are valid characters?
Test Case 3: Reverse a sentence, reverse the letters within not the words
Test Case 4: How to solve in various ways.

*/

// Iterative Solution: Space 0(n)
function reverse(str) {
    const result = [];

    str.split('').forEach(letter => result.unshift(letter))

    return result.join('')
}

// Fastest
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

module.exports = reverse;

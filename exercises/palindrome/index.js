// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


/*
Things to consider:
    - Which characters to consider?
        - Include ' ' and punctuation
    - Should we validate if it's a string?
    - Capitilization matters?
*/

// Thir Solution: Using reverse()
function palindrome(str) {
    return str.split('').reverse().join('') === str;
}


// Second Solution: Clean up code from initial
// function palindrome(str) {
//     const strArr = str.split('');
//     const midIndex = Math.floor(strArr.length/2);

//     for (let i = 0; i < midIndex; i++) {
//         if (strArr[i] !== strArr[strArr.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }


// First Solution: Iterate half the array forward and back
// function palindrome(str) {
//     let counter = str.length - 1; 
//     for (let char of str.split('')) {
//         if (char !== str[counter]) {
//             return false;
//         }

//         counter--;
//     }

//     return true;
// }

module.exports = palindrome;

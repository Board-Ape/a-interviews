// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Do we check for valid integers?
// Do we want to keep negative numbers?
// Do we want to exclude the zeros when returning?

function reverseInt(n) {
    return parseInt(n).split('').reverse().join('') * Math.sign(n)
}

module.exports = reverseInt;

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Printing multiples of 3 = "fizz"
// Printing multiples of 5 = "buzz"
// Printing multiples of 15 = "fizzbuzz"

// Can we assume that n is a number?
// Handling for less than 3?
// Are we taking into consideration negative values as well?

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        switch (i) {
            case i % 15 === 0:
                console.log('fizzbuzz');
                break;
            case i % 5 === 0:
                console.log('buzz');
                break;
            case i % 3 === 0:
                console.log('fizz');
                break;
            default:
                console.log(i);
        }
    }
}

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 === 0) {
//             console.log('fizzbuzz');
//         }
//         else if (i % 5 === 0) {
//             console.log('buzz');
//         }
//         else if (i % 3 === 0) {
//             console.log('fizz');
//         }
//         else {
//             console.log(i)
//         }
//     }
// }

module.exports = fizzBuzz;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// The idea is to create an N * N grid and console.log that
// Are we testing the input we receive is always a whole number integer?
// No: Errpr handle that

// Attempting am recursive solution

// function steps(n) {
//     if (!n || typeof n !== 'number' || n < 1) {
//         return "Invalid number input";
//     }

//     for (let row = 0; row < n; row++) {
//         let line = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 line += '#';
//             } else {
//                 line += ' ';
//             }
//         }
//         console.log(line);
//     }
// }

module.exports = steps;
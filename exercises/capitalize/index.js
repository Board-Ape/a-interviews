// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Can we assume that we always receive a string?
// No: Error handling at the start will test for type.
// Can we assume there are always characters present?
// No: Error Handle for empty string

const capitalize = (str) => {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

// const capitalize = (str) => {
//     const result = [];

//     for (let char of str.split(' ')) {
//         result.push(char[0].toUpperCase() + char.slice(1));
//     }

//     return result.join(' ');
// }

// function capitalize(str) {
//     if (typeof str !== 'string') {
//         return "Input is NOT a string";
//     }

//     str = str.split('');
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0) {
//             str[i] = str[i].toUppc         erCase();
//         }

//         if (str[i] === ' ') {
//             str[i+1] = str[i+1].toUpperCase();
//         }
//     }

//     return str.join('');
// }

module.exports = capitalize;

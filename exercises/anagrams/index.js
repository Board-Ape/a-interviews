// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Will we always receive a string?
// - No: Handle error check for non string inputs
// Will we only be dealing with alphabetical characters a-zA-Z
// - No: Clean the strings before processing
// Take into consideration capitilization?
// - No: Let's lowercase all results

function anagrams(stringA, stringB) {
    if (typeof stringA !== 'string' || typeof stringB !== 'string') {
        return 'Not valid string inputs';
    }

    cleanedA = cleanString(stringA).toLowerCase();
    cleanedB = cleanString(stringB).toLowerCase();

    return cleanedA.split('').sort().join('') === cleanedB.split('').sort().join('');
}

const cleanString = (string) => {
    return string.replace(/[^A-Za-z]/g, '');
}

module.exports = anagrams;

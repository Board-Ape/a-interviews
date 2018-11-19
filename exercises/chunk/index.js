// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Assumptions: Array is always an array, size is always an integer greater than 0
// Array - no values within array, number of values is less than the size, is greater
// Iterate over the array.
// When iteration max is reached, move to the next position in array


function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.last - 1];

        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element);
        }
    }
}


// function chunk(array, size) {
//     const result = [];
//     let inner = [];

//     for (let i = 0; i < array.length; i++) {
//         if (inner.length < size) {
//             inner.push(array[i]);
//         } else {
//             result.push(inner);
//             inner = [];
//             inner.push(array[i]);
//         }
//     }

//     if (inner.length) {
//         result.push(inner);
//     }

//     return result;
// }

module.exports = chunk;

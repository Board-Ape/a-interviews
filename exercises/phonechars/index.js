/*

1) Create a class object for all possible combinations given a string of numbers.
2) Create a method that returns possible values of each number.
3) Create a method that returns possible character combinations.

*/

class LetterCombo {
    getLetters(num) {
        const map = {
            1: ['a', 'b', 'c'],
            2: ['d', 'e', 'f'],
            3: ['g', 'h', 'i']
        }

        if (!map[num]) {
            return 'Value not found within map'
        }
        
        return map[num];
    }
}

module.exports = {LetterCombo};
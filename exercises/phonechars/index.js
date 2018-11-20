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

    getCombos(nums) {
        let result = [''];

        for (let i = 0; i < nums.split('').length; i++) {
            let temp = [];
            const letterArray = this.getLetters(nums[i]);
            for (let j = 0; j < letterArray.length; j++) {
                let letterToAdd = letterArray[j];
                for (let k = 0; k < result.length; k++) {
                    temp.push(result[k] + letterToAdd);
                }
            }
            result = temp;
        }
        
        return result;
    }
}

module.exports = {LetterCombo};
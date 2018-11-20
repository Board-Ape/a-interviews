const N = require('./index');
const Letters = N.LetterCombo;

test('Letters is a class', () => {
    expect(typeof Letters.prototype.constructor).toEqual('function');
});

describe('Get Letter Array', () => {
    test('retrieve values possible letter values', () => {
        const n = new Letters();
        let letterPossibilities = n.getLetters('1');
        expect(letterPossibilities).toEqual(['a','b','c']);
        letterPossibilities = n.getLetters('2');
        expect(letterPossibilities).toEqual(['d','e','f']);
        letterPossibilities = n.getLetters('3');
        expect(letterPossibilities).toEqual(['g','h','i']);
        letterPossibilities = n.getLetters('38');
        expect(letterPossibilities).toEqual('Value not found within map');
    });
});

describe('Get Possible Combinations', () => {
    test('retrieve all possible letter combinations', () => {
        const n = new Letters();
        let letterCombos = n.getCombos('1');
        expect(letterCombos).toEqual([
            'a','b','c'
        ]);
        letterCombos = n.getCombos('12');
        expect(letterCombos).toEqual([
            'ad','bd','cd',
            'ae','be','ce',
            'af','bf','cf'
        ]);
        letterCombos = n.getCombos('123');
        expect(letterCombos).toEqual([
            'adg','bdg','cdg','aeg','beg','ceg','afg','bfg','cfg',
            'adh','bdh','cdh','aeh','beh','ceh','afh','bfh','cfh',
            'adi','bdi','cdi','aei','bei','cei','afi','bfi','cfi'
        ]);
    })
})
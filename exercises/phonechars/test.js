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


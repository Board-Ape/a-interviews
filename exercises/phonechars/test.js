const N = require('./index');
const Letters = N.LetterCombo;

test('Letters is a class', () => {
    expect(typeof Letters.prototype.constructor).toEqual('function');
});

describe('Get Numbers', () => {
    test('retrieve values possible letter values', () => {
        const n = new Letters();
        const letterPossibilities = n.getLetters('1');
        expect(letterPossibilities).toEqual(['a','b','c']);
    });
});

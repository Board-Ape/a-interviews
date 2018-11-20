const N = require('./index');
const Letters = N.LetterCombo;

test('Letters is a class', () => {
    expect(typeof Letters.prototype.constructor).toEqual('function');
});


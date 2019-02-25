const assert = require('assert');
const wordToReverse = "scott"
const wordReversed = "costt"

const {
    sortLettersAlphabetically
} = require('../src/excercise04')

it(`should take the word ${wordToReverse} and return ${wordReversed}`, () => {
    const result = sortLettersAlphabetically(wordToReverse);
    assert.equal(result, wordReversed);
});
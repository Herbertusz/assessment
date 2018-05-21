/* global describe it */

const assert = require('assert');
const {reverseString, numberPartToString, numberToString} = require('../numeral.js');

describe('Numeral', function(){

    describe('reverseString', function(){
        it('',       () => { assert.equal(reverseString(''),       ''); });
        it('012345', () => { assert.equal(reverseString('012345'), '543210'); });
        it('abcdef', () => { assert.equal(reverseString('abcdef'), 'fedcba'); });
    });

    describe('numberPartToString', function(){

        it('8',   () => { assert.equal(numberPartToString('8'),   'eight'); });
        it('008', () => { assert.equal(numberPartToString('8'),   'eight'); });
        it('12',  () => { assert.equal(numberPartToString('12'),  'twelve'); });
        it('012', () => { assert.equal(numberPartToString('12'),  'twelve'); });
        it('18',  () => { assert.equal(numberPartToString('18'),  'eighteen'); });
        it('68',  () => { assert.equal(numberPartToString('68'),  'sixty-eight'); });
        it('068', () => { assert.equal(numberPartToString('68'),  'sixty-eight'); });
        it('100', () => { assert.equal(numberPartToString('100'), 'one hundred'); });
        it('108', () => { assert.equal(numberPartToString('108'), 'one hundred and eight'); });
        it('160', () => { assert.equal(numberPartToString('160'), 'one hundred and sixty'); });
        it('168', () => { assert.equal(numberPartToString('168'), 'one hundred and sixty-eight'); });

    });

    describe('numberToString', function(){

        it('7',     () => { assert.equal(numberToString('7'),     'seven'); });
        it('42',    () => { assert.equal(numberToString('42'),    'forty-two'); });
        it('2001',  () => { assert.equal(numberToString('2001'),  'two thousand and one'); });
        it('1999',  () => { assert.equal(numberToString('1999'),  'nineteen hundred and ninety-nine'); });
        it('17999', () => { assert.equal(numberToString('17999'), 'seventeen thousand nine hundred and ninety-nine'); });

    });

});

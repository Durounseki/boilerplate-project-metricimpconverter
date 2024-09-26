const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("Testing valid whole number", () => {
        assert.strictEqual(
            convertHandler.getNum('4gal'),
            4,
            'Correctly read a valid whole number'
        );
    });
    test("Testing valid decimal number", () => {
        assert.strictEqual(
            convertHandler.getNum('3.1mi'),
            3.1,
            'Correctly read a valid decimal number'
        );
    });
    test("Testing valid fraction", () => {
        assert.strictEqual(
            convertHandler.getNum('1/2km'),
            0.5,
            'Correctly read a valid fraction'
        );
    });
    test("Testing valid fraction with decimals", () => {
        assert.strictEqual(
            convertHandler.getNum('3.0/4.0lbs'),
            0.75,
            'Correctly read a valid fraction with decimals'
        );
    });
    test("Testing invalid double fraction", () => {
        assert.strictEqual(
            convertHandler.getNum('1/2/3kg'),
            'invalid number',
            'Return error on invalid double fraction'
        );
    });
    test("Testing empty number input", () => {
        assert.strictEqual(
            convertHandler.getNum('l'),
            1,
            'Default to 1 on empty number input'
        );
    });
    test("Testing correctly reading each unit", () => {
        assert.strictEqual(
            convertHandler.getUnit('3gal'),
            'gal',
            'Correctly read gallons'
        );
        assert.strictEqual(
            convertHandler.getUnit('4l'),
            'L',
            'Correctly read liters'
        );
        assert.strictEqual(
            convertHandler.getUnit('5lbs'),
            'lbs',
            'Correctly read pounds'
        );
        assert.strictEqual(
            convertHandler.getUnit('6kg'),
            'kg',
            'Correctly read kilograms'
        );
        assert.strictEqual(
            convertHandler.getUnit('7mi'),
            'mi',
            'Correctly read miles'
        );
        assert.strictEqual(
            convertHandler.getUnit('8km'),
            'km',
            'Correctly read kilometers'
        );
    });
    test("Testing invalid unit", () => {
        assert.strictEqual(
            convertHandler.getUnit('someUnit'),
            'invalid unit',
            'Return error on invalid unit'
        );
    });
    test("Testing return unit", () => {
        assert.strictEqual(
            convertHandler.getReturnUnit('gal'),
            'L',
            'Return L from gallons'
        );
        assert.strictEqual(
            convertHandler.getReturnUnit('L'),
            'gal',
            'Return gal from liters'
        );
        assert.strictEqual(
            convertHandler.getReturnUnit('lbs'),
            'kg',
            'Return kg from pounds'
        );
        assert.strictEqual(
            convertHandler.getReturnUnit('kg'),
            'lbs',
            'Return lbs from kilograms'
        );
        assert.strictEqual(
            convertHandler.getReturnUnit('mi'),
            'km',
            'Return km from miles'
        );
        assert.strictEqual(
            convertHandler.getReturnUnit('km'),
            'mi',
            'Return mi from kilometers'
        );
    });
    test("Testing spelled-out unit", () => {
        assert.strictEqual(
            convertHandler.spellOutUnit('gal'),
            'gallons',
            'Return gallons from gal'
        );
        assert.strictEqual(
            convertHandler.spellOutUnit('L'),
            'liters',
            'Return liters from l'
        );
        assert.strictEqual(
            convertHandler.spellOutUnit('lbs'),
            'pounds',
            'Return pounds from lbs'
        );
        assert.strictEqual(
            convertHandler.spellOutUnit('kg'),
            'kilograms',
            'Return kilograms from kg'
        );
        assert.strictEqual(
            convertHandler.spellOutUnit('mi'),
            'miles',
            'Return miles from mi'
        );
        assert.strictEqual(
            convertHandler.spellOutUnit('km'),
            'kilometers',
            'Return kilometers from km'
        );
    });
    test("Testing converting gal to L", () => {
        assert.strictEqual(
            convertHandler.convert(1,'gal'),
            3.78541,
            'Correctly convert gal to L'
        )
    });
    test("Testing converting L to gal", () => {
        assert.strictEqual(
            convertHandler.convert(1,'L'),
            0.26417,
            'Correctly convert L to gal'
        )
    });
    test("Testing converting lbs to kg", () => {
        assert.strictEqual(
            convertHandler.convert(1,'lbs'),
            0.45359,
            'Correctly convert lbs to kg'
        )
    });
    test("Testing converting kg to lbs", () => {
        assert.strictEqual(
            convertHandler.convert(1,'kg'),
            2.20462,
            'Correctly convert kg to lbs'
        )
    });
    test("Testing converting mi to km", () => {
        assert.strictEqual(
            convertHandler.convert(1,'mi'),
            1.60934,
            'Correctly convert mi to km'
        )
    });
    test("Testing converting km to mi", () => {
        assert.strictEqual(
            convertHandler.convert(1,'km'),
            0.62137,
            'Correctly convert km to mi'
        )
    });

});
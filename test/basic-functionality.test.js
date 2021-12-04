const index = require('../index');

describe('Basic tests', () => {
    describe('Input validation tests', () => {
        test('input string "p", returns the string "INVALID"', () => {
            expect(index.processInput(["p"])).toBe("INVALID");
        });

        test('input string ",1", returns the string "INVALID"', () => {
            expect(index.processInput([",1"])).toBe("INVALID");
        });

        test('input string "1,", returns the string "INVALID"', () => {
            expect(index.processInput(["1,"])).toBe("INVALID");
        });
        test('input string "1,,1", returns the string "INVALID"', () => {
            expect(index.processInput(["1,,1"])).toBe("INVALID");
        });

        test('input "+1", function returns INVALID', () => {
            expect(index.processInput(["+1"])).toBe("INVALID");
        });

        test('input "*1", function returns INVALID', () => {
            expect(index.processInput(["*1"])).toBe("INVALID");
        });

        test('input "1+", function returns INVALID', () => {
            expect(index.processInput(["1+"])).toBe("INVALID");
        });

        test('input "1*", function returns INVALID', () => {
            expect(index.processInput(["1*"])).toBe("INVALID");
        });

        test('input "1,1+++", function returns INVALID', () => {
            expect(index.processInput(["1,1+++"])).toBe("INVALID");
        });
    })

    describe('Basic functionality tests', () => {
        test('input _empty string_, function returns 0', () => {
            expect(index.processInput([" "])).toBe("0");
        });

        test('input 1, function returns 1', () => {
            expect(index.processInput(["1"])).toBe("1");
        });

        test('input "1,2", function returns the sum of 1 + 2', () => {
            expect(index.processInput(["1,2"])).toBe("3");
        });

        test('input "1,2,3,4", function returns the sum of 1 + 2 + 3 + 4', () => {
            expect(index.processInput(["1,2,3,4"])).toBe("10");
        });

        test('input "1,2+", function returns the sum of 1 + 2', () => {
            expect(index.processInput(["1,2+"])).toBe("3");
        });

        test('input "1,2,2++,4,5++", function returns the sum of ((2 + 2) + 1) + (4 + 5)', () => {
            expect(index.processInput(["1,2,2++,4,5++"])).toBe("14");
        });

        test('input "1,2*", function returns the product of 1 * 2', () => {
            expect(index.processInput(["1,2*"])).toBe("2");
        });

        test('input "1,2,2+*,4,5*+", function returns the sum of ((2 + 2) * 1) + (4 * 5)', () => {
            expect(index.processInput(["1,2,2+*,4,5*+"])).toBe("24");
        });

        test('input "1,2,2**,4,5*+", function returns the sum of ((2 * 2) * 1) + (4 * 5)', () => {
            expect(index.processInput(["1,2,2**,4,5*+"])).toBe("24");
        });

        test('input "1,4,2/-,4,5-*", function returns the sum of ((4 / 2) - 1) * (4 - 5)', () => {
            expect(index.processInput(["1,4,2/-,4,5-*"])).toBe("-1");
        });
    })
});

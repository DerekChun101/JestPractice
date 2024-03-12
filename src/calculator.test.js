import calculator from "./calculator";

test('1 + 1 = 2', () => {
    expect(calculator.add(1,1)).toBe(2);
});

test('1 + 2 = 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});


test('-1 + 2 = 1', () => {
    expect(calculator.add(-1,2)).toBe(1);
});



test('2 - 1 = 1', () => {
    expect(calculator.subtract(2,1)).toBe(1);
});

test('2 - 2 = 0', () => {
    expect(calculator.subtract(2,2)).toBe(0);
});

test('2/1 = 2', () => {
    expect(calculator.divide(2,1)).toBe(2);
});

test('3/1 = 3', () => {
    expect(calculator.divide(3,1)).toBe(3);
});

test('2/3 = 2/3', () => {
    expect(calculator.divide(2,3)).toBe(2/3);
});

test('2/3 = 2/3', () => {
    expect(calculator.divide(2,3)).toBe(2/3);
});

test('2 * 3 = 6', () => {
    expect(calculator.multiply(2,3)).toBe(6);
});
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
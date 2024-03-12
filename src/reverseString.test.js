import reverseString from "./reverseString";

test('ab = ba', () => {
    expect(reverseString('ab')).toBe('ba');
})

test('ba = ab', () => {
    expect(reverseString('ba')).toBe('ab');
})
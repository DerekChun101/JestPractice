import caesarCipher from "./caesarCipher";

test('b = c',() => {
    expect(caesarCipher('b', 1)).toBe('c');
})

test('a = c',() => {
    expect(caesarCipher('a', 2)).toBe('c');
})

test('ab = bc',() => {
    expect(caesarCipher('ab', 1)).toBe('bc');
})

test('abc = efg', () => {
    expect(caesarCipher('abc', 4)).toBe('efg');
})

test('z = a', () => {
    expect(caesarCipher('z', 1)).toBe('a');
})

test('zbc = acd', () => {
    expect(caesarCipher('zbc', 1)).toBe('acd');
})


test('a = b', () => {
    expect(caesarCipher('a', 1000)).toBe('m');
})

// test('2 + 2 = 4', () => {
//     expect(2 +2).toBe(4);
// })

import captialize from "./capitalize";

test('a = A', ()=> {
    expect(captialize('a')).toBe('A')
})

test('b = B', ()=> {
    expect(captialize('b')).toBe('B')
})

test('ab = Ab', ()=> {
    expect(captialize('ab')).toBe('Ab')
})
import analyzeArray from "./analyzeArray";

let obj = analyzeArray([1,3])
test('Array Average: [1,3] = 2', () => {
    expect(obj).toMatchObject({average: 2});
})
let obj2 =  analyzeArray([1,5])
test('Array Average: [1,5] = 3', () => {
    expect(obj2).toMatchObject({average: 3});
})

let obj3 =  analyzeArray([1,6])
test('Array Average: [1,6] = 3.5', () => {
    expect(obj3).toMatchObject({average: 3.5});
})


test('{avg: 3, min:1} [1,5]', () => {
    expect(obj2).toMatchObject({average: 3,
                                min:1});
})


test('{avg: 3, min:1, max: 5} [1,5]', () => {
    expect(obj2).toMatchObject({average: 3,
                                min:1,
                                max:5});
})

test('{avg: 3, min:1, max: 5, length:2} [1,5]', () => {
    expect(obj2).toMatchObject({average: 3,
                                min:1,
                                max:5,
                                length:2});
})


let obj4 = analyzeArray([12,4,761,32,421,24]);

test('{avg: 209, min:4, max: 761, length:6} [1,5]', () => {
    expect(obj4).toMatchObject({average: 209,
                                min:4,
                                max:761,
                                length:6});
})

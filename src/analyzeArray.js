function analyzeArray(arr) {
    let avg = findAverage(arr);
    let min = findMinMax(arr).min;
    let max = findMinMax(arr).max;
    let obj = ''
    return obj = {
        average: avg,
        min: min,
        max: max,
        length: arr.length,
    }
}


function findAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum/arr.length;

    return average;
}

function findMinMax(arr) {
    arr.sort((a,b) => a-b);
    return {min: arr[0], max: arr[arr.length - 1]};
}


let obj = analyzeArray([1,5]);


console.log(obj);
export default analyzeArray
function split(wholeArray) {
    let middlePoint = Math.floor(wholeArray.length / 2); // = 3 in test case
    let firstHalf = wholeArray.slice(0, middlePoint);
    let secondHalf = wholeArray.slice(middlePoint);
    return [firstHalf, secondHalf];
}

function merge(array1, array2) {
    let sortedArray = [];

    while(array1.length && array2.length) {
        if(array1[0] <= array2[0]) {
            sortedArray.push(array1.shift());
        } else {
            sortedArray.push(array2.shift());
        }
    }

    if (array1.length) sortedArray = [...sortedArray, ...array1]
    if (array2.length) sortedArray = [...sortedArray, ...array2]

    return sortedArray;
}

function mergeSort(array) {
    if (array.length === 1) return array;

    let sorted1 = mergeSort(split(array)[0]);
    let sorted2 = mergeSort(split(array)[1]);

    return merge(sorted1, sorted2)
}

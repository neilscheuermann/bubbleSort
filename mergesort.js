function split(wholeArray) {
    let middlePoint = Math.floor(wholeArray.length / 2); // = 3 in test case
    let firstHalf = wholeArray.slice(0, middlePoint);
    let secondHalf = wholeArray.slice(middlePoint);
    return [firstHalf, secondHalf];
}


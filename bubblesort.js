function bubbleSort(array) {

    /* your code here */
    for (let i = 0; i <array.length-1; i++) {
        const firstNum = array[i];
        const secondNum = array[i+1];
        if (firstNum < secondNum) {
            array[i] = secondNum;
            array[i+1] = firstNum;
        }
    }
    return array;
  }
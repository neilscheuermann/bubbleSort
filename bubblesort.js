function bubbleSort(array) {
    for (let j = array.length; j >= 0; j--){
      for (let i = 0; i < array.length; i++) {
          if (array[i] > array[i + 1]){
              let holder = array[i];
              array[i] = array[i + 1];
              array[i + 1] = holder;
          }
      }
    }
    return array;
}

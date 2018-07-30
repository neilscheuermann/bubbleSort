function bubbleSort(array) {
    // if (array.length === 1 || !array.length) {
    //     return array;
    // } else {
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] > array[i + 1]){
    //             var holder = array[i];
    //             array[i] = array[i + 1];
    //             array[i + 1] = holder;
    //         }
    //     }
    //     return bubbleSort(array.slice(0, -1));
    // }
for (let j = array.length; j >= 0; j--){

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]){
            var holder = array[i];
            array[i] = array[i + 1];
            array[i + 1] = holder;
            }
        }
    }
    return array;
}

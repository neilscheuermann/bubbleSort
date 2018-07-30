function bubbleSort(array) {
    if (!array.length) {
        return array;
    }else {
        for(let i =0; i < array.length; i++) {
            if (array[i] > array[i+1]){
                var holder = array[i];
                array[i] = array[i+1];
                array[i+1] = holder;
            }
        }
        return bubbleSort(array.slice[0, -1]);
    }
  }




// const tootsiepop = {};
// tootsiepop.lick = function () {
//   return 'licked';
// };
// tootsiepop.getToCenter = function () {
//   this.lick();
//   this.lick();
//   this.lick();
//   return 'got to center';
// }
function split(wholeArray) {

  const middlePoint = Math.floor(wholeArray.length / 2);

  const firstHalf = wholeArray.slice(0, middlePoint);
  const secondHalf = wholeArray.slice(middlePoint);

  return [firstHalf, secondHalf];
}




////////////
function merge(arr1, arr2){

  const finalArr = [];

  while(arr1.length||arr2.length){
    if(arr1[0] <= arr2[0]){
      finalArr.push(arr1.shift());
    }
    else {
      finalArr.push(arr2.shift());
    }
  }
  return finalArr;
}




/////////////
function mergeSort(array) {
  // split function
  // sort
  // merge


  // base case
  if (array.length === 1){
    return array;
  }
  else {
    /// merge sort each half
    split(array);
  }
 // merge
}

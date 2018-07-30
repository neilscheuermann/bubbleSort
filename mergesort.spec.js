describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2, 5, 0, 9, 12, 10, 3, 1])).toEqual([[2, 5, 0, 9], [12, 10, 3, 1]]);
  it('Handles odd-length arrays', function() {
    expect(split([2, 5, 0, 9, 12, 10, 3, 1, 8])).toEqual([[2, 5, 0, 9], [12, 10, 3, 1, 8]]);
    });

  });
});

describe('Merge function', function(){
  it('is able to merge two small sorted arrays into one sorted array', function(){
    expect(merge([1, 6], [7, 8])).toEqual([1, 6, 7, 8]);
  });


  it('is able to merge two large sorted arrays into one sorted array', function(){
    expect(merge([1, 2, 5, 7, 8], [1, 4, 6, 9])).toEqual([1, 1, 2, 4, 5, 6, 7, 8, 9]);
    });
});

describe('MergeSort function', function(){
  it('should sort and merge an unsorted array', function(){
    expect(mergeSort([2, 1, 6, 3, 7, 8, 0, 5])).toEqual([0, 1, 2, 3, 5, 6, 7, 8]);
  });
});

describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([2, 5, 1, 9, 12, 3])).toEqual([[2, 5, 1], [9, 12, 3]])
    });
    it('able to split odd-lenth array', function() {
        expect(split([2, 5, 1, 4, 9, 12, 3])).toEqual([[2, 5, 1], [4, 9, 12, 3]])
    });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1, 2, 4], [3, 5, 9, 12])).toEqual([1, 2, 3, 4, 5, 9, 12])
    });
});

describe('MergeSort function', function(){
    it('returns a sorted array', function(){
        expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82])
    });
});

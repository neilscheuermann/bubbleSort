describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an unsorted array', function(){
        expect( bubbleSort([3, 2, 6, 4, 8, 1]) ).toEqual( [1, 2, 3, 4, 6, 8] );
      });
    it('handles an array with duplicate values', function(){
      expect( bubbleSort([3, 2, 6, 3, 8, 1]) ).toEqual( [1, 2, 3, 3, 6, 8] );
    });
    it('handles an already sorted array', function(){
        expect( bubbleSort([1, 2, 3, 4, 6, 8]) ).toEqual( [1, 2, 3, 4, 6, 8] );
      });
    it('handles an array with one value', function(){
      expect( bubbleSort([2]) ).toEqual( [2] );
    });

    
});



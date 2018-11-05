describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with one value', function(){
        expect (bubbleSort([1])).toEqual([1]);
    });
    it('handles already sorted array', function(){
        expect (bubbleSort([1, 3, 5, 10])).toEqual([1, 3, 5, 10]);
    });
    it('sorts an array with multiple values', function(){
        expect (bubbleSort([1, 10, 5, 3])).toEqual([1, 3, 5, 10]);
    });
    it('expect swap to have been called once', function() {
        spyOn(window, 'swap').and.callThrough();

        bubbleSort([1, 3, 2])

        expect(swap.calls.count()).toEqual(1)
    })
  });

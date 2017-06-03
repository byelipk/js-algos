class MergeSort {
  // Merge sort is a divide and conquer algorithm that
  // takes two sorted lists and merges them into one
  // sorted list.
  //
  // Steps for divide and conquer:
  //
  // 1. Recognize the base case
  // 2. Break problem down during each call
  // 3. Do work on each subset
  // 4. Combine solutions
  //
  // O(n log n) time complexity.
  // We derive the O(n log) by recursively building sorted arrays.
  // The additional n is because of the merge at the end.


  // Pseudo code for the merge sort wrapper function.
  //
  // procedure mergesort( var a as array )
  //    if ( n == 1 ) return a
  //
  //    var l1 as array = a[0] ... a[n/2]
  //    var l2 as array = a[n/2+1] ... a[n]
  //
  //    l1 = mergesort( l1 )
  //    l2 = mergesort( l2 )
  //
  //    return merge( l1, l2 )
  // end procedure
  run(unsorted) {
    // The base case
    if (unsorted.length === 1) return unsorted;

    // Find the dividing line of the array
    const midpoint = Math.floor(unsorted.length / 2);

    // Do the recursion
    const left  = this.run(unsorted.slice(0, midpoint));
    const right = this.run(unsorted.slice(midpoint, unsorted.length));

    // Merge everything together.
    return this._merge(left, right);
  }

  // procedure merge( var a as array, var b as array )
  //
  //    var c as array
  //
  //    while ( a and b have elements )
  //       if ( a[0] > b[0] )
  //          add b[0] to the end of c
  //          remove b[0] from b
  //       else
  //          add a[0] to the end of c
  //          remove a[0] from a
  //       end if
  //    end while
  //
  //    while ( a has elements )
  //       add a[0] to the end of c
  //       remove a[0] from a
  //    end while
  //
  //    while ( b has elements )
  //       add b[0] to the end of c
  //       remove b[0] from b
  //    end while
  //
  //    return c
  //
  // end procedure
  _merge(left, right) {
    // Linear time complexity
    const output = new Array;

    while(left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) { output.push(left.shift()); }
      else                    { output.push(right.shift()); }
    }

    while(left.length > 0)  { output.push(left.shift()); }

    while(right.length > 0) { output.push(right.shift()); }

    return output;

  }
}

const sorter = new MergeSort();

console.log(sorter.run([5,2]));

module.exports = MergeSort;

// Quicksort
//
// Quicksort is a divide and conquer algorithm where the sorting happens
// in-place. This makes it more memory efficient when compared to a
// D&C algorithm like merge sort.
//
// Quicksort first divides a large array into smaller subarrays. It then
// recursively sorts the subarrays.
//
// The general steps are to:
//
// 1. Pick an element and designate it as the "pivot."
// 2. Reorder the array so that all elements with values less than
//    the pivot come before the pivot. After this "partition" the
//    pivot is in it's final position.
// 3. Then recursively apply steps 1 and 2 to the subarray of elements
//    with smaller values and to the subarray with elements of
//    larger values;
//
// Arrays of zero or one are already sorted.

class QuickSort {

  // ALGORITHM  Quicksort(A[lo..hi])
  //
  // Desc:  Sorts a subarray by quicksort where ``lo`` is the
  //        low index and ``hi`` is the high index.
  //
  // Input: A subarray A[lo..hi] of A[0..n - 1], defined by
  //        its left and right indices, ``lo`` and ``hi``.
  //
  // Output: Subarray A[lo..hi] sorted in nondecreasing order.
  //
  // def Quicksort(A[lo..hi]) do
  //   if lo < hi
  //     split <- Partition(A[lo..hi]) // pivot is a split position
  //     Quicksort(A[lo..split - 1])
  //     Quicksort(A[lo + 1..hi])
  // end
  run(list, lo=0, hi=list.length-1) {
    if (lo < hi) {
      const split = this.partition(list, lo, hi);
      this.run(list, lo, split);
      this.run(list, split + 1, hi);
    }

    return list;
  }

  // ALGORITHM Partition(A[lo..hi])
  //
  // def Partition(A[lo..hi]) do
  //    p <- A[lo]     // pivot (first element in A[lo..hi])
  //    i <- lo - 1    // index i (left to right scan)
  //    j <- hi + 1    // index j (right to left scan)
  //
  //    repeat
  //      repeat i <- i + 1 until A[i] >= p
  //      repeat j <- j - 1 until A[j] <= p
  //      swap(A[i], A[j])
  //    until i >= j
  //
  //    swap(A[i], A[j])  // undo last swap when i >= j
  //    swap(A[l], A[j])
  //
  //    return j
  // end
  partition(list, lo, hi) {
    // The value at the lowest index position shall be the pivot.
    // This value does not change during the partition step.
    const pivot = this._selectPivot(list, lo, hi);

    // We need to keep track of the low and high index positions.
    // These values will change as we scan the array from low to high
    // AND from the high to low.
    let i = lo - 1;
    let j = hi + 1;

    // We're going to scan the array until the scanning indexes `i`
    // and `j` match or cross over.
    do {
      // scan low->high until the value at A[i] is less than the pivot
      do { i++ } while ( list[i] < pivot );

      // scan high->low until the value at A[j] is greater than the pivot
      do { j-- } while ( list[j] > pivot );

      // Move the value at index position ``lo`` to index position ``j``
      this._swap(list, i, j);

    } while( i < j );

    this._swap(list, i, j); // Undo the last swap when i >= j

    this._swap(list, lo, j); // exchange pivot with j to partition the array

    // Return the index position of the pivot
    return j;
  }

  _swap(array, i, j) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
    return array;
  }

  _selectPivot(array, start, end) {
    return array[start];
  }
}

const sorter = new QuickSort();

console.log(sorter.run([3,7,8,5,2,1,9,5,4]));
console.log(sorter.run([3,2,1]));
console.log(sorter.run(['a','d','c','b']));

module.exports = QuickSort;

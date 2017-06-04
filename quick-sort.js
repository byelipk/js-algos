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
  run(array, lo, hi) {
    if (array.length < 2) return array;

    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = array.length - 1;

    if (lo < hi) {
      const pivot = this.horare_partition(array, lo, hi);

      this.run(array, lo, pivot);     // items less than pivot
      this.run(array, pivot+1, hi);   // items greater than pivot
    }

    return array;
  }

  // algorithm partition(A, lo, hi) is
  //     pivot := A[lo]
  //     i := lo - 1
  //     j := hi + 1
  //     loop forever
  //         do
  //             i := i + 1
  //         while A[i] < pivot
  //
  //         do
  //             j := j - 1
  //         while A[j] > pivot
  //
  //         if i >= j then
  //             return j
  //
  //         swap A[i] with A[j]
  horare_partition(array, lo, hi) {
    const pivot = this._pivot(array, lo, hi);

    let i = lo - 1;
    let j = hi + 1;

    while (true) {

      do { i++ } while (array[i] < pivot);
      do { j-- } while (array[j] > pivot);

      if (i < j) {
        this.swap(array, i, j);
      }
      else {
        return j;
      }
    }
  }

  swap(array, i, j) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

  _pivot(array, lo, hi) {
    return array[Math.floor(lo + (hi - lo) / 2)];
    // return array[this.random(lo, hi)];
    // return array[lo];
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

const sorter = new QuickSort();

console.log(sorter.run([3,7,8,5,2,1,9,5,4]));
console.log(sorter.run([3,2,1]));
console.log(sorter.run([5,2,3,1,4]));
console.log(sorter.run(['a','d','c','b']));

module.exports = QuickSort;

// How fast can I implement quick sort?
// Set a timer, then go!!!

class QuickSort {
  run(array, lo, hi) {
    if (array.length < 2) return array;

    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = array.length - 1;

    if (lo < hi) {
      const pivot = this.horare_partition(array, lo, hi);

      this.run(array, lo, pivot);
      this.run(array, pivot+1, hi);
    }

    return array;
  }

  horare_partition(array, lo, hi) {
    const pivot = array[Math.floor(lo + (hi - lo) / 2)];

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

}

const sorter = new QuickSort();
console.log(sorter.run([5,4,3,2,1]));

module.exports = QuickSort;

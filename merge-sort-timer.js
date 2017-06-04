// How fast can I implement merge sort?
// Set a timer, then go!!!

class MergeSort {
  run(unsorted) {
    // 1. Base case
    if (unsorted.length === 1) return unsorted;

    // 2. Divide & Conquer
    const midpoint = Math.floor(unsorted.length / 2);
    const left = this.run(unsorted.slice(0, midpoint));
    const right = this.run(unsorted.slice(midpoint, unsorted.length));

    // 3. Merge
    return this.merge(left, right);
  }

  merge(left, right) {
    const output = [];

    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        output.push(left.shift());
      }
      else {
        output.push(right.shift());
      }
    }

    while (left.length > 0) {
      output.push(left.shift());
    }

    while (right.length > 0) {
      output.push(right.shift());
    }

    return output;
  }

}

const sorter = new MergeSort();
console.log(sorter.run([5,4,3,2,1]));

module.exports = MergeSort;

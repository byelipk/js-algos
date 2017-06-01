// In place selection sort. More memory efficient
// than the version that uses an extra array.
class SelectionSort {
  run(array) {
    for (var i = 0; i < array.length; i++) {

      // Assume the min value is the first element
      let jMin = i;

      // Test against elements after i to find the smallest
      for (var j = i + 1; j < array.length; j++) {
        // If this element is less, then it is the new minimum
        if (array[j] < array[jMin]) {
          jMin = j; // Found new min, remember it's index
        }
      }

      if (jMin != i) {
        // SWAP!
        let temp = array[i];
        array[i] = array[jMin];
        array[jMin] = temp;
      }
    }

    return array;
  }
}


module.exports = SelectionSort;

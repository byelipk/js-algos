/*

INSERTION SORT

*** Description

Iterate over unsorted and grow a sorted unsorted behind current element.
For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:

[ 3 4 5 | 1 2 6 ]
 sorted | unsorted

swaps:
[ 3 4 1 5 | 2 6 ]
[ 3 1 4 5 | 2 6 ]
[ 1 3 4 5 | 2 6 ]

now repeat for next unsorted element

*** Exercises
- Implement insertion sort for unsorted of numbers
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native unsorted.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)
*/

class InsertionSort {
  constructor(compare) {
    this._compare = compare || function compare(a, b) { return a > b; }
  }

  run(unsorted) {
    let sorted = [];

    for (var i = 0; i < unsorted.length; i++) {

      let value = unsorted[i];

      if (sorted.length === 0) {
        sorted.push(value);
      }
      else {
        const length = sorted.length;
        for (var j = 0; j < length; j++) {
          if (this._compare(value, sorted[j])) {
            if (j === sorted.length - 1) {
              // this will increment the length value of `sorted`
              // which can cause the program to keep pushing
              // items onto the array.
              sorted.push(value);
            }
          }
          else {
            sorted.splice(j, 0, value); break;
          }
        }
      }
    }

    return sorted;
  }
}

let inserter = new InsertionSort();

console.log(inserter.run([90,30,20,10]));
console.log(inserter.run([9,2,5,3,7,6,1,0,4,8]));
console.log(inserter.run([5,4,3,2,1]));
console.log(inserter.run([2,3,1,0]));

inserter = new InsertionSort((a, b) => a.order > b.order);
console.log(
  inserter.run(
    [{value: 15, order: 3}, {value: 10, order: 1}, {value: 10, order: 2}]));

module.exports = InsertionSort;

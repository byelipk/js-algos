var Benchmark = require('benchmark');
var QuickSort = require("./quick-sort.js");
var MergeSort = require("./merge-sort.js");


var suite = new Benchmark.Suite;

randomArray = (length, max) => {
  return [...new Array(length)].map(() => Math.round(Math.random() * max));
}

let testArray = randomArray(100000, 1000);

const qsort = new QuickSort();
const msort = new MergeSort();

// add tests
suite.add('QuickSort', function() {
  qsort.run(testArray);
})
suite.add('MergeSort', function() {
  msort.run(testArray);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });


// https://stackoverflow.com/questions/70402/why-is-quicksort-better-than-mergesort

// When would you use quick sort over merge sort?
//
// Real-world data isn't shuffled: it often contains a lot of order which a
// smart sort can make use of, and while neither algorithm does this
// automatically, it's easier to hack a merge sort to do it than a quicksort.
//
// Quicksort has O(n2) worst-case runtime and O(nlogn) average case runtime.
// However, it’s superior to merge sort in many scenarios because many factors
// influence an algorithm’s runtime, and, when taking them all together,
// quicksort wins out.

// In particular, the often-quoted runtime of sorting algorithms refers to the
// number of comparisons or the number of swaps necessary to perform to sort
// the data. This is indeed a good measure of performance, especially since
// it’s independent of the underlying hardware design. However, other things –
// such as locality of reference (i.e. do we read lots of elements which are
// probably in cache?) – also play an important role on current hardware.
// Quicksort in particular requires little additional space and exhibits good
// cache locality, and this makes it faster than merge sort in many cases.
//
// In addition, it’s very easy to avoid quicksort’s worst-case run time of
// O(n2) almost entirely by using an appropriate choice of the pivot – such as
// picking it at random (this is an excellent strategy).
//
// In practice, many modern implementations of quicksort (in particular
// libstdc++’s std::sort) are actually introsort, whose theoretical worst-case
// is O(nlogn), same as merge sort. It achieves this by limiting the recursion
// depth, and switching to a different algorithm (heapsort) once it exceeds
// logn.

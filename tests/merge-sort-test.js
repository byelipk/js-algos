import test from "ava";
import MergeSort from "../sorting/merge-sort.js";

test('an array of one item', t => {
  t.plan(1);

  const sorter = new MergeSort();

  t.deepEqual(sorter.run([2]), [2]);
});

test('an array of two items', t => {
  t.plan(1);

  const sorter = new MergeSort();

  t.deepEqual(sorter.run([5,2]), [2,5]);
});

test('an array of three items', t => {
  t.plan(1);

  const sorter = new MergeSort();

  t.deepEqual(sorter.run([2,3,1]), [1,2,3]);
});

test('an array of ten items', t => {
  t.plan(1);

  const sorter = new MergeSort();

  t.deepEqual(sorter.run([9,2,5,3,7,6,1,0,4,8]), [0,1,2,3,4,5,6,7,8,9]);
});

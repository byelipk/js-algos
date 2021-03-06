import test from "ava";
import BubbleSort from "../sorting/bubble-sort.js";

test('it works', t => {
  t.plan(1);

  const sorter = new BubbleSort();

  t.deepEqual(sorter.run([2,3,1]), [1,2,3]);
});


test('it works on sorted array', t => {
  t.plan(1);

  const sorter = new BubbleSort();

  t.deepEqual(sorter.run([1,2,3]), [1,2,3]);
});

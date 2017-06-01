import test from "ava";
import SelectionSort from "../selection-sort.js";

test('it works', t => {
  t.plan(1);

  const sorter = new SelectionSort();

  t.deepEqual(sorter.run([2,3,1]), [1,2,3]);
});

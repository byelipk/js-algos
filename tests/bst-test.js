import test from "ava";
import BinarySearchTree from "../data-structures/bst.js";

test("constructor", t => {
  t.plan(1);

  const bst = new BinarySearchTree(10);

  t.truthy(bst.value === 10);
});

test("sync insert", t => {
  t.plan(3);

  const bst = new BinarySearchTree(5);

  bst.insert(0);
  bst.insert(10);

  t.truthy(bst.value === 5);
  t.truthy(bst.left.value === 0);
  t.truthy(bst.right.value === 10);
});

test("simple contains", t => {
  t.plan(3);

  const bst = new BinarySearchTree(5);

  t.truthy(bst.contains(5) === true);
  t.truthy(bst.contains(50) === false);
  t.truthy(bst.contains(-50) === false);
});

test("contains when tree is deep", t => {
  t.plan(7);

  const bst = new BinarySearchTree(5);

  bst.insert(10);
  bst.insert(-34);
  bst.insert(1);
  bst.insert(25);
  bst.insert(0);

  t.truthy(bst.contains(1) === true);
  t.truthy(bst.contains(10) === true);
  t.truthy(bst.contains(0) === true);
  t.truthy(bst.contains(1) === true);
  t.truthy(bst.contains(25) === true);
  t.truthy(bst.contains(5) === true);

  t.truthy(bst.contains(100) === false);
});

test("in order depth first traversal", t => {
  t.plan(1);

  const out = [];
  const exp = [0,2,4,6];
  const bst = new BinarySearchTree(0);

  bst.insert(1);
  bst.insert(2);
  bst.insert(3);

  bst.traverseDepthFirst_inOrder(el => out.push(el * 2));


  t.deepEqual(out, exp);
});

test("pre order depth first traversal", t => {
  t.plan(1);

  const out = [];
  const exp = [0,1,2,3];
  const bst = new BinarySearchTree(0);

  bst.insert(1);
  bst.insert(2);
  bst.insert(3);

  bst.traverseDepthFirst_preOrder(el => out.push(el));


  t.deepEqual(out, exp);
});

test("post order depth first traversal", t => {
  t.plan(1);

  const out = [];
  const exp = [3,2,1,0];
  const bst = new BinarySearchTree(0);

  bst.insert(1);
  bst.insert(2);
  bst.insert(3);

  bst.traverseDepthFirst_postOrder(el => out.push(el));


  t.deepEqual(out, exp);
});

test("removeMin deletes node with minimum value", t => {
  t.plan(1);

  const bst = new BinarySearchTree(11);

    bst.insert(7)
       .insert(5)
       .insert(9)
       .insert(3)
       .insert(6)
       .insert(15)
       .insert(13)
       .insert(20)
       .insert(12)
       .insert(14)
       .insert(18)
       .insert(25);


  bst.removeMin();

  t.truthy(bst.contains(3) === false);
});

test("removeMin works when min node has a right node", t => {
  t.plan(2);

  const bst = new BinarySearchTree(11);

  bst.insert(13)
     .insert(12)
     .insert(20);

  bst.removeMin();

  t.truthy(bst.contains(11) === false);
  t.truthy(bst.value === 13);
});

test("removeMin works when there are duplicates", t => {
  t.plan(2);

  const bst = new BinarySearchTree(0).insert(1).insert(1);

  bst.removeMin();
  t.truthy(bst.contains(1) === true);

  bst.removeMin();
  t.truthy(bst.contains(1) === false);
});

test("removeMax deletes node with maximum value", t => {
  t.plan(1);

  const bst = new BinarySearchTree(11);

    bst.insert(7)
       .insert(5)
       .insert(9)
       .insert(3)
       .insert(6)
       .insert(15)
       .insert(13)
       .insert(20)
       .insert(12)
       .insert(14)
       .insert(18)
       .insert(25);


  bst.removeMax();

  t.truthy(bst.contains(25) === false);
});

test("removeMax works when there are duplicates", t => {
  t.plan(2);

  const bst = new BinarySearchTree(0).insert(1).insert(1);

  bst.removeMax();
  t.truthy(bst.contains(1) === true);

  bst.removeMax();
  t.truthy(bst.contains(1) === false);
});

test("removeMax works when max node has a left node", t => {
  t.plan(2);

  const bst = new BinarySearchTree(11);

  bst.insert(7)
     .insert(5)
     .insert(6);

  bst.removeMax();

  t.truthy(bst.contains(11) === false);
  t.truthy(bst.value === 7);
});


test("remove node when it has no children", t => {
  t.plan(2);

  const bst = new BinarySearchTree(11);

  bst.removeNode(11);

  t.truthy(bst.contains(11) === false);
  t.truthy(bst.value === null);
});

test("remove leaf node from left side", t => {
  t.plan(1);

  const bst = new BinarySearchTree(11);

  bst.removeNode(11);

  bst.insert(8);
  bst.insert(3);

  bst.removeNode(3);

  t.truthy(bst.contains(3) === false);
});

test("remove leaf node from right side", t => {
  t.plan(1);

  const bst = new BinarySearchTree(11);

  bst.insert(12);
  bst.insert(13);

  bst.removeNode(13);

  t.truthy(bst.contains(13) === false);
});

test("remove node from left side when it has one child", t => {
  t.plan(1);

  const bst = new BinarySearchTree(11);

  bst.insert(7)
     .insert(5)
     .insert(9)
     .insert(3);


  bst.removeNode(5);

  t.truthy(bst.contains(5) === false);
});

test("remove node from right side when it has one child", t => {
  t.plan(2);

  const bst = new BinarySearchTree(5);

  bst.insert(2)
     .insert(-4)
     .insert(3)
     .insert(18)
     .insert(21)
     .insert(19)
     .insert(25);

  bst.removeNode(18);

  t.truthy(bst.contains(18) === false);
  t.truthy(bst.right.value === 21);
});

test("remove node from right side when it has two children", t => {
  t.plan(2);

  const bst = new BinarySearchTree(5);

  bst.insert(2)
     .insert(-4)
     .insert(3)
     .insert(12)
     .insert(9)
     .insert(21)
     .insert(19)
     .insert(25);

  bst.removeNode(12);

  t.truthy(bst.contains(12) === false);
  t.truthy(bst.right.value === 19);
});

test("remove node from left side when it has two children", t => {
  t.plan(2);

  const bst = new BinarySearchTree(6);

  bst.insert(2).insert(10).insert(0).insert(5).insert(4);

  bst.removeNode(2);

  t.truthy(bst.contains(2) === false);
  t.truthy(bst.left.value === 4);
});

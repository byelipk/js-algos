import test from "ava";
import Tree from "../data-structures/tree.js";

test("constructor", t => {
  t.plan(1);

  const tree = new Tree(10);

  t.truthy(tree.value === 10);
});

test("addChild", t => {
  t.plan(1);

  const tree = new Tree(10);

  tree.addChild(20);
  tree.addChild(30);
  tree.addChild(40);

  t.truthy(tree.children.length === 3);
});

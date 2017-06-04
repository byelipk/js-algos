import test from "ava";
import LinkedList from "../data-structures/linked-list.js";

test('it works', t => {
  t.plan(1);
  t.pass();
});

test('constructor', t => {
  t.plan(2);

  const list = new LinkedList(10);

  t.truthy(list.head.value === 10);
  t.truthy(list.tail.value === 10);
});

test('appendToTail', t => {
  t.plan(3);

  const list = new LinkedList(10);

  const node = list.appendToTail(20);

  t.truthy(list.head.value === 10);
  t.truthy(list.head.next === node);
  t.truthy(list.tail === node);
});

test('remove', t => {
  t.plan(2);

  const list = new LinkedList(10);

  let n1 = list.appendToTail(20);
  let n2 = list.appendToTail(30);

  let removed = list.remove(n1);

  t.truthy(removed === n1);
  t.truthy(list.head.next === n2);
});

test('pop', t => {
  t.plan(2);

  const list = new LinkedList(10);

  let n1 = list.appendToTail(20);
  let n2 = list.appendToTail(30);

  const popped = list.pop();

  t.truthy(popped === n2);
  t.truthy(list.tail === n1);
});

test('findNode', t => {
  t.plan(1);

  const list = new LinkedList(10);

  list.appendToTail(20);
  list.appendToTail(30);

  t.truthy(list.findNode(20).value === 20);
});

test('insertBefore', t => {
  t.plan(2);

  const list = new LinkedList(10);

  const node = list.insertBefore(list.head, 50);

  t.truthy(list.head.value === 50);
  t.truthy(list.tail.value === 10);
});

test('removeBefore', t => {
  t.plan(1);

  const list = new LinkedList(10);

  const n1 = list.appendToTail(20);
  const n2 = list.appendToTail(30);

  const removed = list.removeBefore(list.tail);

  t.truthy(removed === n1);
});

test('cannot removeBefore head', t => {
  t.plan(1);

  const list = new LinkedList(10);

  const removed = list.removeBefore(list.head);

  t.truthy(removed === undefined);
});

test('removeHead', t => {
  t.plan(3);

  const list = new LinkedList(10);

  const removed = list.removeHead();

  t.truthy(removed.value === 10);
  t.truthy(list.head.value === undefined);
  t.truthy(list.tail.value === undefined);
});

test('insertHead', t => {
  t.plan(2);

  const list = new LinkedList(10);

  const orig = list.head;
  const node = list.insertHead(100);

  t.truthy(list.head === node);
  t.truthy(list.tail === orig);
});

test('removeAfter', t => {
  t.plan(1);

  const list = new LinkedList(10);

  const n1 = list.appendToTail(20);
  const n2 = list.appendToTail(30);

  t.truthy(list.removeAfter(n1) === n2);
});

test('removeAfter', t => {
  t.plan(1);

  const list = new LinkedList(10);

  t.truthy(list.removeAfter(list.tail) === undefined);
});

test('insertAfter', t => {
  t.plan(3);

  const list = new LinkedList(10);

  const n1 = list.insertAfter(list.head, 20);

  t.truthy(list.tail === n1);

  const n2 = list.insertAfter(list.head, 30);

  t.truthy(list.head.next === n2);
  t.truthy(n2.next === list.tail);
});


test('it implements foreach interface', t => {
  t.plan(1);

  const list = new LinkedList(10);
  const output = [];

  list.forEach((el) => {
    output.push(el.value);
  });

  t.truthy(output.length === 1);
});

import test from 'ava';
import Stack from '../stack2.js';

test('it works', t => {
  t.plan(1);
  t.pass();
});

test('it implements the push interface', t => {
  t.plan(1);

  const stack = new Stack();

  t.is(typeof(stack.push), "function");
});

test('pushing onto stack returns count', t => {
  t.plan(2);

  const stack = new Stack();

  t.truthy(stack.push("Hello") === 1);
  t.truthy(stack.count() === 1);
});

test('pushing onto stack updates count', t => {
  t.plan(1);

  const stack = new Stack();

  stack.push("Hello");

  t.truthy(stack.count() === 1);
});

test('it implements the pop interface', t => {
  t.plan(1);

  const stack = new Stack();

  t.is(typeof(stack.pop), "function");
});

test('popping stack returns value', t => {
  t.plan(1);

  const stack = new Stack();

  stack.push("Hello");

  t.truthy(stack.pop() === "Hello");
});

test('popping stack removes element', t => {
  t.plan(1);

  const stack = new Stack();

  stack.push("Hello");
  stack.pop();

  t.truthy(stack.count() === 0);
});

test('it implements the peek interface', t => {
  t.plan(1);

  const stack = new Stack();

  t.is(typeof(stack.peek), "function");
});

test('peeking returns element most recently added to stack', t => {
  t.plan(1);

  const stack = new Stack();

  stack.push("Hello");

  t.truthy(stack.peek() === "Hello");
});

test('peeking does not remove element', t => {
  t.plan(1);

  const stack = new Stack();

  stack.push("Hello");
  stack.peek();

  t.truthy(stack.count() === 1);
});

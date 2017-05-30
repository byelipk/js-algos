import test from 'ava';
import { Stack, MinStack } from '../stack2.js';

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

test('the stack can overflow', t => {
  t.plan(1);

  const stack = new Stack(1);

  stack.push("Hello");

  t.truthy(stack.push("Hello") === "Max capacity already reached. Remove element before adding a new one.");
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

test('peeking several times works', t => {
  t.plan(1);

  const stack = new Stack();

  stack.push("Hello");
  stack.push("Goodbye");
  stack.peek();

  t.truthy(stack.peek() === "Goodbye");
});

test('MinStack implements the min interface', t => {
  t.plan(1);

  const stack = new MinStack();

  t.is(typeof(stack.min), "function");
});

test('MinStack#min returns the minimum element in the stack', t => {
  t.plan(9);

  const stack = new MinStack();

  stack.push(10);
  stack.push(5);
  stack.push(-2);

  t.truthy(stack.min() === -2);

  stack.pop();

  t.truthy(stack.min() === 5);
  t.truthy(stack.count() === 2);

  stack.pop();

  t.truthy(stack.min() === 10);
  t.truthy(stack.count() === 1);

  stack.pop();

  t.truthy(stack.min() === undefined);
  t.truthy(stack.count() === 0);

  stack.push(1)

  t.truthy(stack.min() === 1);
  t.truthy(stack.count() === 1);
});

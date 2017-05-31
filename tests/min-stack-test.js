import test from 'ava';
import MinStack from '../min-stack.js';

test('it works', t => {
  t.plan(1);
  t.pass();
});

test('push returns count of items on stack', t => {
  t.plan(3);

  const stack = new MinStack();

  t.truthy(stack.push(1) === 1);
  t.truthy(stack.push(1) === 2);
  t.truthy(stack.push(1) === 3);
});

test('pop returns value from top of stack', t => {
  t.plan(2);

  const stack = new MinStack();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  const popped = stack.pop();

  t.truthy(popped === 3);
  t.truthy(stack.count() === 2);
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

import test from 'ava';
import StackQueue from '../data-structures/stack-queue.js';

test('it works', t => {
  t.plan(1);
  t.pass();
});

test('enqueue returns count of input stack', t => {
  t.plan(1);

  const q = new StackQueue();

  t.truthy(q.enqueue(100) === 1);
});

test('dequeue returns first item in queue', t => {
  t.plan(1);

  const q = new StackQueue();

  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);

  t.truthy(q.dequeue() === 10);
});

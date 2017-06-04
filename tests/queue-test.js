import test from 'ava';
import Queue from '../data-structures/queue.js';

test('it works', t => {
  t.plan(1);
  t.pass();
});

test('enqueue returns count of items in queue', t => {
  t.plan(1);

  const q = new Queue();
  const count = q.enqueue(10);

  t.truthy(count === 1);
});

test('queue overflow', t => {
  t.plan(1);

  const q = new Queue(1);

  q.enqueue(10);
  const error = q.enqueue(10);

  t.truthy(error === "Max capacity already reached. Remove element before adding a new one.");
});

test('first in, first out', t => {
  t.plan(2);

  const q = new Queue();

  q.enqueue(10);
  q.enqueue(100);

  const value = q.dequeue();

  t.truthy(value === 10);
  t.truthy(q.count() === 1);
});

test('peek returns oldest element in queue', t => {
  t.plan(1);

  const q = new Queue();

  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);

  t.truthy(q.peek() === 10);
});

test('contains finds value already in the queue', t => {
  t.plan(1);

  const q = new Queue();

  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);

  t.truthy(q.contains(20) === true);
});

test('until returns number of dequeues until value', t => {
  t.plan(2);

  const q = new Queue();

  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);

  t.truthy(q.until(30) === 3);
  t.truthy(q.until(10) === 1);
});

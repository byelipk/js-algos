const Stack = require("./stack.js").Stack;

// QUEUE
//
// Abstract data type
// FIFO - First in, first out
// Collection of elements with enqueue and dequeue operations.
// Note that there is a natural order. Elements are removed in the reverse
// order of their addition.
//
//
//
// *** Operations:
//
// stackQueue.enqueue(value)
// => count of queue
// add value to collection
//
// stackQueue.dequeue()
// => oldest element added collection
// Remove item so that it is no longer in collection
//
// stackQueue.peek()
// => oldest element added collection
// Similiar to dequeue, but do not remove element from collection
//
// stackQueue.count()
// => number of elements in queue
//

class StackQueue {

  constructor(capacity) {
    this._stackIn  = new Stack(capacity);
    this._stackOut = new Stack(capacity);
  }

  enqueue(value) {
    return this._stackIn.push(value);
  }

  dequeue() {
    // We only sync the queues when we need to pop values and
    // we have nothing in the out queue.
    if (this._stackOut.count() === 0) { this._musicalChairs(); }
    return this._stackOut.pop();
  }

  peek() {
    return this._stackIn.peek();
  }

  count() {
    return this._stackIn.count();
  }

  // NOTE
  // For stack-queue to work we need a mechanism for transfering
  // all the elements from the input stack into the output stack
  // in the correct order.
  _musicalChairs() {
    while (this._stackIn.count() > 0) {
      this._stackOut.push(this._stackIn.pop());
    }
  }
}

module.exports = StackQueue;

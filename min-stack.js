const Stack = require("./stack2.js").Stack;


// *** Operations:
//
// minStack.push(value)
// => count of stack
// add value to collection
//
// minStack.pop()
// => most recent element added collection
// Remove item so that it is no longer in collection
//
// minStack.peek()
// => most recent element added collection
// Similiar to pop, but do not remove element from collection
//
// minStack.count()
// => number of elements in stack
//
//
// *** Additional Exercises:
//
// Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
// minStack.push(value)
// => "Max capacity already reached. Remove element before adding a new one."
//
// Create a contains method to check if a value is in the stack:
// minStack.contains('findme')
// => true/false
// What's the time complexity?
//
// Create an until method to get the number of pops until you get to a certain value:
// stack values - (first)2-5-7-3-6-9(last)
// minStack.until(7)
// => 4
// What's the time complexity?



class MinStack {

  constructor(capacity) {
    this._capacity = capacity || Infinity;
    this._count    = Number(0);
    this._storage  = new Object;
    this._minStack = new Stack(capacity);
  }

  push(value) {
    if (this._count < this._capacity) {
      if (this._minStack.peek() < value) {
        this._minStack.push(this._minStack.peek());
      }
      else {
        this._minStack.push(value);
      }
      this._storage[this._count++] = value;
      return this.count();
    }

    return "ERROR!";
  }

  pop() {
    // Retrieve the value we want to remove from the stack
    const value = this._storage[this._count - 1];

    // Remove the key/value from our storage mechanism
    delete this._storage[this._count--];

    // Remove the value from the min stack if appropriate
    if (this._minStack.peek() === value) {
      this._minStack.pop();
    }

    // Give the value back to the user
    return value;
  }

  count() {
    return this._count;
  }

  min() {
    // O(1) complexity
    return this._minStack.peek();
  }
}

module.exports = MinStack;

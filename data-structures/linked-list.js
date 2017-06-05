/*
LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.

*** Operations:
** Part 1
myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in

* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the
very end. How would you do that with your current implementation? How can you
modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list

** Part 2
Now let's think about creating insertBefore and removeBefore methods for the
nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation
of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we
can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in

*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list
Reimplement stack and queue data structures using linked lists.
 */


// PART 1

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) {
    console.log('Must provide value for first node');
  }

  this.head = new Node(headValue);
  this.tail = this.head;
}

LinkedList.prototype.forEach = function(callback) {
  let parent = this.head;

  while (parent) {
    callback(parent);
    parent = parent.next
  }
};
// Time complexity: O(n)

LinkedList.prototype.print = function() {
  let result = [];

  this.forEach(el => result.push(el.value));

  console.log(result.join(", "));
};
// Time complexity:

LinkedList.prototype.insertAfter = function(node, value) {
  let oldNext = node.next;
  let newNext = new Node(value);

  node.next = newNext;
  newNext.next = oldNext;

  if (this.tail === node) this.tail = newNext;

  return newNext;
};
// Time complexity: O(1)

LinkedList.prototype.removeAfter = function(node) {
  if (node.next) {
    return this.remove(node.next);
  }
};
// Time complexity: O(n)

LinkedList.prototype.insertHead = function(value) {
  const node = new Node(value);
  const head = this.head;

  node.next = head;
  this.head = node;

  return this.head;
};
// Time complexity: O(1)

LinkedList.prototype.removeHead = function() {
  const head = this.head;

  if (head.next) {
    this.head = head.next;
  }
  else {
    this.head = new Node();
    this.tail = this.head;
  }

  return head;
} // Time complexity: O(1)

LinkedList.prototype.findNode = function(value) {
  let parent = this.head;

  while (parent.next && parent.next.value !== value) {
    parent = parent.next;
  }

  return parent.next;
};
// Time complexity: O(n)

LinkedList.prototype.appendToTail = function(value) {
  const node = new Node(value);

  this.tail.next = node;
  this.tail = node;

  return node;
};
// Time complexity: O(1)

LinkedList.prototype.pop = function() {
  let parent = this.head;

  while (parent.next && parent.next !== this.tail) {
    parent = parent.next;
  }

  const tail = this.tail;

  this.tail = parent;

  return tail;
}
// Time complexity: O(n)

LinkedList.prototype.remove = function(node) {
  let parent = this.head;

  while (parent.next && parent.next !== node) {
    parent = parent.next;
  }

  parent.next = node.next;

  return node;
}
// Time complexity: O(n)

// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  let parent = this.head;

  while (parent.next && parent.next !== node) {
    parent = parent.next;
  }

  const newNode = new Node(value);

  newNode.next = parent;

  if (parent === this.head) {
    this.head = newNode;
  }

  return newNode;
};
// Time complexity: O(n)

LinkedList.prototype.removeBefore = function(node) {
  let parent = this.head;
  let prev   = null;

  if (node === this.head) return;

  while (parent.next && parent.next !== node) {
    prev = parent;
    parent = parent.next;
  }

  prev.next = parent.next;

  return parent;
};
// Time complexity: O(n)


const list = new LinkedList(10);

list.appendToTail(20);
list.appendToTail(30);

list.print();


/*
*** Exercises:
1. Implement a stack using a linked list.
2. Implement a queue using a linked list.
3. Write a method that remove duplicates from an unsorted linked list. What is
   the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?
4. Reverse a linked list. Do not use any additional storage structures.
5. Find the kth to last element of a singly linked list.
6. Detect if a linked list has a loop.
7. Check if a linked list is a palindrome.
8. Given two linked lists that represent numbers, return a linked list that
   represents the sum of those numbers:

  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)
 */

 module.exports = LinkedList;

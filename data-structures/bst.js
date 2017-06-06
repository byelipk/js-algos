/*
BINARY SEARCH TREES

Abstract data type

A binary search tree is a tree with the additional constraints:

- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the
  value of the node
- all the values in the right subtree of a node are greater than the value of
  the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left
branch, then current node, than right branch)

Note: In-Order traversal is most common type for binary trees. For binary
search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the
current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is
useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes
have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and
the maximum height differ by no more than 1. The height for a branch is the
number of levels below the root.


*** Additional Exercises:

A binary search tree was created by iterating over an array and inserting each
element into the tree. Given a binary search tree with no duplicates, how many
different arrays would result in the creation of this tree.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left) this.left.insert(value);
    else this.left = new BinarySearchTree(value);
  }
  else {
    if (this.right) this.right.insert(value);
    else this.right = new BinarySearchTree(value);
  }
  return this;
};
// Time complexity: O(log n)

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) return true;

  if (value <= this.value) {
    if (this.left) { return this.left.contains(value); }
    else           { return false; }
  }
  else {
    if (this.right) { return this.right.contains(value); }
    else            { return false; }
  }

  return false;
};
// Time complexity: O(log n)

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  if (this.left)  this.left.traverseDepthFirst_inOrder(fn);
  fn(this.value);
  if (this.right) this.right.traverseDepthFirst_inOrder(fn);
};
// Time complexity: O(log n)

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  fn(this.value);
  if (this.left)  this.left.traverseDepthFirst_preOrder(fn);
  if (this.right) this.right.traverseDepthFirst_preOrder(fn);
};
// Time complexity: O(log n)

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  if (this.left)  this.left.traverseDepthFirst_postOrder(fn);
  if (this.right) this.right.traverseDepthFirst_postOrder(fn);
  fn(this.value);
};
// Time complexity: O(log n)

BinarySearchTree.prototype.checkIfFull = function() {
  // implement me...
};
// Time complexity:

BinarySearchTree.prototype.checkIfBalanced = function() {
  // implement me...
};
// Time complexity:

BinarySearchTree.prototype.find = function(value, parent) {
  if (this.value === value) return {node: this, parent: parent};

  if (value <= this.value) {
    if (this.left) { return this.left.find(value, this); }
  }
  else {
    if (this.right) { return this.right.find(value, this); }
  }
};

BinarySearchTree.prototype.min = function(parent) {
  if (!this.left) return {node: this, parent: parent};

  return this.left.min(this);
};

BinarySearchTree.prototype.max = function(parent) {
  if (!this.right) return {node: this, parent: parent};

  return this.right.max(this);
};

BinarySearchTree.prototype.removeNode = function(value) {
  // Search for the node to remove
  const result = this.find(value);
  const node   = result.node;
  const parent = result.parent;

  // If the node is found, run the remove algorithm
  if (node) {

    // Case 1: Node to be removed has no children
    //
    // When a node has no children that means it could
    // either be a leaf node or a root node. Leafs nodes
    // have a parent. To properly remove a leaf node,
    // we need to check if the node is to the left or to
    // the right of the parent. Then we need to set that
    // side to ``null``.
    //
    // When we're removing a root node, we set the value to
    // ``null``.
    if (!node.left && !node.right) {
      if (parent) {
        if      (parent.left === node)  { parent.left = null; }
        else if (parent.right === node) { parent.right = null; }
        else {
          console.error("ERROR: node is not child of parent.");
        }
      }
      else {
        this.value = null;
      }
    }

    // Case 2: Node to be removed has one child
    //
    // When a node has one child, we need to check if the
    // child is on the left side or the right side.
    //
    // If there is a parent node, we can set the parent's
    // left or right property to the left or right property
    // of the node we want to remove.
    //
    // If this is a root node, we need to reset the value
    // and reset either the left or right property.
    else if (node.left && !node.right) {
      if (parent) {
        parent.left = node.left;
      }
      else {
        this.value = this.left.value;
        this.left = this.left.left;
      }
    }

    else if (!node.left && node.right) {
      if (parent) {
        parent.right = node.right;
      }
      else {
        this.value = this.right.value;
        this.right = this.right.right;
      }
    }

    // Case 3: Node to be removed has two children
    else if (node.left && node.right) {
      // Find minimum value in right subtree
      const result = node.right.min();
      const minNode = result.node;
      const minNodeParent = result.parent;

      // Replace value of node to be removed with found minimum
      if (node.value < parent.value) {
        parent.left = minNode;
      }
      else {
        parent.right = minNode;
      }

      // Apply remove to the right subtree to remove duplicate
      minNodeParent.left = null;

      // Balance the minNode
      minNode.left = node.left;
      minNode.right = minNodeParent;
    }

    else {
      console.error("ERROR: Problem removing node");
    }

    return this;
  }
};
// Time complexity:

BinarySearchTree.prototype.removeMin = function(parent) {
  // If there are no more left or right nodes, we've found the minimum.
  if (!this.left && !this.right) {
    if (parent) { parent.left = null; }
    else        { this.value = null; }
  }

  // If there are no more left nodes, but there's a right node,
  // we've found the minimum, but we need reorganize the tree.
  else if (!this.left && this.right) {
    if (parent) { parent.left = this.right; }
    else {
      this.value = this.right.value;
      this.right = this.right.right;
    }
  }

  // If there is a left, keep recursing through the tree.
  if (this.left) { this.left.removeMin(this); }
};
// Time complexity:

BinarySearchTree.prototype.removeMax = function(parent) {
  // If there are no more right or left nodes, we've found the maximum.
  if (!this.left && !this.right) {
    if (parent) { parent.right = null }
    else        { this.value = null }
  }

  // If there are no more right nodes, but there's a left node, we've
  // found the maximum, but need to reorganize the tree.
  else if (this.left && !this.right) {
    if (parent) { parent.right = this.left }
    else {
      this.value = this.left.value;
      this.left  = this.left.left;
    }
  }

  // If there's a right node, keep recursing through the tree.
  if (this.right) this.right.removeMax(this);
};
// Time complexity:


// const bst = new BinarySearchTree(6);
// bst.insert(2).insert(10).insert(19).insert(0).insert(5).insert(4);

const bst = new BinarySearchTree(5);
bst.insert(2).insert(-4).insert(3).insert(12).insert(9) .insert(21).insert(19).insert(25);

module.exports = BinarySearchTree;

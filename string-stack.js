// The task is to implement a stack data structure using
// a javascript string as the storage mechanism.
let Stack = function StackFn() {
  this.storage    = "";
  this.delimiter  = "$";
  this.count = 0;

  incr() {
    this.count = this.count + 1;
  }

  decr() {
    this.count = this.count - 1;
  }
}

// Add new data to the end of our storage mechanism
Stack.prototype.push = function (val) {
  this.storage = this.storage.concat(this.delimiter, val);
  this.incr()
};

// Retrieve the data which was last pushed
Stack.prototype.pop = function () {
  let indexOfLastDelimeter = this.storage.lastIndexOf(this.delimiter);

  // Pull value from storage
  let value = this.storage.substr(indexOfLastDelimeter + 1,
    this.storage.length - indexOfLastDelimeter);

  // Clean storage
  this.storage = this.storage.substr(0, indexOfLastDelimeter);

  this.decr();

  return value;
};

Stack.prototype.size = function () {
  return this.count;
};

let weekleyMenu = new Stack();

weekleyMenu.push("RedBeans");
weekleyMenu.push("make");
weekleyMenu.push("me");
weekleyMenu.push("happy");

weekleyMenu.pop()
weekleyMenu.pop()
weekleyMenu.pop()
weekleyMenu.pop()

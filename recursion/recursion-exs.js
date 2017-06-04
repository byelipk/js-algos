//1. Write a function that loops through the numbers n down to 0.
//   If you haven't done so try using a while loop to do this.
function loopA(n) {
  while(n > 0) {
    console.log(n);
    n--;
  }
}

console.log("LOOP A START");
loopA(10);
console.log("LOOP A END");
console.log("\n");

//2. Next, try looping just like above except using recursion
function loopB(n) {
  if (n === 0) {
    return "Done"
  }
  else {
    console.log(n);
    return loopB(n - 1);
  }
}

console.log("LOOP B START");
loopB(10);
console.log("LOOP B END");
console.log("\n");

//3. Write a function 'exponent' that takes two arguments base, and expo,
//   uses a while loop to return the exponenet value of the base.
function exponent(base, exp) {
  // Assuming only positive exponents
  let result = base;
  let counter = exp;

  while (counter > 1) {
    result = result * base;
    counter--;
  }
  return result;
}

console.log("exponent START");
console.log(exponent(2,2));
console.log(exponent(2,4));
console.log(exponent(2,10));
console.log("exponent END");
console.log("\n");

//4. Write a function 'RecursiveExponent' that takes two arguments base, and
//   expo, recursively returns exponent value of the base.
function recursiveExponent(base, exp) {
  // We always want to multiply the base value by the accumulated value.
  // To do that recursively I needed to use an inner function.
  // The inner function has access to the base value
  // because of closure.
  function recurse(result, end) {
    if (end <= 1) {
      return result;
    }
    else {
      return recurse(result * base, end - 1);
    }
  }

  return recurse(base * base, exp - 1);
}

console.log("recursiveExponent START");
console.log(recursiveExponent(2,2));
console.log(recursiveExponent(2,4));
console.log(recursiveExponent(2,10));
console.log("recursiveExponent END");
console.log("\n");

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and
//   num', and multiplies each arr value by num and returns an array of
//   the values.
function iterativeMultiplier(arr, num) {
  let results = [];

  for (var i = 0; i < arr.length; i++) {
    results.push(arr[i] * num);
  }

  return results;
}

console.log("iterativeMultiplier START");
console.log(iterativeMultiplier([1,2,3], 2));
console.log("iterativeMultiplier END");
console.log("\n");

function recursiveMultiplier(arr, num) {
  function recurse(acc) {
    if (acc.length === arr.length) {
      return acc;
    }
    else {
      return recurse(acc.concat(arr[acc.length] * num));
    }
  }

  return recurse([]);
}

console.log("recursiveMultiplier START");
console.log(recursiveMultiplier([1,2,3], 2));
console.log("recursiveMultiplier END");
console.log("\n");

//6. Write a function 'recursiveReverse' that takes an array and uses recursion
//   to return its contents in reverse

function recursiveReverse(arr) {
  function recurse(acc, end) {
    if (acc.length === arr.length) {
      return acc;
    }
    else {
      return recurse(acc.concat(arr[end]), end - 1);
    }
  }

  // NOTE: The two pieces of state we need to make this function
  //       execute properly are an empty array and the index
  //       position of the ``furthermost`` element.
  return recurse([], arr.length - 1);
}

console.log("recursiveReverse START");
console.log(recursiveReverse([1,2,3], 2));
console.log("recursiveReverse END");
console.log("\n");

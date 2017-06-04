function computeFactorialIter(num) {
  let result = 1;

  for (var i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

function computeFactorialRec(result, num) {
  if (num === 0) {
    return result; // base case
  }
  else {
    result *= num; // multiply
    num--;         // decrement

    return computeFactorialRec(result, num); // recurse
  }
}

function computeFactorialRec2(num) {
  // What's my base case?
  if (num === 1) {
    return 1;
  }
  // What's the work I'm trying to do?
  else {
    return num * computeFactorialRec2(num - 1);
  }
}


// Recursive loop
function runRecursiveLoop(start, end) {
  function recurse(i) {
    console.log(i);
    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

// Self running loop
function runLoopAsMyself(i, end) {
  console.log(i);
  if (i < end) {
    runLoopAsMyself(i + 1, end);
  }
}

// Five factorial => 5! => 5*4*3*2*1
console.log(computeFactorialIter(5));
console.log(computeFactorialRec(1, 5));

// Six factorial => 6! => 6*5*4*3*2*1
console.log(computeFactorialRec(1, 6));
console.log(computeFactorialRec2(6));

// Recursive looping
runRecursiveLoop(1, 10);
runLoopAsMyself(0, 10);

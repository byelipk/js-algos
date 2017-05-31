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

// Five factorial => 5! => 5*4*3*2*1
console.log(computeFactorialIter(5));
console.log(computeFactorialRec(1, 5));

// Six factorial => 6! => 6*5*4*3*2*1
console.log(computeFactorialRec(1, 6));

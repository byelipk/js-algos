// 1. Identify base cases
// 2. Identify recursive cases
// 3. Return where appropriate
// 4. Write procedures for each case that bring us closer to the base case(s)
function sayHi(n) {
  if (n === 0) {
    return "Done!"
  }
  console.log("HI!");
  return sayHi(n - 1);
}

console.log(sayHi(5));

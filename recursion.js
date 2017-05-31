function sayHi(n) {
  if (n === 0) {
    return "Done!"
  }
  console.log("HI!");
  return sayHi(n - 1);
}

console.log(sayHi(5));

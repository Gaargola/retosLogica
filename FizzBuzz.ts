for (let i = 0; i <= 100; i++) {
  let divisibleTree = i % 3 == 0;
  let divisibleFive = i % 5 == 0;
  if (divisibleTree && divisibleFive) {
    console.log("fizzbuzz");
  } else if (divisibleTree) {
    console.log("fizz");
  } else if (divisibleTree) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

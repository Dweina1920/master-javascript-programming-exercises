function isLessThan(num1, num2) {
  // your code here
  if (num1 < num2) {
    return `${num1} is less than ${num2}`;
  }
  return `${num2} is less than ${num1}`;
}
console.log(isLessThan(1, 4));
console.log(isLessThan(4, 1));

function isGreaterThan(num1, num2) {
  // your code here
  if (num1> num2){
   return `${num1} is greater than ${num2}`
  }
  return `${num2} is greater than ${num1}`
}
console.log(isGreaterThan(1,4))
console.log(isGreaterThan(4,1))
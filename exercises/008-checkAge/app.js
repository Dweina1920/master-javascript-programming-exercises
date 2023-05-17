function checkAge(name, age) {
  // your code here
  if (age>=21){
    return `Welcome ${name}.`
  }else{
    return `${name} go home.`
  }
}

console.log(checkAge("dina", 29))
console.log(checkAge("dina", 20))
function removeProperty(obj, key) {
  // your code here
  delete obj[key]
}


let obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
removeProperty(obj, 'age');
console.log(obj.age);
console.log(obj)

function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}
let myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // --> true
let my = {}
addProperty(my, 'hola')
console.log(my.hola)

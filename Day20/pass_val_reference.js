
/**Pass by reference */
let person = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  
    // reference another object
    obj = { name: 'Jane', age: 22 };
  }
  
  increaseAge(person);
  
  console.log(person);
  /**pass by value */
  function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100 
console.log(y); // 10 -- no change
const array = ['yellow','pink','blue','red','black'];
const array1 = ['white','green'];

// concat array

const array2 = [array. concat(array1)];
console.log(array2);
// using splice
console.log(array.splice(2,1));
console.log(array);

// using slices
const array3 = array.slice(3);
console.log(array +array3 );
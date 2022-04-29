// const belowValue = (currentValue) => currentValue > 10;

//  let values = [19, 20, 30, 45, 60, 100];
//  console.log(values.every(belowValue));

// ====  every function is compare all condition 
// => if one condition is false then writen boolen value (false)

//  let a = (condition) => condition>2;
//  let list = [1,2,3,4,5,6]
//  console.log(list.every(a))


//  const arra = [10,20,30,40,50,60]
//  function select(mark){
//      return mark>0;

//  }
//  console.log(arra.every(select))
     
 let select=(mark) => mark>=10;
 const arra1 = [10,20,30,40,50,60]
 console.log(arra1.every(select))
//........................forEach().....................
let lang = ['java','python','react','angular','css','ruby'];
lang.forEach(myFunction);
function myFunction(n1)
{
  if(n1 == 'java' || n1 =='python' || n1== 'ruby')
  {
     
      console.log(` ${n1}  is back end language`);
  }else if(n1=='react' || n1=='angular' || n1=='css')
  {
      console.log(` ${n1} is front end language`);
  }
}

let city= ['Baramati', 'Pune', 'Satara','Mumbai'];
city.forEach(myFunc);

function myFunc(item, index, arr) {
    arr[index] = 'Welcome to ' + item;
}
console.log(city);

//...............every()..............

let age =[10,50,25,63,44,35];

let check= age.every(checkAge)
console.log(check)

function checkAge(a)
{
   return a >= 18;

}

//...................filter().............
let age1 =[10,50,25,63,44,35];

let check1= age.filter(checkAge1)
console.log("Filter array===>"+check1)

function checkAge1(a)
{
   return a >= 18;

} 



let list=[2,4,9,7,1,5,11,45,78,62];

let l=list.filter(checkList)
console.log(l);
function checkList(num)
{
    if(num % 2 == 0)
    {
        return num;
    }
       
}
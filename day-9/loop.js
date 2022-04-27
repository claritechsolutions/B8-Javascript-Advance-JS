for(i=0 ; i <=10 ; i++)
{
    console.log(i);
    
}
let j=0;
while(j<=10)
{
           j++
           console.log(j)
}
let p = 0;
do {
  p += 1;
  console.log(p);
} while (p<=5)

let q=10;
do{
  console.log(q);
  q--;
}while(q>=1)


let counter=1;
let sum=0;
while(counter <=100){
  if(counter % 2==0){
    sum=sum+counter;
  }
   counter++;
}
console.log("sum of 1 to 100 even numbers===>" +sum);

console.log("....using continue........")
for(let r=0;r<=10;r++){
  if(r===2 || r===5){
    continue;
  }
  console.log(r);
}

console.log("....using break........")
for(let r=0;r<=10;r++){
  if( r===5){
   break ;
  }
  console.log(r);
}

console.log("....nested loop........")
for(let y=1;y<10;y++){
console.log(y);
for(z=1;z<3;z++){
  console.log('number'+z);
}
}



console.log(".....................")
let a =['','','',''];
console.log("Length of Array="+a.length);
let b =new Array(5);
console.log("Length of Array="+b.length);


localStorage.setItem("name","amruta")
localStorage.setItem("address","baramati")

sessionStorage.setItem("name","amruta")
sessionStorage.setItem("email","amruta@gmail.com")
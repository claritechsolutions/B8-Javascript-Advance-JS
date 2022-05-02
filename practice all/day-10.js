// let car =["Mhindra",'tata','MarutiSuzuki',"Ford"]
// car.forEach((up)=>{
//     const arr = up.toUpperCase();
//     console.log(arr)
// }) 

/*  Every function with variable*/
// let list = [2, 5, 12, 23, 35, 4, 75]
// list.every((value) => {
//     //let abc;
//     newArray = value > 1;
//     console.log(newArray)
// })

/*  Every function without variable*/

// let list1 = [2, 5, 12, 23, 35, 4, 75]
// list1.every((value) => {
//     let abc;
//     abc = value > 1;
//     console.log(abc)
// })

// list.filter((find)=>{
//     var abc;
//    abc= find>12;
//     console.log(abc)
// })


// list.filter((find) => {

//     if (find > 12) {
//         console.log(find)
//     }
// })

// sqr=[1,2,3,4,5,6,7,8,9]
// sqr.forEach((sqr) => {
//     let abc;
//     let xyz;
//     xyz = Math.pow(sqr,3);
//     abc = (sqr)*(sqr);
//     console.log("SQUARE----->",abc);
//     console.log("CUBE----->",xyz);

// })

// sqr=[1,2,3,4,5,6,7,8,9]
// sqr.forEach((abc) => {
//     //Math.pow(sqr,3);
//     newArray = (abc)*(abc);
//     console.log("SQUARE----->",newArray);
//    // console.log("CUBE----->",xyz);

// })
//const Newarray = [];

// names=["mayur","darshan"]
//         names.forEach((element) => {
//             Newarray = (element.toUpperCase());
//             console.log(Newarray);
//             //console.log(typeof(Newarray));
//            console.log() ;
//         })

names = ["mayur", "darshan", 1, 2, 3, 45, 6, 6, 7, 8, 9]
// names.push(2)
// console.log(names)
// names.shift();
// console.log(names)
// names.unshift(1);
// console.log(names)
// names.splice(5,2,654)
// console.log(names)
// let sl = names.slice(1, 5)
// console.log(sl)

// for(i=0;i<5;i++){
//     let a ='*';
// console.log(a)
// }

// let pattn = "";

// for (i = 0; i < 5; i++) {
//     for (j = 0; j < n; j++) {
//         if (i == 2 || j == 2) {
//             pattn += "*";
//         } else
//             pattn += " ";
//     }
//     pattn += " \n";
// }
// console.log(pattn);

/*Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
For example if you accept 025468 the output should be 0-254-6-8.*/






//console.log(noArray)
//console.log (typeof(noArray))
// var b=[];
// b = a.filter((value)=>{
//     (value%2==0)
//     if(value%2==0)
//     a.push("-")
// });
// console.log(b)


// noArray.forEach((value) => {
//     if (value % 2 == 0) {
//         var d = "";
//         d = a.indexOf(value);
//         newArray = a.push("-", a.indexOf(value))
//         console.log(a)
//     }


// })

// const a = "025468";
// let astr = a.toString();
// let no1Array = astr.split("");
// let b, c;
// no1Array.forEach((value) => {
//     if (value % 2 == 0) {

//         b = value;
//         c = no1Array.indexOf(b);
//         //k = insert(noArray, c, '-');

//     }
//    const d = no1Array.push("-",c);
//     console.log(d);

// })

/*
const a = '025468';
let astr = a.toString();
console.log(astr)
//let no1Array = astr.split("");
const no1Array=[astr[0]]

for (i = 1; i < astr.length; i++) {
    if (astr[i - 1] % 2 === 0 && astr[i] % 2 === 0) {
        no1Array.push("-",astr[i])
    }
    else{
        no1Array.push(astr[i])
    }
}
console.log(no1Array.join(""))
*/


/*Array Iteration*/
/*For each*/
const array1 = ['pen', 'pencil', 'rubber']
array1.forEach(element => 
    { console.log("element=>", element); }
)
/*every*/
const belowValue = (currentValue) => currentValue>18;
 let values = [8,7,6,4,20];
 console.log(values.every(belowValue));
 if (values.every(belowValue)) {
      console.log("can vote");
    } else {
      console.log("cannot vote");
    }
    /*destracting of array*/
    let array = {
          data: [
            {
              name: "Pratiksha",
              age: "21"
            },
            {
              name: "Mayuri",
              age: "21"
            },
            {
              name: "megha",
              age: "20"
            }
          ],
          page: "1",
          totalCount: '100',
          allUserData: "50000",
          abcd: "50000",
          def: "50000",
        };
        
        let { data, page, totalCount,allUserData,  } = array;
        console.log("data ==>", data);
        console.log("page ==>", page);
        console.log("totalCount ==>", totalCount);
        console.log("alluserData==>", allUserData);
        /*Array Map*/
        const numbers = [1, 4, 9];
        const roots = numbers.map((num) => Math.sqrt(num));
        console.log("squareroot==>" , roots);

        const test =[1,2,3];
        const square =test.map((x)=>x*2);
        console.log("sqaure==>" , square)
        /*filter*/
        const device = ["laptop","mob","tablet","watch"];
        const text =device.filter(word=> word.length>4)
        console.log(text);
        /* filter example 2*/
        const fruits =["apple","banana","grapes","mango","orange"]
        function myFunction(arr,test){
            return arr.filter(function(element)
            {
                return element.toLowerCase().indexOf(test.toLowerCase()) !== -1
            })
        }
        console.log(myFunction(fruits,'ap'));
        console.log(myFunction(fruits,'an'));
            
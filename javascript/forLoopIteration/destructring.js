/**
 * Destrcting of Array
 */
var array = {
    data: [{
            name: "dhanu",
            age: 25
        },
        {
            name: "madhuri",
            age: 25
        },
        {
            name: "anu",
            age: 23
        }
    ],
    page: [1, 2, 4, 5, 63, 2],
    totalCount: '100',
    allUserData: "50000",
    abcd: "50000",
    def: "50000",
};

let { data, page, totalCount, abcd } = array;


console.log("data ==>", data);
console.log("page ==>", page);
console.log("totalCount ==>", totalCount);
console.log("Abcd==>", abcd);

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// API for get requests
// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");
// // fetchRes is the promise to resolve
// // it by using.then() method
// fetchRes
// .then(res => res.json())
// .then(d => { console.log(d) })

//u can check it for any site from website it will not work in local
//fetch('https://www.google.com').then(a=>a.text()).then(console.log);

// //Post Request using Fetch
let options = {
    method: 'POST',
    body: JSON.stringify({
        title: 'payal mehare',
        body: 'Sr. Software Developer',
        userId: 30,
    }),
    headers: { 
        'content-type': 'application/json', 
    },
}
fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json()) //response and json are variables
    .then((json) => console.log(json));

//Put method to update a record
// let options1 = {
//     method : 'PUT',
//     body: JSON.stringify({
//         title:'payal wasankar',
//         body:'manager',
//         userId:30,
//     }),
//     headers:{
//         'content-type' : 'application/json',
//     },
// }
// fetch('https://jsonplaceholder.typicode.com/posts/2',options1)
// //.then((response)=>response.json())
// .then((json)=>console.log(json));
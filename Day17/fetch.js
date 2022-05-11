
/**from browser server */
// fetch('https://jsonplaceholder.typicode.com/users')
// //.then(response=> response.json())
// .then((response)=>{
//     return response.json();

// })
// // .then(result=>console.log(result))
// .then((result)=>{
//     console.log(result)
// })
/**from local file*/
// fetch('readme.text')
// .then((response)=>{
//     return response.text();

// })
// //.then(response=>response.text())
// .then((result)=>{
//     document.write(result)
// })
// //.then(result=>console.log(result))
fetch('https://jsonplaceholder.typicode.com/users')
//fetch('fetch.json')
    .then(fetch => fetch.json())

    .then((data) => {
        for (var i = 0; i < data.length; i++) {
            console.log(data)
            document.getElementById("demo").innerHTML +=(`<tr><td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].username}</td> 
            <td>${data[i].email}</td>
            <td>${data[i].address.city}</td></tr>`)
        }
        /**below is without table */
       // data[i].id +` Name : <strong> ${ data[i].name}</strong>`+` UserName : <strong>${ data[i].username}</strong>` + ` Email : <strong>${ data[i].email}</strong>` + ` Address :<strong> ${ data[i].address}</strong>` + "</br>" + "</br>";
       
    })

    
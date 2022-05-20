fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        for (i in json) {
            document.getElementById("details").innerHTML += (`<tr><td>${json[i].id}</td><td>${json[i].name}</td>
        <td>${json[i].username}</td>
        <td>${json[i].email}</td>
        <td>${json[i].address.city}</td></tr>`);
        }
    })


///*  read text file from local* /
// fetch("./try.txt")
//     .then((response) => {
//         return response.text();
//     })
//     .then((data) => { document.write(data); })
//     .catch((error) => { console.log('error', error); })


///*  Post method *//

// let options={
//     method:'POST',
//     body: JSON.stringify({
//         title: 'Anita',
//         body: 'Software Developer',
//         userId: 28,
//     }),
//     Headers: {
//         'Content-type': 'application/json',
//       },
// }

// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'Ankit Varia',
//       body: 'Sr. Software Developer',
//       userId: 24,
//     }),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//*   PUT method * //

let options1 = {
    method: 'PUT',
    body: JSON.stringify({
        title: 'Sonia Singh',
        body: 'Software Developer',
        userId: 24
    }),
    headers: {
        'Content-type': 'application/json',
    },
}

fetch('https://jsonplaceholder.typicode.com/posts/2', options1)
    .then((response) => response.json())
    .then((json) => console.log(json));

//* patch method *//

let options2 = {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'Arpita'
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts/5', options2)
      .then((response) => response.json())
      .then((json) => console.log(json));
    
      // * DELETE Method  *//
     
     let option3 = {
       method: 'DELETE',
     }
     
     fetch('https://jsonplaceholder.typicode.com/posts/5', option3)
       .then((response) => response.json())
       .then((json) => console.log(json));
     
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        for (i in json) {
            document.getElementById("details").innerHTML += (`<tr><td>${json[i].id}</td><td>${json[i].name}</td>
        <td>${json[i].username}</td>
        <td>${json[i].email}</td>
        <td>${json[i].address.city}</td></tr>`);
        }
    })

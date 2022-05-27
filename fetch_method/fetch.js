fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((result) => {
        for (i in result) {
            console.log(result);
            document.getElementById("result").innerHTML += (`<tr><td>${result[i].name}</td>
            <td>${result[i].username}</td>
            <td>${result[i].email}</td>
            <td>${result[i].address.city}</td></tr>`);
            // var name1 = result.filter(data => {
            //     return data.name;
            // });

        }
        // console.log("Filtered Name Array: ", name1);
    });
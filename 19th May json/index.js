function getinfo() {
    fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            for (i in json) {
                document.getElementById("details").innerHTML += (`<tr><td>${json[i].id}</td>
            <td>${json[i].name}</td>
        <td>${json[i].email}</td>
        <td>${json[i].address}</td>
        </tr>`);
            }
        })
}

function postinfo() {
    let options = {
        method: 'POST',
        body: JSON.stringify({
            id: 6,
            name: "Swapnali",
            email: "swapnaliP@gmail.com",
            address: "Mumbai"
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/employees', options)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function putinfo() {
    let options = {
        method: 'PUT',
        body: JSON.stringify({
            id: 4,
            name: "Tejas",
            email: "Tejas19@gmail.com",
            address: "Kolkata"
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/employees/4', options)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function patchinfo() {
    let options = {
        method: 'PATCH',
        body: JSON.stringify({
            name: "Ketan",
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/employees/4', options)
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function deleteinfo() {
    let option = {
        method: 'DELETE',
    }

    fetch('http://localhost:3000/employees/6', option)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

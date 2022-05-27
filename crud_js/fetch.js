function getStudent() {
    fetch(' http://localhost:3000/students')
        .then(response => response.json())
        .then((result) => {
            let tabledata = "";
            result.map((values) => {
                tabledata += `<tr>
            <td>${values.id}</th>
            <td>${values.name}</td>
            <td>${values.branch}</td>
            <td>${values.city}</td>
            </tr>`;});
            document.getElementById("tablebody").innerHTML = tabledata;})
        .catch(error => console.error(`Can't Fetch Data ${error}`));
}

function createStudent() {
    let options1 = {
        method: 'POST',
        body: JSON.stringify({
            "id": document.getElementById("id").value,
            "name": document.getElementById("name").value,
            "branch": document.getElementById("branch").value,
            "city": document.getElementById("city").value,
        }),
        
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/students', options1)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function updateStudent() {
    let options2 = {
        method: 'PUT',
        body: JSON.stringify({
            "id": document.getElementById("id").value,
            "name": document.getElementById("name").value,
            "branch": document.getElementById("branch").value,
            "city": document.getElementById("city").value,
        }),
        
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/students/1', options2)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function deleteStudent() {

    let option3 = {
      method: 'DELETE'
    }

deleteProcess=()=>{
    const indexnum = document.getElementById("delete").value;
    fetch(`http://localhost:3000/students/${indexnum}`, option3)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  deleteProcess()
}



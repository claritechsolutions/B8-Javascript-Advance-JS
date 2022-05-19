function getStudent() {
    fetch("http://localhost:3000/student")
        .then(response => response.json())
        // .then(result=>console.log(result))
        .then((result) => {
            console.log(result)

            for (let i = 0; i < result.length; i++) {
                console.log(result);
                document.getElementById("result").innerHTML +=
                    (`<tr><td> ${result[i].id}</td>
        <td>${result[i].Name}</td>
        <td>${result[i].Course}</td>
        <td>${result[i].City}</td>
        </tr> `)
            }

        })
}
//getStudent();
function addData() {
    let options1 = {
        method: 'POST',
        body: JSON.stringify({
            "id": 6,
            "Name": "Megha",
            "Course": "B.Tech",
            "City": "Satara"
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/student', options1)
        .then((response) => response.json())
        .then((json) => console.log(json));

}
function patchData(){
    let options2 = {
        method: 'PATCH',
        body: JSON.stringify({
            "City": "Pune"
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/student/2', options2)
        .then((response) => response.json())
        .then((json) => console.log(json));
}
function deleteData(){
    let option3 = {
        method: 'DELETE',
      }
      
      fetch('http://localhost:3000/student/2', option3)
        .then((response) => response.json())
        .then((json) => console.log(json));
}
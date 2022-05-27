fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) =>
  { 
      return response.json();
  })
  .then((result) => {
  for(let i in result){
    console.log(result);
    document.getElementById("result").innerHTML += (`<tr><td>${result[i].id}</td>
    <td>${result[i].name}</td>
    <td>${result[i].email}</td>
    <td>${result[i].company.name}</td>
    <td>${result[i].phone}</td></tr>`)
}
});

import React, { useState } from "react";

const Form = () => {
    const initName = {
        firstName: "",
        lastName: ""
    }
    const [name, setName] = useState(initName)

var initialarrayItems = [
    {
        fName: "Amita",
        lName: "Soalanki",
        designations: ["Software Developer", "Manager", "Analyst"]
    },
    {
        fName: "Smith",
        lName: "Wilson",
        designations: ["Software Developer", "Partner", "Analyst"]
    },
    {
        fName: "Ayan",
        lName: "Shaikh",
        designations: ["Engineer", "Manager", "Analyst"]
    },
    {
        fName: "Ashwin",
        lName: "Jain",
        designations: ["Software Developer", "Manager", "Director"]
    }
]
const [items, setItems] = useState(initialarrayItems)
const addItem = () => {
  let data = [...items];

  let anotherName = {
    id: 1,
    name: 'Gorakh',
    salary: 100000,
    designation: 'CEO'
  }
  data.push(anotherName)
  console.log("data", data);
  // 
  setItems(data)
}

const testFunction = () => {
    items.map((item, index) => {
        return (
            <div>
                Hey your name is {item.fName} {item.lName}
            </div>
        )
    })
}

return (
    <div>
        {/* Form */}
        <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
      <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
        {/* Form */}

        <h2>Your first name is = {name.firstName}</h2>
      <h2>Your last name is = {name.lastName}</h2>

        <button onClick={addItem}>Add one more</button>
        {/* <ul>
        {items.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul> */}
        {items.map((item, index) => {
            return (
                <div>
                    Employee No. {index+1} and name is {item.fName} {item.lName}
                </div>
            )
        })}
    </div>
)
}

export default Form
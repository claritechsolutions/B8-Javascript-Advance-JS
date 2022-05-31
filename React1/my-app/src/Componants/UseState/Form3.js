import React, { useState } from 'react';

const Form3 = () => {
    var ArrayItems = [
        {
            fullname: "pratiksha nalawade",
            city: "Satara"
        },
        {
            fullname: "Megha kadam",
            city: "Satara"
        },
        {
            fullname: "Mayuri palekar",
            city: "Satara"
        }
    ]
    const [items, setItem] = useState(ArrayItems)
    const AddMember=()=>{
        let newItem=[...items]
        let newMember={
            fullname: "Shivani Mane",
            city: "Satara"
        }
        newItem.push(newMember)
        setItem([...newItem])


    }
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <div>Hey your name is {item.fullname} {item.city}</div>
                    )
                })
            }
            <button onClick={AddMember}>ADDMember</button>

        </div>
    )
}

export default Form3

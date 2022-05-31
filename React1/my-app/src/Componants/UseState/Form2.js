import React, { useState } from 'react';
const ArrayObject = () => {
    const [users, setusers] = useState([
        {
            id: 1,
            fname: "Pratiksha",
            type: "admin"
        },
        {
            id: 1,
            fname: "Dhanshree",
            type: "admin"
        },
        {
            id: 1,
            fname: "mayu",
            type: "admin"
        }
    ])
    return (
        <div>
            {/* <ul> */}
            {
                users.map((user) => (
                    <div key={user.id}>
                        <p>{user.fname} {user.type}</p>
                        {/* <p>{user.type}</p> */}
                    </div>
                )
                )
            }
            {/* </ul> */}
        </div>
    )
}

export default ArrayObject;
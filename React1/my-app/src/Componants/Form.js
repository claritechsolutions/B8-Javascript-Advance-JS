import React ,{useState}from 'react'
const Form = () => {
    const abcd = {
        firstName: '',
        lastName: '',
        email:""
    }
    const [name, Setname] = useState(abcd)
    return (
        <div class="d-flex flex-column mb-3 p-2" style={{backgroundColor: "lightblue"}}>
            <form>
                <h3>Enter Your Details</h3>
            <label><b>FirstName:</b>
            <input type='text' class="m-3" value={name.firstName} onChange={e => Setname({ ...name, firstName: e.target.value })} />
            </label><br></br>
            <label><b>Lastname:</b>
            <input type='text'class="m-3" value={name.lastName} onChange={e=>Setname({...name , lastName:e.target.value})}/>
           </label><br></br>
           <label> <b>Email:</b>
            <input type='text'class="m-3" value={name.email} onChange={e=>Setname({...name , email:e.target.value})}/>
           </label>
           
            </form>
            <h4 style={{color: "red"}}>Your complete information is = {name.firstName} {name.lastName} {name.email} </h4>
            {/* <h4>Your lastname name is = {name.lastName}</h4>
            <h4>Your mailid = {name.email}</h4>
             */}

        </div>
    )
}

export default Form

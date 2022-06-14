import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Deposit = () => {
   
//    const[AccountHolderName,setAccHoldName]=useState("");
//    const[AccountNumber,setAccNo]=useState();
//    const[BankBalance, setBankBalance]=useState();

//    const initialVal={
//         AccountNumber,
//         AccountHolderName,
//         BankBalance
//     }
    const[data, setData]=useState([]);
    const[BankDetails, setResult]=useState([{}]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts`)
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
        .catch((error)=>console.log(error))
    },[])


    const DepositSubmit = () => {
        let AccNo = document.getElementById('Acc_no').value;
        let acc_name = document.getElementById('Acc_holder_name').value;
        let amount = parseInt(document.getElementById('AmountNum').value);

        const bank_details = data.filter((bank) => bank.AccountNumber == AccNo)
        console.log(bank_details);
        axios.patch(`http://localhost:3001/posts/${bank_details[0].id}`,
            {
                BankBalance: amount+bank_details[0].BankBalance
            })
            .then((response) => {
                console.log(response)
                setData(response.data)
            })
            .catch((error) => console.log(error))
        }   
    //    console.log(total);
    //    setResult(BankDetails);
    //    console.log(result);

  return (
      <>
      <div>
        <h1>Deposit</h1>
        <div className='container'>
            <div className="form-group w-25 mx-auto mt-4">
                    <label>Enter Account Number</label>
                    <input type="text" className='form-control' id="Acc_no"/>
                     {/* value={AccountNumber} onChange={e=>setAccNo(e.target.value)}/> */}
                    <label>Enter Name of Account Holder</label>
                    <input type="text" className='form-control' id="Acc_holder_name" />
                    {/* value={AccountHolderName} onChange={e=>setAccHoldName(e.target.value)}/> */}
                    <label>Enter Amount in Number</label>
                    <input type="text" className='form-control' id="AmountNum"/>
                     {/* value={BankBalance} onChange={e=>setBankBalance(e.target.value)}/> */}
                    {/* <label>Enter Amount in Words</label>
                    <input type="text" className='form-control' id="AmountWords"/> */}
                    <input type="button" className='form-control mt-3 bg-warning' value="Submit" onClick={DepositSubmit}/>
                    <div className='mt-2'>Your Total Account balance aftet Deposite is : {data.BankBalance}</div>
               </div> 
            </div>
        </div>
      </>

  
  )
}

export default Deposit
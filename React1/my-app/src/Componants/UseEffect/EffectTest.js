
import { useEffect ,useState} from 'react';

const EffectTest = () => {
    var value=0
    const [state, setstate] = useState(value)
    const [sum, setSum] = useState(value)

    const LoadAtState=()=>{
     console.log("This is state and setstate")

    }

    const LoadAtSum=()=>{
        console.log('This is sum and setSum')
    }

    useEffect(()=>{
        LoadAtState();
        document.title = `You clicked ${state} times`;
    },[state])

    useEffect(()=>{
        LoadAtSum();
    },[setSum])

    
    return (
        <div>
            State:{state}<br></br>
            Sum:{sum}<br></br>
            <button onClick={()=>setstate(state+1)}>AddOne</button><br></br>
            <button onClick={()=>setSum(sum+10)}>AddByTen</button><br></br>
        </div>
    )
}

export default EffectTest

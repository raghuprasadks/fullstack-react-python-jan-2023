import React,{useState} from 'react'

const SimpleInterest=()=>{
    const [principal,setPrincipal]=useState()
    const [roi,setRoi]=useState()
    const [time,setTime]=useState()
    const [si,setSi]=useState()
    const CalculateSI=()=>{
        let interest = (parseFloat(principal)*parseFloat(roi)*parseFloat(time))/100
        setSi(interest)
    }    
    return(
        <div>
            <input value={principal} onChange={(e)=>setPrincipal(e.target.value)} placeholder="Enter Principal" />
            <input value={roi} onChange={(e)=>setRoi(e.target.value)} placeholder="Enter Rate Of Interest" />
            <input value={time} onChange={(e)=>setTime(e.target.value)} placeholder="Enter Time" />
            <button onClick={CalculateSI}>Calculate</button>
            <h2>Simple Interest is {si}</h2>          
        </div>
    )
}
export default SimpleInterest
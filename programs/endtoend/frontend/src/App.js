import React,{useState,useEffect} from 'react'
import Employee from './Employee'

const App=()=>{

    const [employees,setEmployees]=useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:5000/listEmployee')
        .then(res=>res.json())
       // .then(data=>console.log(data))
       .then(data=>setEmployees(data))

    },[])


    const SaveEmployeeHandler=(code,name,dept,desg,sal)=>{
        //alert('SaveEmployeeHandler')
            let empdata={code:code,name:name,dept:dept,desg:desg,sal:sal}
            console.log('emp data',empdata)
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(empdata)
            };
            console.log('body ##',requestOptions.body)
            
            fetch('http://localhost:5000/addEmployee', requestOptions)
                .then(response => response.json())
                .then(data => setEmployees([...employees,data]));
              }   
        
    return(
        <>
        
        <Employee employees={employees} saveEmployee={SaveEmployeeHandler} />
        
        </>
    )
}

export default App;
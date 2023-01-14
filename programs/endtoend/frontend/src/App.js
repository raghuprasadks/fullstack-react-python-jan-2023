import React,{useState,useEffect} from 'react'
import Employee from './Employee'

const App=()=>{

    const [employees,setEmployees]=useState([])

    useEffect(()=>{
        console.log('use effect###')
        fetch('http://127.0.0.1:5000/listEmployee')
        .then(res=>res.json())       
       .then(data=>setEmployees(data))
    },[])

    const listEmployees =()=>{
        fetch('http://127.0.0.1:5000/listEmployee')
        .then(res=>res.json())
        .then(data=>setEmployees(data))

    }


    const SaveEmployeeHandler=(name,dept,desg,sal)=>{
        //alert('SaveEmployeeHandler')
            let empdata={name:name,dept:dept,desg:desg,sal:sal}
            console.log('emp data',empdata)
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(empdata)
            };
            console.log('body ##',requestOptions.body)
            
            fetch('http://localhost:5000/addEmployee', requestOptions)
                .then(response => response.json())
                .then(data => setEmployees(data));
            
            } 
            
        

            const DeleteEmployeeHandler=(id)=>{
                console.log("DeleteEmployeeHandler "+id )
               let requestOptions ={
                    method: 'DELETE'
                }
                fetch('http://localhost:5000/deleteEmployee/'+id, requestOptions)
                .then(response => response.json())
                .then(data => setEmployees(data));
            
            }
            
        
    return(
        <>
        
        <Employee employees={employees} saveEmployee={SaveEmployeeHandler} deleteEmployee={DeleteEmployeeHandler} />
        
        </>
    )
}

export default App;
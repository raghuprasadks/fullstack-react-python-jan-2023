import React,{useState} from 'react'
import './App.css';

const Employee=({employees,saveEmployee,deleteEmployee})=>{

    const [id,setId]=useState(-1)
    const [name,setName]=useState('')
    const [dept,setDept]=useState('')
    const [desg,setDesg]=useState('')
    const [sal,setSal]=useState(-1)


    const AddEmployee=(e)=>{
        e.preventDefault();
       // alert ('Add Employee')
        saveEmployee(name,dept,desg,sal)
        ClearData()    
    }

    const DeleteEmployee=(e)=>{
       // const DeleteEmployee=()=>{
        console.log('delete employee #'+e.target.value)
        deleteEmployee(e.target.value)
    }
    const ClearData=()=>{
        setName('')
        setDept('')
        setDesg('')
        setSal('')
     }

    
    const tbldata = employees.map((emp)=>{
        return <tr key={emp.id}>
        <td>{emp.name}</td>
        <td>{emp.dept}</td>
        <td>{emp.desg}</td>
        <td>{emp.sal}</td>
        <td><button value = {emp.id} onClick={DeleteEmployee}>Delete</button></td>                              
    </tr>
    })

    return(
            <div className='Container'>
            <div>
                <h1>Total Number of Employees: {employees.length}</h1>
            </div>
            <div>
            <form onSubmit={AddEmployee}>
            <h1>Employee Form</h1><br/>
            <label>Name</label><br/>
            <input value={name} onChange={(e)=>setName(e.target.value)} /><br/>
            <label>Department</label><br/>
            <input value={dept}  onChange={(e)=>setDept(e.target.value)}/><br/>
            <label>Designation</label><br/>
            <input value={desg}  onChange={(e)=>setDesg(e.target.value)}/><br/>
            <label>Salary</label><br/>
            <input value={sal} onChange={(e)=>setSal(e.target.value)}/><br/>
            <input type="submit" value="Add Employee"/>           
            
        </form>
            </div>
            <table>
            <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Action</th>
            </tr>
            {tbldata}
        </table>
            </div>

        
    )
}

export default Employee
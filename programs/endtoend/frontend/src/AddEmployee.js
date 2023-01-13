import React,{useState} from 'react'

const AddEmployee=({saveEmployee,listEmployees})=>{
    console.log('employee length ',listEmployees.length)
    const [code,setCode]=useState(-1)
    const [name,setName]=useState('')
    const [dept,setDept]=useState('')
    const [desg,setDesg]=useState('')
    const [sal,setSal]=useState(-1)

    const AddEmployee=(e)=>{
        e.preventDefault();
       // alert ('Add Employee')
        saveEmployee(code,name,dept,desg,sal)
    }

    let tbldata = listEmployees.map((emp)=>{
        return <tr key={emp.code}>
        <td>{emp.name}</td>
        <td>{emp.dept}</td>
        <td>{emp.desg}</td>
        <td>{emp.sal}</td>                                                
    </tr>
    })

    return(
        <>
        <table>
            <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            </tr>
            {tbldata}
        </table>
        <form onSubmit={AddEmployee}>
            <h1>Employee Form</h1><br/>
            <label>Code</label><br/>
            <input value={code} onChange={(e)=>setCode(e.target.value)} /><br/>
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
        </>
    )
}

export default AddEmployee
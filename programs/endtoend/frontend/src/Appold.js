import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react"

import AddEmployee from './AddEmployee';

function App() {
/** 
  const [data,setData]= useState({
    name:'',
    age:0,
    date:'',
    programming:''
  })
*/

  const [msg,setMsg]=useState('')
  const [employees,setEmployees]=useState([])
/**
  useEffect(()=>{
    fetch('http://localhost:5000/listEmployee')
    .then(response=>{ 
      let data = response.json()
      setEmployees(data)
    })
    .catch(error => {
     
      console.error('There was an error!', error);
  });


  },[])
 */

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("http://localhost:5000/listEmployee").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setEmployees(data);
        })
    );
}, []);
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
        .then(data => console.log(data.code));
      }   


/**
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("http://localhost:5000/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setData({
                name: data.Name,
                age: data.Age,
                date: data.Date,
                programming: data.Programming,
            });
        })
    );
}, []);
 */
  return (
    <div>
{/*      
      <h1>React and Flask</h1>
      <p>Name :{data.name}</p>
      <p>Age :{data.age}</p>
      <p>Date :{data.date}</p>
      <p>programming :{data.programming}</p>  
  */}
    <AddEmployee saveEmployee={SaveEmployeeHandler} listEmployes={employees}/>
    
    </div>
  );
}

export default App;

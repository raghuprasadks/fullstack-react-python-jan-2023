import React,{useState,useEffect} from 'react'


const Todos=()=>{

    const [todos,setTodos]=useState([])
    
    useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
     // .then(json => console.log(json))
     .then(json=>setTodos(json))
    },[])
    return(
        <div>
            <h1>Total Todos : {todos.length}</h1>
        </div>
    )
}

export default Todos
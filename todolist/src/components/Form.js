import React, { useState } from 'react'

function Form() {
    const [task, setTasks]=useState(()=>JSON.parse(localStorage.getItem('tasks')) || [])
    let task_Length=JSON.parse(localStorage.getItem('tasks'))?.length
    const [idCounter,setIdCounter]=useState(0 || task_Length)
    const Form = () =>{
        let value = document.getElementById('todo').value;
        // let localData = localStorage.getItem('value');
        if(!localStorage.getItem('tasks')){
            localStorage.setItem('tasks',JSON.stringify([]))
            let arr = JSON.parse(localStorage.getItem('tasks'))
            let taskObject={
                id:idCounter,
                value:value
            }
            setIdCounter(idCounter+1)
            console.log(taskObject)
            if(value){
                arr.push(taskObject);
            }
            localStorage.setItem('tasks',JSON.stringify(arr))
            setTasks(arr)
            document.getElementById('todo').value=''
        }
        else{
            let arr = JSON.parse(localStorage.getItem('tasks'))
            console.log(arr)
            let taskObject={
                id:idCounter,
                value:value
            }
            setIdCounter(idCounter+1)
            // setIdCounter(idCounter+1)
            if(value){

                arr.push(taskObject);
            }
            setTasks(arr)
            localStorage.setItem('tasks',JSON.stringify(arr))
            document.getElementById('todo').value=''
        }
    }
    const deleteTask = (id) =>{
        const updatedItems = task.filter(item => item.id !== id);
        setTasks(updatedItems);
        localStorage.setItem('tasks',JSON.stringify(updatedItems))
    }

  return (
    <div className="container">
        <div className='text-center'>
        <h1>Todo List</h1>
        </div> 
    <div className="row d-flex justify-content-center">
        <div className="col-md-4 form-group mt-4 ms-5">
            <input type="text" className='form-control' name="todo" id="todo"/>
        </div>
        <div className="col-md-2">
            <button className='btn btn-primary mt-4' onClick={Form}>
                Add Todo
            </button>
        </div>
    </div>
    <div className='container mt-5'>
        <div className="d-flex justify-content-center d-flex">
          <ul className='list-unstyled d-flex-column'>
            {task.length>0 ? task.map((item)=>(
              <li className='mt-3 ' key={item.id}>
                <span className='me-3'>{item.value}</span>
                <button className='btn btn-danger' onClick={()=>deleteTask(item.id)}>
                  delete
                </button>
              </li>
            )
            ):null}
          </ul>
        </div>
    </div>
    </div>
    
  )
}

export default Form
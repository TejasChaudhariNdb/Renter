import React,{useState,useRef ,useEffect} from 'react';
import './todo.css';
import TodoList from './todoList.js';



export default function Man() {


    const [tododada, setTodo] = useState([])
    const todoName = useRef();

    
function complete(id){
    const newTodo = [...tododada];
    const todo = newTodo.find(todo =>todo.id === id)
    todo.check = !todo.check
    setTodo(newTodo)
   
   }
   
   function del(id){
     const newTodo = [...tododada];
     const todo = newTodo.filter(todo => todo.id !== id)
     setTodo(todo)
   }
   

   useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todo_app'))
   if(getTodos) setTodo(getTodos)
  },[])
   
  
   useEffect(() => {
     localStorage.setItem('todo_app',JSON.stringify(tododada))
  
   }, [tododada])
   
   function addTo(e){
    const d = new Date();
    const name = todoName.current.value;
    console.log(name);
    todoName.current.value =null;
    
    setTodo(prevTodos =>{
      return [...prevTodos,{id:d.getSeconds()	,name:name,complet:false}]
    })
    
    return name
   }
      
  



    
    return (
        <div>
            
<input ref={todoName} type="text" className="input"/>
<button onClick={addTo} type="submit" className="add_btn">Add</button>
<div className="todo_list">
<TodoList  todos={tododada} complete={complete} del={del}/>
</div>
        </div>
    )
}
  



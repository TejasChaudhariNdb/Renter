import React,{useState,useRef ,useEffect} from 'react';
import NavBar from './navbar.js';
import TodoList from './todoList.js';
import Footer from './footer.js';
import './App.css';
import './todo.css';



function App() {
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
  const todo = newTodo.filter(todo => todo.id !== todo.id)
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
    <>

   <NavBar />
  {/* <Profile /> */}
  <div className="container">
   




<input ref={todoName} type="text" className="input"/>
<button onClick={addTo} type="submit">Add</button>
<div className="todo_list">
<TodoList  todos={tododada} complete={complete} del={del}/>
</div>
</div>


  <Footer />
  </>
  )
}


export default App;
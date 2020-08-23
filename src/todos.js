import React from 'react';
import './todo.css';

export default function todos(todo) {
  

  
    return (
    <>
    <div className="card">
   
     <input type="checkbox" checked={todo.todo.check} />
    {todo.todo.name}
     {console.log(todo)}
</div>
</>
    );
  }
import React from 'react';
import './todo.css';

export default function todos({todo,complete,del}) {
  
  function handelChange(){
   
    complete(todo.id);

  }

  function handelDel(){

    del(todo.id);

  }
  
    return (
    <>
    <div className="card">
   
     <input type="checkbox" checked={todo.check} onChange={handelChange} />
    {todo.name}
<button className="del" onClick={handelDel}>-</button>
</div>
</>
    );
  }
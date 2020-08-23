import React from 'react'
import Todo from './todos.js';

export default function todoList({todos,complete,del}) {
    return (
   todos.map(todo =>{
               return <Todo key={todo.id} todo={todo} complete={complete} del={del} />
          
            }) 

        
           )
}

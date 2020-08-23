import React from 'react'
import Todo from './todos.js';

export default function todoList({todos}) {
    return (
   todos.map(todo =>{
               return <Todo key={todo.id} todo={todo} />
          
            }) 

        
           )
}

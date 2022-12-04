import React, { useState } from 'react'
import { useEffect } from 'react'
import { Formulario, GridCard, Header } from './components'


const intitTodos =  JSON.parse( localStorage.getItem('tasks') ) || [];

const state = {
  completed: 0,
  total: intitTodos.length ,
  incompleted: 0,
  todos: intitTodos
  //  [
    // {
      // id:'1',
      // titulo:'',
      // responsable:'',
      // descripcion:'',
      // prioridad: '',
      // completed:false,
    // },
  // ]
}

export const App = () => {

  const [todosState, settodosState] = useState(state)

  const addTodo = ( todo )=>{

    settodosState( {
      ...todosState,
      todos:[...todosState.todos, todo],
      total: todosState.todos.length+1
    })
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todosState.todos ))
  }, [todosState])
  

  const deleteTodo = ( id )=>{

    settodosState( {
      ...todosState,
      todos: todosState.todos.filter( ele => ele.id !== id ),
      total: todosState.todos.length-1
    })
  }


  return (
    <div className='bg-gradient-to-t from-gray-200 to-gray-300 min-h-screen'>
        <Header total={ todosState.total } > Task manager </Header>
        <div className='flex flex-col justify-between md:flex-row gap-y-5 container my-5 '> 
            <Formulario addTodo={ addTodo } className='w-full md:w-[35%] lg:w-[25%]' />
            <GridCard 
            todos = { todosState.todos }  
            deleteTodo={ deleteTodo }
            className='w-full  md:w-[64%] lg:w-[74%] grid gap-3 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'/> 
        </div>

    </div>
  )
}

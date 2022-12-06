import React, { useState } from 'react'
import { useEffect } from 'react'
import { Formulario, GridCard, Header, WrapperConfirm } from './components'


const intitTodos =  JSON.parse( localStorage.getItem('tasks') ) || [];

const state = {
  completed: 0,
  total: intitTodos.length ,
  incompleted: 0,
  todos: intitTodos
  // todos:[
  //   {
  //     id:'1',
  //     titulo:'Correr 21k',
  //     responsable:'Cesar',
  //     descripcion:'Particicpar en la maraton de la municipalidad',
  //     prioridad: 'alta',
  //     completed:false,
  //   },
  // ]

}

export const App = () => {

  const [todosState, settodosState] = useState(state)
  const [todoDelete, setTodoDelete] = useState(null)

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
  

  const confirmDeleteTodo = ({ id, titulo })=>{
    setTodoDelete({ id, titulo })
  }

  const handleDeleteTodo = ( id )=>{
    setTodoDelete(null)
    if(!id)return;
    
    settodosState( {
      ...todosState,
      todos: todosState.todos.filter( ele => ele.id !== id ),
      total: todosState.todos.length-1
    })
  }


  return (
    <>
      <div className='bg-gradient-to-t from-gray-200 to-gray-300 min-h-screen'>
          <Header total={ todosState.total } > Task manager </Header>
          <div className='main-content'> 
              <Formulario addTodo={ addTodo } className='lg:w-[350px]' />
              <GridCard 
              todos = { todosState.todos }  
              confirmDeleteTodo={ confirmDeleteTodo }
              className='w-full min-h-[220px] flex-1 overflow-auto grid gap-3 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]'/> 
          </div>
      </div>

      { todoDelete && <WrapperConfirm  todoDelete= { todoDelete } handleDeleteTodo={ handleDeleteTodo } ></WrapperConfirm> }
      
    </>
  )
}

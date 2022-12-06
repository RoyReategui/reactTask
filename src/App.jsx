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

const initialTodo = {
  titulo:'',
  responsable:'',
  descripcion:'',
  prioridad: 'seleccione',
}

export const App = () => {

  const [todosState, settodosState] = useState(state)
  const [todoDelete, setTodoDelete] = useState(null)
  const [initialStateTodo, setinitialStateTodo] = useState(initialTodo)

  const addTodo = ( todo, isEdit )=>{

    if(!isEdit){
      settodosState( {
        ...todosState,
        todos:[...todosState.todos, todo],
        total: todosState.todos.length+1
      })

    }else{
        settodosState({
        ...todosState,
        todos:todosState.todos.map(ele =>{
                            if(ele.id === todo.id){
                              return todo;
                            }
                            return ele
                          })
      })
    }
    
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
    setinitialStateTodo(initialTodo)
  }

  const preEdit = (todo) =>{
     setinitialStateTodo(todo)
  }

  return (
    <>
      <div className='bg-gradient-to-t from-gray-200 to-gray-300 min-h-screen'>
          <Header total={ todosState.total } > Task manager </Header>
          <div className='main-content'> 
              <Formulario addTodo={ addTodo } className='md:w-[350px]' initialStateTodo={ initialStateTodo } />
              <GridCard 
              todos = { todosState.todos }  
              confirmDeleteTodo={ confirmDeleteTodo }
              preEdit ={ preEdit }
              className='w-full min-h-[220px] flex-1 overflow-auto grid gap-3 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]'/> 
          </div>
      </div>

      { todoDelete && <WrapperConfirm  todoDelete= { todoDelete } handleDeleteTodo={ handleDeleteTodo } ></WrapperConfirm> }
      
    </>
  )
}

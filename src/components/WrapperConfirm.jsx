import React from 'react'

export const WrapperConfirm = ({ todoDelete, handleDeleteTodo  }) => {

  const { id, titulo } = todoDelete;
   
  return (
    <div className='fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,.65)] flex justify-center'>
        <div className='bg-white w-1/2 h-[200px] rounded-lg py-2 border-1.5 border-gray-700 mt-32'>
          
            <div className='py-2 text-center border-b border-gray-400'>
                <h2 className='text-xl text-gray-600 font-semibold'>Confirmar Acción</h2>
            </div>
            <div className='py-8 text-center'>
              <p className='text-lg text-gray-600'>Estas seguro que deseas Eliminar la Tarea: 
              <span className='text-gray-700 font-semibold' > { titulo }</span> </p>
            </div>
            <div className='border-t border-gray-400 flex justify-end py-2 pr-3 '>
                
                <button onClick={ ()=> handleDeleteTodo( id )   }
                  className='py-1.5 px-3 bg-red-400 hover:bg-red-500 ease-out transition text-red-50 rounded-md hover:scale-110'> Si, Eliminar
                </button>

                <button 
                  onClick={ ()=> handleDeleteTodo( null )  }
                  className='ml-3 py-1.5 px-3 bg-gray-400 hover:bg-gray-500 ease-out transition text-gray-50 rounded-md hover:scale-110'> Cancelar 
                </button>
            </div>
        </div>
    </div>
  )
}

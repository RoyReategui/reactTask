const stylePrioridad = {
    'baja': 'bg-green-400',
    'media':'bg-yellow-400',
    'alta':'bg-red-400'
}


export const Card = ({id,titulo, descripcion, responsable, prioridad, confirmDeleteTodo}) => {
  return (
    <div className='relative shadow-md shadow-sky-200 rounded-lg  flex flex-col border border-sky-600'>
        <header className='bg-sky-100 rounded-t-lg py-4 px-2 text-center'>
            <h2 className='text-2xl text-sky-600 font-light mt-2'>{ titulo }</h2>
            <span 
                className={`left-1 top-1 absolute rounded-md py-0.5 px-1 ${ stylePrioridad[prioridad] }`}>
                    { prioridad }
            </span>
        </header>
        <div className='bg-sky-50 flex-1 p-2 flex flex-col'>
            <p className='text-wrap flex-1 text-base font-light'>{ descripcion }</p>
            <p className='text-center text-lg font-semibold text-sky-500'>{ responsable }</p>
        </div>
        <div className=' bg-sky-100 flex justify-center w-full rounded-b-lg py-5'>
            <button 
                onClick={ ()=> { confirmDeleteTodo({ id, titulo}) } }
                className='py-1.5 px-3 bg-red-400 hover:bg-red-500  text-red-50 rounded-md'>
                Delete
            </button>
        </div>
    </div>
  )
}

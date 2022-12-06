import { useState } from "react";
import { useForm } from "../hooks/useForm"
import { randomId } from "../utility/utility";

const initalState = {
    titulo:'',
    responsable:'',
    descripcion:'',
    prioridad: 'seleccione',
}

const validationForm = {
    titulo : [(value='')=> value.length >=3, 'El titulo tiene que tener minimo 3 caracteres'],
    responsable: [(value='')=> value.length >=3, 'El responsable tiene que tener minimo 3 caracteres' ],
    prioridad: [ (value='')=>['baja','media','alta'].includes(value), 'Inserte una prioridad' ]
}

const MessaError = ({children, flag }) =>{
    if(flag)
        return <p className="pl-2 text-red-400 text-sm">{ children }</p>
    else null
}

export const Formulario = ({className, addTodo}) => {

    //Se intento agregar una tarea ?? 
    const [isAddTodo, setisAddTodo] = useState(false)
   
    const{ isFormValid, tituloValues, responsableValues,prioridadValues,
        titulo,responsable,descripcion,prioridad,
        formState,onInputChange, resetForm} =  useForm (initalState,validationForm)
 
    const handleChange = (e)=>{
        e.preventDefault();
        setisAddTodo(true)
        if(!isFormValid) return;
                const newTodo = {
            ...formState,
            id: randomId(),
            completed:false
        }
        addTodo(newTodo)
        resetForm();
        setisAddTodo(false)
    }

    return (
        <div className={`${className}`}>
            <div className="w-full lg:w-[350px] lg:fixed">
                
                <form className='px-4 w-[inherit] py-10 shadow-lg rounded-lg bg-white space-y-5'>
                    <div>
                        <label className="required"> Titulo </label>
                        <input className='w-full border border-gray-400 rounded-lg px-3 py-1 focus:border-gray-600 focus:shadow-lg outline-none'
                            type="text"
                            name="titulo"
                            value={ titulo }
                            onChange= { onInputChange }
                            placeholder='Nueva Tarea'
                        />
                        <MessaError flag={ isAddTodo && isAddTodo  } > { tituloValues } </MessaError>
                    </div> 
                    <div>
                        <label className="required"> Responsable </label>
                        <input className='w-full border border-gray-400 rounded-lg px-3 py-1 focus:border-gray-600 focus:shadow-lg outline-none'
                            type="text"
                            name="responsable"
                            value={ responsable }
                            onChange= { onInputChange }
                            placeholder = 'Juanito'
                        />
                        <MessaError flag={ isAddTodo && isAddTodo  } > { responsableValues } </MessaError>
                    </div>
                    <div>
                        <label> Descripción </label>
                        <input className='w-full border border-gray-400 rounded-lg px-3 py-1 focus:border-gray-600 focus:shadow-lg outline-none'
                            type="text"
                            name="descripcion"
                            value={ descripcion }
                            onChange= { onInputChange }
                        />
                    </div> 
                    <div>
                        <label className="required"> Prioridad </label>
                        <select
                            className='w-full border border-gray-400 rounded-lg px-3 py-1 focus:border-gray-600 focus:shadow-lg outline-none'
                            name='prioridad'
                            value={ prioridad }
                            onChange= { onInputChange }
                            >
                            <option className="text-gray-400" value="seleccione" disabled>---Seleccione---</option>
                            <option value="baja">baja</option>
                            <option value="media">media</option>
                            <option value="alta">alta</option>
                        </select>
                        <MessaError flag={ isAddTodo && isAddTodo  } > { prioridadValues } </MessaError>
                        
                    </div>
                    <button 
                        // disabled={ !isFormValid }
                        onClick={ handleChange }
                        className='bg-sky-600 text-sky-100 p-4 py-2 rounded-md enabled:hover:bg-sky-700 w-full enabled:hover:cursor-pointer disabled:opacity-50 '>
                        Agregar 
                    </button>
                </form>
            </div>
        </div>
    )
}

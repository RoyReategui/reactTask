import { useForm } from "../hooks/useForm"
import { randomId } from "../utility/utility";


export const Formulario = ({className, addTodo}) => {


    const{titulo,responsable,descripcion,prioridad, formState,onInputChange, resetForm} =  useForm({
        titulo:'',
        responsable:'',
        descripcion:'',
        prioridad: '',
    })

    const handleChange = (e)=>{
        e.preventDefault();

        console.log('Nuevo todo', formState);
        const newTodo = {
            ...formState,
            id: randomId(),
            completed:false
        }
        addTodo(newTodo)
        resetForm();
    }

    return (
        <div className={`${className}`}>
            <div className="w-full lg:w-[350px] lg:fixed">
                <form className='px-4 w-[inherit] py-10 shadow-lg rounded-lg bg-white space-y-5'>
                    <div>
                        <label> Titulo </label>
                        <input className='w-full border border-gray-400 rounded-lg px-3 py-1 focus:border-gray-600 focus:shadow-lg outline-none'
                            type="text"
                            name="titulo"
                            value={ titulo }
                            onChange= { onInputChange }
                        />
                    </div> 
                    <div>
                        <label> Responsable </label>
                        <input className='w-full border border-gray-400 rounded-lg px-3 py-1 focus:border-gray-600 focus:shadow-lg outline-none'
                            type="text"
                            name="responsable"
                            value={ responsable }
                            onChange= { onInputChange }
                        />
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
                        <label> Prioridad </label>
                        <select
                            className='w-full border border-gray-400 rounded-lg px-3 py-1 focus:border-gray-600 focus:shadow-lg outline-none'
                            name='prioridad'
                            value={ prioridad }
                            onChange= { onInputChange }
                            >
                            <option value="" disabled>---Seleccione---</option>
                            <option value="baja">baja</option>
                            <option value="media">media</option>
                            <option value="alta">alta</option>
                        </select>
                    </div>
                    <button 
                        onClick={ handleChange }
                        className='bg-sky-600 text-sky-100 p-4 py-2 rounded-md hover:bg-sky-700 w-full'>
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    )
}

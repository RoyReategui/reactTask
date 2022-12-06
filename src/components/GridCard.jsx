import { Card } from "./Card"

export const GridCard = ({ className, todos, confirmDeleteTodo, preEdit }) => {

    return (
        <div className={`${ className }`} >
            
            {
                (todos.length == 0 ) && 
                <div className="bg-white flex justify-center items-center rounded-lg shadow-lg">
                    <h2 className="text-2xl text-gray-800 text-shadow ">Empiece a Crear sus Tareas  </h2>
                </div> 
            }

            { 
                todos.map(({id,titulo,descripcion,responsable,prioridad  }) =>(
                    <Card 
                        key={ id }
                        id={ id }
                        titulo={ titulo }
                        descripcion={ descripcion }
                        responsable={ responsable }
                        prioridad={ prioridad } 
                        confirmDeleteTodo={ confirmDeleteTodo }
                        preEdit={ preEdit }
                        />
                ))
            }
        </div>
    )
}

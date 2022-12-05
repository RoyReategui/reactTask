import { Card } from "./Card"

export const GridCard = ({ className, todos, deleteTodo }) => {

    return (
        <div className={`${ className }`} >
            { 
                 todos.map(({id,titulo,descripcion,responsable,prioridad  }) =>(
                    <Card 
                        key={ id }
                        id={ id }
                        titulo={ titulo }
                        descripcion={ descripcion }
                        responsable={ responsable }
                        prioridad={ prioridad } 
                        deleteTodo={ deleteTodo }
                        />
                ))
            }
        </div>
    )
}

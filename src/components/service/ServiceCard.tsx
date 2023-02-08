import { BsFillTrashFill } from 'react-icons/bs'
import '../project/ProjectCard.css'

function ServiceCard({ id, name, cost, description, handleRemove }) {

    const remove = (e) => {
        event.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className='project_card'>
            <h4>{name}</h4>
            <p>
                <span>Custo Total:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className='project_card_actions'>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import '../project/ProjectForm.css'

function ServiceForm ({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState([])

    function submit(e) {
        event?.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value})
    }

    return(
        <><form onSubmit={submit} className='form'>
            <Input
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                type="text"
                handleOnChange={handleChange}
            />
            <Input
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor total"
                type="number"
                handleOnChange={handleChange}
            />
            <Input
                text="Descrição do Serviço"
                name="description"
                placeholder="Descreva o serviço"
                type="text"
                handleOnChange={handleChange}
            />
             <SubmitButton text={btnText}/>
        </form>
       </>
    )
}

export default ServiceForm
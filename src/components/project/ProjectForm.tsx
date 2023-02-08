import { useEffect, useState  } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import './ProjectForm.css'
import PropTypes, { InferProps } from  'prop-types'


type ProjectFormProps = {
    btnText: string;
  };

function ProjectForm({ handleSubmit, btnText, projectData }: ProjectFormProps) {
    const [categories,setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((resp)=> resp.json())
          .then((data) => {
            setCategories(data)
          })
          .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        event.preventDefault()
        //console.log(project)
       handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
          ...project,
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
          },
        })
      }

    return(
        <form onSubmit={submit} className='form'>
        <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name}
        />
        <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget}
        />
        <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
        />
        <SubmitButton text={btnText}/>
    </form>
    )
}

export default ProjectForm
import { useLocation } from "react-router-dom"

import { useState, useEffect } from 'react'

import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Message from "../layout/Message"
import ProjectCard from "../project/ProjectCard"
import './Projects.css'
import Loading from "../layout/Loading"

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, SetRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    console.log(location)
    let message = ''
    console.log(location.state)
    if(location.state) {
       message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((resp)=> resp.json())
        .then((data) => {
            setProjects(data)
            SetRemoveLoading(true)
        })
        .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {

            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso')
        })
      }

    return(
        <div className="project_container">
            <div className="title_container">
            <h1>Meus Projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            <Message type="success" msg={message}/>
            <Message type="success" msg={projectMessage}/>
            <Container customClass="start">
              {projects.length > 0 &&
                projects.map((project) => ( <ProjectCard
                  name={project.name}
                  id={project.id}
                  budget={project.budget}
                  category={project.category.name}
                  key={project.id}
                  handleRemove={removeProject}
                  />
                ))}
                {!removeLoading && <Loading/> }
                {removeLoading && projects.length === 0 && (
                    <p>Não tem projetos</p>
                )}
            </Container>
        </div>
    )
}

export default Projects
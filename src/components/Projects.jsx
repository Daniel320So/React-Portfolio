import { useState, useEffect } from "react"
import { fetchProjects } from "../api"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

function Projects() {

  const [projectsData, setProjectsData] = useState(null)

  const updateProjectsData = async () => {
    setProjectsData(await fetchProjects())
  }

  useEffect(() => {
    updateProjectsData()
  }, [])

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projectsData && (
        <div id="projects-container">
          {
            projectsData.map(p => {
              return <ProjectCard key={p.title} project={p} />
            })
          }
        </div>
      )}

    </section>
  )
}

export default Projects

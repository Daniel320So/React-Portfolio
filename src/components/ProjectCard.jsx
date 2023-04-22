import { getImagePath } from "../api";


function ProjectCard(props) {

  const project = props.project;

  return (
    <div className="projects-item" >
      <div className="project-image-container">
        <img src={project.image ? getImagePath(project.image) : ""} alt={project.title} />
        <div className="link-container">
          {project.url && (<a href={project.url} target="_balnk" class="project-link"><p>Site</p></a>)}
          {project.git && (<a href={project.git} target="_balnk" class="github-link"><p>Github</p></a>)}
        </div>
        <div class="projects-text">
          <h3>{project.title}</h3>
        </div>
        <div class="projects-text">
          <h4>{project.content}</h4>
        </div>
        <div class="project-stack">
          {
            project.many_skills.map(s => {
              return <p>{s.title}</p>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

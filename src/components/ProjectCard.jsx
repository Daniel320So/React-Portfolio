import { getImagePath } from "../api";


function ProjectCard(props) {

  const project = props.project;

  return (
    <div className="projects-item" >
      <div className="project-image-container">
        <img src={project.image ? getImagePath(project.image) : ""} alt={project.title} />
      </div>
      <div className="link-container">
        {project.url && (<a href={project.url} target="_balnk" className="project-link"><p>Site</p></a>)}
        {project.git && (<a href={project.git} target="_balnk" className="github-link"><p>Github</p></a>)}
      </div>
      <div className="projects-text">
        <h3>{project.title}</h3>
      </div>
      <div className="projects-text">
        <h4>{project.content}</h4>
      </div>
      <div className="project-stack">
        {
          project.many_skills.map(s => {
            return <p key={s.title}>{s.title}</p>
          })
        }
      </div>
    </div>
  )
}

export default ProjectCard

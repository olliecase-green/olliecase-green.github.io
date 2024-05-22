import "../CSS/Projects.scss"
import ProjectDetails from "./ProjectDetails"
import { projects } from "../Config/config"

function Projects() {
  function createProjectDetails() {
    return projects.map((projectName) => (
      <ProjectDetails projectName={projectName} />
    ))
  }

  return (
    <div className="projects-container">
      <h2 className="page-title projects-title">Projects</h2>
      {createProjectDetails()}
    </div>
  )
}

export default Projects

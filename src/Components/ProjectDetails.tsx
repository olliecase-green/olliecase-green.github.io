import { ProjectDetail, ProjectDetailsProps } from "../Config/types"
import { projectDetails } from "../Config/config"
import "../CSS/Projects.scss"

function ProjectDetails(props: ProjectDetailsProps) {
  const currentProjectDetails = projectDetails.find(
    (detail) => detail.projectName === props.projectName
  ) as ProjectDetail
  const { projectName, projectLink, image, projectTech, projectPoints } =
    currentProjectDetails
  const projectNameClass = projectName.split(" ")[0]
  const projectContainerClass = `details-container ${projectNameClass}-container`
  const detailsClass = `project-details ${projectNameClass}`

  return (
    <div className={projectContainerClass}>
      <div className={detailsClass}>
        <div className="project-name">
          <a href={projectLink} rel="noopener noreferrer" target="_blank">
            {projectName}
          </a>
        </div>
        <div className="project-points">{projectPoints}</div>
        <div className="tech">{projectTech}</div>
      </div>
      <a href={projectLink} rel="noopener noreferrer" target="_blank">
        <div className="project-image-container">
          <img src={image} alt="project" />
        </div>
      </a>
    </div>
  )
}

export default ProjectDetails

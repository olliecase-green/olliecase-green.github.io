import { ProjectDetail, ProjectDetailsProps } from "../Config/types"
import { projectDetails } from "../Config/config"
import "../CSS/Projects.scss"

function ProjectDetails(props: ProjectDetailsProps) {
  const currentProjectDetails = projectDetails.find(
    (detail) => detail.projectName === props.projectName
  ) as ProjectDetail
  const { projectName, image, projectTech, projectPoints } =
    currentProjectDetails
  const projectNameClass = projectName.split(" ")[0]
  const projectContainerClass = `details-container ${projectNameClass}-container`
  const detailsClass = `project-details ${projectNameClass}`

  return (
    <div className={projectContainerClass}>
      <div className={detailsClass}>
        <div className="project-name">{projectName}</div>
        <div className="project-points">{projectPoints}</div>
        <div className="tech">{projectTech}</div>
      </div>
      <div className="project-image-container">
        <img src={image} alt="project" />
      </div>
    </div>
  )
}

export default ProjectDetails

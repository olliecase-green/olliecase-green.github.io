import { CompanyDetailsProps, workExperienceDetail } from "../Config/types"
import { workExperienceDetails } from "../Config/config"
import "../CSS/Experience.scss"

function CompanyDetails(props: CompanyDetailsProps) {
  const currentWorkDetails = workExperienceDetails.find(
    (detail) => detail.name === props.currentWork
  ) as workExperienceDetail
  const { name, link, dates, jobTitle, experiencePoints } = currentWorkDetails

  function createExperienceList() {
    return experiencePoints.map((point) => {
      return <li key={point}>{point}</li>
    })
  }

  return (
    <div className="work-info">
      <div className="work-title">
        {jobTitle} @{" "}
        <a rel="noopener noreferrer" target="_blank" href={link}>
          <span className="company">{name}</span>
        </a>
      </div>
      <div className="work-dates">{dates}</div>
      <ul>{createExperienceList()}</ul>
    </div>
  )
}

export default CompanyDetails

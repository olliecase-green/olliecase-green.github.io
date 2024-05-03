import { useState } from "react"
import { WorkPlace } from "../Config/types"
import CompanyDetails from "./CompanyDetails"
import "../CSS/Experience.scss"

function Experience() {
  const [currentWork, setCurrentWork] = useState<WorkPlace>("Hullabalook")
  const workPlaces: WorkPlace[] = [
    "Hullabalook",
    "Sigma Labs XYZ",
    "MHA MacIntyre Hudson",
  ]

  function createWorkButtons() {
    return workPlaces.map((workPlace) => (
      <button
        className={workPlace === currentWork ? "selected" : ""}
        onClick={() => setCurrentWork(workPlace)}
        key={workPlace}
      >
        {workPlace}
      </button>
    ))
  }

  return (
    <div className="experience-container">
      <h2 className="experience-title">Work Experience</h2>
      <div className="work-container">
        <div className="work-list">{createWorkButtons()}</div>
        <CompanyDetails currentWork={currentWork} />
      </div>
    </div>
  )
}

export default Experience

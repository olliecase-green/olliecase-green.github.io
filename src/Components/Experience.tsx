import { useState } from "react"
import { WorkPlace } from "../Config/types"
import Hullabalook from "./Hullabalook"
import SigmaLabs from "./SigmaLabs"
import MHA from "./MHA"
import "../CSS/Experience.scss"

function Experience() {
  const [currentWork, setCurrentWork] = useState<WorkPlace>("Hullabalook")
  const workPlaces: WorkPlace[] = [
    "Hullabalook",
    "Sigma Labs XYZ",
    "MHA MacIntyre Hudson",
  ]

  function createWorkButtons() {
    return workPlaces.map((place) => (
      <button
        className={place === currentWork ? "selected" : ""}
        onClick={() => handleClick(place)}
        key={place}
      >
        {place}
      </button>
    ))
  }

  function handleClick(workPlace: WorkPlace) {
    setCurrentWork(workPlace)
  }

  return (
    <div className="experience-container">
      <h2 className="experience-title">Work Experience</h2>
      <div className="work-container">
        <div className="work-list">{createWorkButtons()}</div>
        {currentWork === "Hullabalook" && <Hullabalook />}
        {currentWork === "Sigma Labs XYZ" && <SigmaLabs />}
        {currentWork === "MHA MacIntyre Hudson" && <MHA />}
      </div>
    </div>
  )
}

export default Experience

import { useState } from "react"
import "../CSS/Experience.scss"
import { WorkPlace } from "../Config/types"

function Experience() {
  const [currentWork, setCurrentWork] = useState<WorkPlace>("Hullabalook")
  const workPlaces: WorkPlace[] = [
    "Hullabalook",
    "Sigma Labs XYZ",
    "MHA MacIntyre Hudson",
  ]

  function createWorkButtons() {
    return workPlaces.map((place) => (
      <button onClick={() => handleClick(place)} key={place}>
        {place}
      </button>
    ))
  }

  function handleClick(workPlace: WorkPlace) {
    setCurrentWork(workPlace)
    console.log(workPlace)
  }

  return (
    <div className="experience-container">
      <div className="work-list">{createWorkButtons()}</div>
      {currentWork === "Hullabalook" && (
        <div className="work-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      )}
      {currentWork === "Sigma Labs XYZ" && (
        <div className="work-info">
          Sigma Labs Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </div>
      )}
      {currentWork === "MHA MacIntyre Hudson" && (
        <div className="work-info">
          MHA MacIntyre Hudson Sigma Labs Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      )}
    </div>
  )
}

export default Experience

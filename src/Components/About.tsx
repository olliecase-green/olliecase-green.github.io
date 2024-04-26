import "../CSS/About.scss"
import codeImage from "../assets/codeImage.png"
import branchImage from "../assets/branchImage.png"
import gearImage from "../assets/gearImage.jpg"

function About() {
  return (
    <div className="about-container">
      <div className="main-content">
        <h1 className="title">Welcome to my portfolio</h1>
        <h2 className="subtitle">
          I am a London-based Software Engineer with two years of commercial
          experience building web applications using Vue.js, TypeScript,
          JavaScript and Python.
        </h2>
        <button className="lets-talk-button">
          <div className="button-background"></div>
          <span>Let's talk!</span>
        </button>
      </div>
      <div className="extra-content">
        <img className="images code-image" src={codeImage} alt="coding" />
        <img className="images branch-image" src={branchImage} alt="branches" />
        <img className="images gear-image" src={gearImage} alt="gears" />
      </div>
    </div>
  )
}

export default About

import "../CSS/About.scss"
import jsIcon from "../assets/jsIcon.png"
import tsIcon from "../assets/tsIcon.png"
import pythonIcon from "../assets/pythonIcon.png"
import vueIcon from "../assets/vueIcon.png"
import reactIcon from "../assets/reactIcon.png"
import djangoIcon from "../assets/djangoIcon.png"

function About() {
  return (
    <div className="about-container">
      <div className="main-content">
        <h1 className="title">Oliver Case-Green</h1>
        <h2 className="subtitle">
          Software Engineer with two years of commercial experience.
        </h2>
        <button className="lets-talk-button">
          <div className="button-background"></div>
          <span>Let's talk!</span>
        </button>
      </div>
      <div className="extra-content">
        <div className="image-container">
          <img src={jsIcon} alt="javascript" />
        </div>
        <div className="image-container">
          <img src={tsIcon} alt="typescript" />
        </div>
        <div className="image-container">
          <img src={pythonIcon} alt="python" />
        </div>
        <div className="image-container">
          <img src={vueIcon} alt="vue" />
        </div>
        <div className="image-container">
          <img src={reactIcon} alt="react" />
        </div>
        <div className="image-container">
          <img src={djangoIcon} alt="django" />
        </div>
      </div>
    </div>
  )
}

export default About

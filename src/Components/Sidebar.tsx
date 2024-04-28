import "../CSS/Sidebar.scss"
import cvImage from "../Assets/cvImage.jpg"
import githubImage from "../Assets/githubImage.png"
import linkedinImage from "../Assets/linkedinImage.jpg"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="links-container">
        <a href="/my-portfolio">
          <img src={cvImage} alt="cv" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/olliecase-green"
        >
          <img src={githubImage} alt="github" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/oliver-case-green-40001416a/"
        >
          <img src={linkedinImage} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar

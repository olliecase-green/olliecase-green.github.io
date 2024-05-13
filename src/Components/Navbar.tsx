import { useEffect, useState } from "react"
import BodyClassToggle from "./BodyClassToggle"
import { NavbarOption } from "../Config/types"
import github from "../Assets/github.png"
import linkedin from "../Assets/linkedin.png"
import "../CSS/Navbar.scss"

function Navbar() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  const [showOptions, setShowOptions] = useState(false)
  const options: NavbarOption[] = ["about", "experience", "projects", "contact"]
  const navbarClass = visible ? "navbar" : "navbar navbar-hidden"
  const optionsClass = showOptions
    ? "navbar-options"
    : "navbar-options options-hidden"
  const backgroundTrayClass = showOptions ? "bg-tray" : "bg-tray bg-tray-hidden"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        const currScrollPosition = window.scrollY
        const visible = prevScrollPosition > currScrollPosition
        setVisible(visible)
        setPrevScrollPosition(currScrollPosition)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPosition])

  function createNavbarOptions() {
    return options.map((option) => {
      return (
        <a href={option === "about" ? "/" : `#/${option}`}>
          <button
            key={option}
            className="navbar-button"
            onClick={() => setShowOptions(false)}
          >
            <div className="navbar-item-background"></div>
            <span>{option}</span>
          </button>
        </a>
      )
    })
  }

  return (
    <div className={navbarClass}>
      <div className="links-container">
        <a
          href="https://github.com/olliecase-green"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/oliver-case-green-40001416a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="../Assets/cv.pdf" rel="noopener noreferrer" target="_blank">
          <span className="cv-span">CV</span>
        </a>
      </div>
      <BodyClassToggle showOptions={showOptions} />
      <div className="hamburger" onClick={() => setShowOptions(!showOptions)}>
        ☰
      </div>
      <div className={optionsClass}>{createNavbarOptions()}</div>
      <div
        className={backgroundTrayClass}
        onClick={() => setShowOptions(false)}
      ></div>
    </div>
  )
}

export default Navbar

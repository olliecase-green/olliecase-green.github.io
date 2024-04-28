import { useEffect, useState } from "react"
import "../CSS/Navbar.scss"

function Navbar() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  const options = ["about", "experience", "projects", "contact"]
  const navbarClass = visible ? "navbar visible" : "navbar hidden"

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
        <a href={`/${option}`}>
          <button key={option} className="navbar-button">
            <div className="navbar-item-background"></div>
            <span>{option}</span>
          </button>
        </a>
      )
    })
  }

  return (
    <div className={navbarClass}>
      <div className="navbar-options">{createNavbarOptions()}</div>
    </div>
  )
}

export default Navbar

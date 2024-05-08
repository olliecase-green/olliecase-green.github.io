import { useEffect, useState } from "react"
import { NavbarOption } from "../Config/types"
import "../CSS/Navbar.scss"

function Navbar() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  const options: NavbarOption[] = ["about", "experience", "projects", "contact"]
  const navbarClass = visible ? "navbar visible" : "navbar hidden"

  useEffect(() => {
    const handleScroll = () => {
      const isDesktopScreenSize =
        window.scrollY > 60 && window.innerWidth > 1024
      if (isDesktopScreenSize) {
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

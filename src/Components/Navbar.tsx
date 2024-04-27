import { useEffect, useState } from "react"
import { NavbarProps } from "../Config/types"
import "../CSS/Navbar.scss"

function Navbar(props: NavbarProps) {
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
        <div key={option} className="navbar-item">
          <div className="navbar-item-background"></div>
          <span>{option}</span>
        </div>
      )
    })
  }

  return (
    <div className={navbarClass}>
      {/* <div className="navbar-name">olliecasegreen</div> */}
      <div className="navbar-options">{createNavbarOptions()}</div>
    </div>
  )
}

export default Navbar

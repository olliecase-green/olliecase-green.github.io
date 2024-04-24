import React from "react"
import "../CSS/Navbar.scss"

function Navbar() {
  const options = ["about me", "experience", "projects", "contact"]

  function createNavbar() {
    return options.map((option) => {
      return (
        <div className="navbar-item">
          <span>{option}</span>
        </div>
      )
    })
  }

  return <div className="navbar">{createNavbar()}</div>
}

export default Navbar

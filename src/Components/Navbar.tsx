import "../CSS/Navbar.scss"

function Navbar() {
  const options = ["about", "experience", "projects", "contact"]

  function createNavbarOptions() {
    return options.map((option) => {
      return (
        <div className="navbar-item">
          <span>{option}</span>
        </div>
      )
    })
  }

  return (
    <div className="navbar">
      <div className="navbar-name">Oliver Case-Green</div>
      <div className="navbar-options">{createNavbarOptions()}</div>
    </div>
  )
}

export default Navbar

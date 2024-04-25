import "../CSS/Sidebar.scss"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="cv">
        <span>CV</span>
      </div>
      <div className="github">
        <span>GH</span>
      </div>
      <div className="linkedin">
        <span>LI</span>
      </div>
    </div>
  )
}

export default Sidebar
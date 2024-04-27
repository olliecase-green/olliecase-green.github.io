import "../CSS/Experience.scss"

function SigmaLabs() {
  return (
    <div className="work-info">
      <div className="work-title">
        Junior Software Developer @{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.sigmalabs.co.uk/"
        >
          <span className="company">Sigma Labs XYZ (Coding Bootcamp)</span>
        </a>
      </div>
      <div className="work-dates">December 2021 – May 2022</div>
      <ul>
        <li>
          Completed the Sigma Labs full-stack training programme, including:
        </li>
        <li>Frontend: React, JavaScript, HTML/CSS.</li>
        <li>Data/Backend: Deno.js, SQL, Python, Pandas, API development.</li>
        <li>
          Best practice industry fundamentals: Git version control, OOP, TDD,
          agile methodologies.
        </li>
        <li>
          Delivered a Knowledge Checklist App and World Bank Data App as group
          projects.
        </li>
        <li>
          Built a React login modal using React, API endpoints using Deno.js and
          used SQL to query the database.
        </li>
      </ul>
    </div>
  )
}

export default SigmaLabs

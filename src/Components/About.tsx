import "../CSS/About.scss"

function About() {
  return (
    <div className="about-container">
      <div className="main-content">
        <h1 className="title">Welcome to my portfolio</h1>
        <h2 className="subtitle">
          I am a London-based Software Engineer looking for frontend and
          fullstack developer roles.
        </h2>
        <button className="lets-talk-button">
          <div className="button-background"></div>
          <span>Let's talk!</span>
        </button>
      </div>
      <div className="extra-content">
        <div>Commercial experience with:</div>
        <ul>
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  )
}

export default About

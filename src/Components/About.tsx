import "../CSS/About.scss"

function About() {
  return (
    <div className="about-container">
      <div className="main-content">
        <h1 className="title">Welcome to my portfolio</h1>
        <h2 className="subtitle">
          I am a London-based Software Engineer with two years of commercial
          experience building web applications using Vue.js, TypeScript,
          JavaScript and Python.
        </h2>
        <button className="lets-talk-button">
          <div className="button-background"></div>
          <span>Let's talk!</span>
        </button>
      </div>
      <div className="extra-content"></div>
    </div>
  )
}

export default About

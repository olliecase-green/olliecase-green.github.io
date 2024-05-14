import "../CSS/About.scss"
import { emailAddress, subject, body } from "../Config/config"

function About() {
  return (
    <div className="about-container">
      <div className="main-content">
        <h1 className="title">Oliver Case-Green</h1>
        <h2 className="subtitle">
          Software Engineer with two years of commercial experience.
        </h2>
        <div className="about-text">
          Welcome to my portfolio! I am a London-based Software Engineer with
          commercial experience using{" "}
          <span className="emphasis-text">
            Vue.js, JavaScript, TypeScript and Python.
          </span>
        </div>
        <div className="about-text">
          I am also very confident working with{" "}
          <span className="emphasis-text">React</span> from my full-time coding
          bootcamp, Sigma Labs XYZ, and{" "}
          <span className="emphasis-text">Django</span> from my personal
          projects - please check out my projects in the navbar above! I have
          been learning Django in my spare time for the past year from the book:{" "}
          <span className="emphasis-text">Django 4 By Example</span>.
        </div>
        <h3 className="additional-info">Site info</h3>
        <div className="about-text">
          This website was built using React and TypeScript and is hosted on
          GitHub pages. To navigate between pages, I used React Router.
        </div>
        <div className="about-text">
          The source code can be seen in my GitHub repository available{" "}
          <a
            href="https://github.com/olliecase-green/olliecase-green.github.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          .
        </div>
        <button
          className="lets-talk-button"
          onClick={() =>
            (window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`)
          }
        >
          <div className="button-background"></div>
          <span>Let's talk!</span>
        </button>
      </div>
    </div>
  )
}

export default About

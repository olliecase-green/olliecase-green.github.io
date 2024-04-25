import "../CSS/Welcome.scss"

function Welcome() {
  return (
    <div className="welcome-container">
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
      <div className="welcome-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  )
}

export default Welcome

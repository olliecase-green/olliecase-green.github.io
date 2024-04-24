import React from "react"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import Navbar from "./Components/Navbar"
import "./CSS/App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my portfolio</h1>
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App

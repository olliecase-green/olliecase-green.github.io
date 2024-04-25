import React from "react"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import Navbar from "./Components/Navbar"
import "./CSS/App.scss"
import Welcome from "./Components/Welcome"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App

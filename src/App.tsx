import React from "react"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Welcome from "./Components/Welcome"
import "./CSS/App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Welcome />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App

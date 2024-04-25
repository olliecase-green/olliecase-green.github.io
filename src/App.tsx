import React from "react"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import "./CSS/App.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App

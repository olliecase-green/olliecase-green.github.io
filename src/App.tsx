import { useRef } from "react"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import "./CSS/App.scss"

function App() {
  const aboutRef = useRef<null | HTMLDivElement>(null)
  // const experienceRef = useRef<HTMLDivElement>(null)
  // const projectsRef = useRef<HTMLDivElement>(null)
  // const contactRef = useRef<HTMLDivElement>(null)

  function scrollToSection(ref: React.MutableRefObject<HTMLDivElement>) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="App">
      {/* <button onClick={scrollToSection}></button> */}
      <Navbar />
      <Sidebar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div id={"el"} ref={aboutRef}></div>
    </div>
  )
}

export default App

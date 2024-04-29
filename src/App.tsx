import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import "./CSS/App.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

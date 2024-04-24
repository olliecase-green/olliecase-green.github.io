import React from 'react';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import './CSS/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Welcome to my portfolio</div>
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;

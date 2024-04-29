import { useState } from "react"
import { Joke } from "../Config/types"
import "../CSS/Footer.scss"

function Footer() {
  const [joke, setJoke] = useState<Joke>(null)

  function handleClick() {
    setJoke("Why did the chicken cross the road?")
  }

  return (
    <div className="footer-container">
      <button onClick={handleClick}>Tell me a joke</button>
      <div>{joke}</div>
    </div>
  )
}

export default Footer

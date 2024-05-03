import { useState } from "react"
import { Joke } from "../Config/types"
import "../CSS/Footer.scss"

function Footer() {
  const [joke, setJoke] = useState<Joke>(null)

  function handleClick() {
    setJoke("Why did the chicken cross the road? To get to the other side")
  }

  return (
    <div className="footer-container">
      {joke ? (
        <div className="joke-info">
          <div className="joke">{joke}</div>
          <div>
            This joke is hard-coded at the moment but will soon be fetched from
            a free api
          </div>
        </div>
      ) : (
        <button className="joke-button" onClick={handleClick}>
          Tell me a joke
        </button>
      )}
    </div>
  )
}

export default Footer

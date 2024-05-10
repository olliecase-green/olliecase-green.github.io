import { useEffect, useState } from "react"
import { Joke } from "../Config/types"
import { fetchJoke } from "../Connectors/jokeApiConnector"
import "../CSS/Footer.scss"

function Footer() {
  const [joke, setJoke] = useState<Joke>(null)

  async function handleClick() {
    const joke = await fetchJoke()
    setJoke(joke)
  }

  return (
    <>
      <div className="button-container">
        <button className="joke-button" onClick={handleClick}>
          {joke ? (
            <span>Tell me another joke</span>
          ) : (
            <span>Tell me a joke</span>
          )}
        </button>
      </div>
      {joke ? <div className="joke">{joke}</div> : <></>}
    </>
  )
}

export default Footer

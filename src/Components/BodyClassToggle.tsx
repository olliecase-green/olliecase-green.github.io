import { useEffect } from "react"
import { BodyClassToggleProps } from "../Config/types"

function BodyClassToggle(props: BodyClassToggleProps) {
  const { showOptions } = props

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", showOptions)
  }, [showOptions])

  return null
}

export default BodyClassToggle

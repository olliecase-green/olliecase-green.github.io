export async function fetchJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) throw new Error(`HTTP error - status: ${response.status}`)

    const data = await response.json()
    return data.joke
  } catch (error) {
    console.error(error)
    window.alert("Error - check console for details")
  }
}

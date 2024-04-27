import "../CSS/Experience.scss"

function Hullabalook() {
  return (
    <div className="work-info">
      <div className="work-title">
        Software Engineer @{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.hullabalook.com/"
        >
          <span className="company">Hullabalook</span>
        </a>
      </div>
      <div className="work-dates">May 2022 - March 2024</div>
      <ul>
        <li>
          Led three projects from start to finish, including designing and
          building five ‘product listing pages’ apps, a room designer app and a
          visual bundling app.
        </li>
        <li>
          Designed Post Messaging using TypeScript to allow the apps to make API
          calls to the parent sites’ add to bag and add to wishlist APIs.
        </li>
        <li>
          Helped complete a client task which resulted in a 10% increase in
          conversion to purchase of customers who interacted with our app. This
          was done by updating the logic for our product grid which ensured more
          relevant products were positioned higher within the grid.
        </li>
        <li>
          Analysed and mapped client data using Pandas, Jupyter Notebooks and
          Google Colab to ensure the data was usable, ensuring the projects ran
          smoothly by exposing bad data quickly. After presenting my work to my
          colleagues, this approach was adopted by the rest of the team for
          future projects.
        </li>
        <li>
          Improved my Object-Oriented Programming skills by writing
          functionality and fixing bugs for ‘mapper’ Python scripts, used to map
          client data onto our platform.
        </li>
      </ul>
    </div>
  )
}

export default Hullabalook

import "../CSS/Projects.scss"

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="project-name">
        E-commerce application
        (https://github.com/olliecase-green/ecommerce-app)
      </div>
      <div className="project-details">
        <ul>
          <li>
            An online store where users can view products as well as read and
            post reviews.
          </li>
          <li>
            I developed data models for products/reviews and API endpoints using
            the Django REST Framework which are consumed by the frontend I built
            using React.
          </li>
          <li>Additionally, I styled the project using React Bootstrap.</li>
        </ul>
      </div>
      <div className="project-name">
        Weather application (https://github.com/olliecase-green/weather-app)
      </div>
      <div className="project-details">
        <ul>
          <li>
            An application where users can view the current temperature in five
            major world cities, fetching data from a public weather API.
          </li>
          <li>
            The user can also click through to view a 16 day forecast for each
            city.
          </li>
          <li>
            The project was built using React and TypeScript. I added caching
            functionality to reduce unnecessary API calls.
          </li>
        </ul>
      </div>
      <div className="project-name">
        Blog application (https://github.com/olliecase-green/blog-application)
      </div>
      <div className="project-details">
        <ul>
          <li>
            A project built by reading Django 4 By Example where users can view,
            comment on and share blog posts.
          </li>
          <li>
            I have learnt many techniques in Django, including custom model
            managers, SEO-friendly URLs and pagination.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects

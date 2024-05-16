import {
  WorkExperienceDetail,
  WorkPlace,
  ProjectDetail,
  Project,
} from "../Config/types"
import eCommerce from "../Assets/eCommerce.png"
import weather from "../Assets/weather.png"
import blog from "../Assets/blog.png"

export const workPlaces: WorkPlace[] = [
  "Hullabalook",
  "Sigma Labs XYZ",
  "MHA MacIntyre Hudson",
]

export const projects: Project[] = [
  "E-commerce application",
  "Weather application",
  "Blog application",
]

export const workExperienceDetails: WorkExperienceDetail[] = [
  {
    name: "Hullabalook",
    link: "https://www.hullabalook.com/",
    dates: "May 2022 - March 2024",
    jobTitle: "Software Engineer",
    experiencePoints: [
      "Led three projects from start to finish, including designing and building five ‘product listing pages’ apps, a room designer app and a visual bundling app.",
      "Designed Post Messaging using TypeScript to allow the apps to make API calls to the parent sites’ add to bag and add to wishlist APIs.",
      "Helped complete a client task which resulted in a 10% increase in conversion to purchase of customers who interacted with our app. This was done by updating the logic for our product grid which ensured more relevant products were positioned higher within the grid.",
      "Analysed and mapped client data using Pandas, Jupyter Notebooks and Google Colab to ensure the data was usable, ensuring the projects ran smoothly by exposing bad data quickly. After presenting my work to my colleagues, this approach was adopted by the rest of the team for future projects.",
      "Improved my Object-Oriented Programming skills by writing functionality and fixing bugs for ‘mapper’ Python scripts, used to map client data onto our platform.",
    ],
  },

  {
    name: "Sigma Labs XYZ",
    link: "https://www.sigmalabs.co.uk/",
    dates: "December 2021 – May 2022",
    jobTitle: "Junior Software Developer",
    experiencePoints: [
      "Completed the Sigma Labs full-stack training programme.",
      "Frontend: React, JavaScript, HTML/CSS.",
      "Data/Backend: Deno.js, SQL, Python, Pandas, API development.",
      "Best practice industry fundamentals: Git version control, OOP, TDD, agile methodologies.",
      "Delivered a Knowledge Checklist App and World Bank Data App as group projects.",
      "Built a React login modal using React, API endpoints using Deno.js and used SQL to query the database.",
    ],
  },

  {
    name: "MHA MacIntyre Hudson",
    link: "https://www.mha.co.uk/",
    dates: "July 2019 – October 2021",
    jobTitle: "Audit & Accounts Semi-Senior",
    experiencePoints: [
      "Gained financial knowledge working on audits and accounts preparation.",
      "Achieved first-time passes in Certificate in Finance, Accountancy and Business level exams (CFAB)",
      "Received an Outstanding Performance Award Scheme (OPAS) prize for my work during our team’s busy season",
    ],
  },
]

export const projectDetails: ProjectDetail[] = [
  {
    projectName: "E-commerce application",
    projectLink: "https://github.com/olliecase-green/ecommerce-app",
    image: eCommerce,
    projectTech:
      "Python  Django  Django REST Framework  React.js  JavaScript  HTML  Bootstrap",
    projectPoints:
      "An online store where users can view products as well as read and post reviews. I developed data models for products/reviews and API endpoints using the Django REST Framework which are consumed by the frontend I built using React. Additionally, I styled the project using React Bootstrap.",
  },

  {
    projectName: "Weather application",
    projectLink: "https://github.com/olliecase-green/weather-app",
    image: weather,
    projectTech: "React.js  TypeScript  HTML  CSS",
    projectPoints:
      "An application where users can view the current temperature in five major world cities, fetching data from a public weather API. The user can click through to view a 16 day forecast for each city. I also added caching functionality to reduce unnecessary API calls. The project was built using React and TypeScript.",
  },
  {
    projectName: "Blog application",
    projectLink: "https://github.com/olliecase-green/blog-application",
    image: blog,
    projectTech: "Python  Django  HTML  CSS",
    projectPoints:
      "A project built by reading Django 4 By Example where users can view, comment on and share blog posts. I learnt many techniques in Django, including custom model managers, SEO-friendly URLs and pagination.",
  },
]

export const emailAddress = "olivercase-green@hotmail.co.uk"
export const subject = encodeURIComponent("Let's talk!")
export const body = encodeURIComponent(
  "Hi Ollie,\n\nI just saw your portfolio online..."
)

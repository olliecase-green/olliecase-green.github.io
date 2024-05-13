import { WorkExperienceDetail, WorkPlace } from "../Config/types"

export const workPlaces: WorkPlace[] = [
  "Hullabalook",
  "Sigma Labs XYZ",
  "MHA MacIntyre Hudson",
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
      "Achieved first-time passes in Certificate in Finance, Accountancy and Business level exams (CFAB)",
      "Received an Outstanding Performance Award Scheme (OPAS) prize for my work during our team’s busy season",
    ],
  },
]

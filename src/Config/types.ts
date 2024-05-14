// Types
export type WorkPlace =
  | "Hullabalook"
  | "Sigma Labs XYZ"
  | "MHA MacIntyre Hudson"

export type Project =
  | "E-commerce application"
  | "Weather application"
  | "Blog application"

export type NavbarOption = "about" | "experience" | "projects" | "contact"

// Interfaces
export interface CompanyDetailsProps {
  currentWork: WorkPlace
}

export interface WorkExperienceDetail {
  name: WorkPlace
  link: string
  dates: string
  jobTitle: string
  experiencePoints: string[]
}

export interface ProjectDetail {
  projectName: Project
  projectLink: string
  image: string
  projectTech: string
  projectPoints: string
}

export interface ProjectDetailsProps {
  projectName: Project
}

export interface BodyClassToggleProps {
  showOptions: boolean
}

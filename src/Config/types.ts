// Types
export type WorkPlace =
  | "Hullabalook"
  | "Sigma Labs XYZ"
  | "MHA MacIntyre Hudson"

export type NavbarOption = "about" | "experience" | "projects" | "contact"
export type Joke = string | null

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

export interface BodyClassToggleProps {
  showOptions: boolean
}

export interface JokeData {
  id: string
  joke?: string
  status: number
}

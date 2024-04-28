// Types
export type WorkPlace =
  | "Hullabalook"
  | "Sigma Labs XYZ"
  | "MHA MacIntyre Hudson"

// Interfaces
export interface CompanyDetailsProps {
  currentWork: WorkPlace
}

export interface workExperienceDetail {
  name: WorkPlace
  link: string
  dates: string
  jobTitle: string
  experiencePoints: string[]
}

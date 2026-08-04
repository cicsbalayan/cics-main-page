export type Announcement = {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  date: string
  category: string
  image: string
  author: string
}

export type Work = {
  id: string
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  author: string
  year: string
}

export type Program = {
  code: string
  title: string
  description: string
  icon: "database" | "code" | "network" | "device"
  specializations: string[]
  careerPaths: string[]
}

export type Service = {
  id: string
  title: string
  description: string
  icon: "enrollment" | "learning" | "library" | "support" | "guidance" | "research"
  href?: string
}

export type Officer = {
  id: string
  name: string
  position: string
  image?: string
  portfolio?: string
}

export type College = {
  name: string
  shortName: string
  university: string
  tagline: string
  campus: string
  location: string
  email: string
  facebook: string
  github: string
  established: number
}

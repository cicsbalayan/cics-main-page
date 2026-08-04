import type { Work } from "@/lib/types"

export const works: Work[] = [
  {
    id: "work-1",
    slug: "web-applications",
    title: "Web Applications",
    description:
      "A collection of web applications developed by students, showcasing responsive design and real-world problem solving.",
    tags: ["Web Development", "Frontend", "Backend"],
    image: "/images/web-apps.jpg",
    author: "CICS Students",
    year: "2026",
  },
  {
    id: "work-2",
    slug: "capstone-projects",
    title: "Capstone Projects",
    description:
      "Industry-inspired capstone projects that address real-world challenges through innovative software and research.",
    tags: ["Capstone", "Research", "Innovation"],
    image: "/images/research.jpg",
    author: "CICS Student Researchers",
    year: "2026",
  },
  {
    id: "work-3",
    slug: "information-systems",
    title: "Information Systems",
    description:
      "Custom information systems designed to streamline organizational processes, and improve efficiency.",
    tags: ["Information Systems", "Management", "Database"],
    image: "/images/info-system.jpg",
    author: "CICS Students",
    year: "2026",
  },
]
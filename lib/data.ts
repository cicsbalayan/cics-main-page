import type {
  Announcement,
  College,
  Program,
  Work,
} from "@/lib/types"

export type { Announcement, College, Program, Work }

export const college: College = {
  name: "College of Informatics and Computing Sciences",
  shortName: "CICS",
  university: "Batangas State University",
  tagline: "The National Engineering University",
  campus: "Balayan Campus",
  location: "Poblacion, Balayan, Batangas, Philippines",
  email: "cics.balayan@g.batstate-u.edu.ph",
  facebook: "https://www.facebook.com/CICSBalayan",
  github: "https://github.com/cicsbalayan",
  established: 2010,
}

export const stats = [
  { label: "Enrolled Students", value: "1,200+" },
  { label: "Academic Programs", value: "1" },
  { label: "Student Organizations", value: "8+" },
  { label: "Industry Partners", value: "15+" },
]

export const programs: Program[] = [
  {
    code: "BSIT",
    title: "BS in Information Technology",
    description:
      "A four-year program that prepares students to design, build, and manage real-world technology solutions — from web and mobile development to networking, cybersecurity, and database management.",
    icon: "code",
    specializations: [
      "Software & Web Development",
      "Mobile Application Development",
      "Networking & Cybersecurity",
      "Database Management",
    ],
    careerPaths: [
      "Software / Web Developer",
      "Network Administrator",
      "Database Administrator",
      "Systems Analyst",
      "Cybersecurity Analyst",
      "IT Support Specialist",
    ],
  },
]

export const announcements: Announcement[] = [
  {
    id: "ann-1",
    slug: "midyear-enrollment-now-open",
    title: "Midyear Enrollment Now Open",
    excerpt:
      "Enrollment for the midyear term is officially open. Visit the CICS registrar desk or check the online portal for your schedule.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "June 2, 2026",
    category: "Enrollment",
    image: "/images/enrollment.svg",
    author: "CICS Office",
  },
  {
    id: "ann-2",
    slug: "cics-hackathon-2026",
    title: "CICS Hackathon 2026",
    excerpt:
      "48 hours. One mission. Build something amazing with your team and win exciting prizes at our annual student hackathon.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "June 20, 2026",
    category: "Event",
    image: "/images/code.svg",
    author: "CICS Student Council",
  },
  {
    id: "ann-3",
    slug: "foundation-week-2026",
    title: "Foundation Week 2026",
    excerpt:
      "Join us in celebrating BatStateU's founding anniversary with sports, culture, and tech exhibits organized by the CICS community.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "July 8, 2026",
    category: "Celebration",
    image: "/images/event.svg",
    author: "CICS Student Council",
  },
  {
    id: "ann-4",
    slug: "tech-talk-seminar",
    title: "Tech Talk: Careers in Software Engineering",
    excerpt:
      "An industry talk with alumni working at top tech companies about breaking into software engineering after graduation.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "July 25, 2026",
    category: "Seminar",
    image: "/images/seminar.svg",
    author: "CICS Office",
  },
  {
    id: "ann-5",
    slug: "capstone-showcase-2026",
    title: "Capstone Project Showcase",
    excerpt:
      "Senior students present their capstone projects to a panel of judges, industry professionals, and the CICS community.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "August 12, 2026",
    category: "Exhibit",
    image: "/images/project.svg",
    author: "Capstone Committee",
  },
  {
    id: "ann-6",
    slug: "new-student-orientation",
    title: "Orientation for Incoming Freshmen",
    excerpt:
      "Welcome to CICS! Attend the orientation to learn about your programs, student life, and the organizations you can join.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "August 25, 2026",
    category: "Orientation",
    image: "/images/campus.svg",
    author: "CICS Office",
  },
]

export const works: Work[] = [
  {
    id: "work-1",
    slug: "balayan-food-finder",
    title: "Balayan Food Finder",
    description:
      "A web app that maps food stalls and eateries around the campus with ratings and price tags, built by a BSIT capstone team.",
    tags: ["Web App", "Capstone", "BSIT"],
    image: "/images/web.svg",
    author: "BSIT Capstone Team",
    year: "2025",
  },
  {
    id: "work-2",
    slug: "campus-ai-assistant",
    title: "Campus AI Assistant",
    description:
      "A chatbot that answers student questions about enrollment, grades, and campus services — a BSIT research project.",
    tags: ["AI", "Research", "BSIT"],
    image: "/images/ai.svg",
    author: "CICS Research Group",
    year: "2025",
  },
  {
    id: "work-3",
    slug: "iskolar-game",
    title: "Iskolar: An Educational Game",
    description:
      "A 2D game that teaches financial literacy through a student's daily budget — an entry to the annual game dev showcase.",
    tags: ["Game Dev", "Showcase"],
    image: "/images/game.svg",
    author: "CICS Game Dev Circle",
    year: "2024",
  },
  {
    id: "work-4",
    slug: "e-triage-app",
    title: "E-Triage Mobile App",
    description:
      "A mobile application that helps barangay health workers triage patients and digitize records in remote communities.",
    tags: ["Mobile App", "Capstone"],
    image: "/images/mobile.svg",
    author: "CICS Capstone Team",
    year: "2025",
  },
  {
    id: "work-5",
    slug: "market-pricing-system",
    title: "Market Pricing Information System",
    description:
      "An information system that collects and publishes daily market prices for the Balayan public market.",
    tags: ["Information System", "Capstone"],
    image: "/images/web.svg",
    author: "CICS Project Team",
    year: "2024",
  },
  {
    id: "work-6",
    slug: "smart-farm-monitor",
    title: "Smart Farm Monitor",
    description:
      "IoT-enabled monitoring system for greenhouse farms with a dashboard for soil moisture, temperature, and alerts.",
    tags: ["IoT", "Research", "BSIT"],
    image: "/images/ai.svg",
    author: "CICS IoT Lab",
    year: "2025",
  },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Announcements", href: "#announcements" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
]

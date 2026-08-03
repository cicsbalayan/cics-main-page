import { college } from "./college"
import { links } from "./links"

export const site = {
  seo: {
    title: "CICS — College of Informatics and Computing Sciences",
    titleTemplate: "%s | CICS BSU Balayan",
    description:
      "Official landing page of the College of Informatics and Computing Sciences — Batangas State University, The National Engineering University, Balayan Campus.",
  },
  header: {
    logoTagline: "BatStateU TNEU Balayan",
    join: "Join Us",
  },
  hero: {
    description:
      "The home of future innovators and technologists. We nurture students in information technology — empowering them to design, build, and manage the digital solutions that shape the future of the Batangas province and beyond.",
    primaryButton: {
      label: "Latest Announcements",
      href: links.sections.announcements,
    },
    secondaryButton: {
      label: "Explore the College",
      href: links.sections.about,
    },
  },
  about: {
    badge: "About the College",
    title: "Shaping the digital leaders of tomorrow",
    description: `The ${college.name} (${college.shortName}) is the academic home of computing programs at ${college.university}, ${college.tagline}. Situated in the coastal town of ${college.campus}, our college brings modern computing education to Batangas, blending theory with practice through project-based learning and community-driven initiatives.`,
    body: "We believe that technology is most powerful when it serves people. Through student organizations, research labs, and industry collaborations, we equip every CICS student not just to use technology — but to create it.",
    mission: {
      title: "Our Mission",
      description:
        "To produce competent, ethical, and socially responsible computing professionals through quality instruction, research, and extension services.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be a center of excellence in computing education that drives innovation and inclusive digital growth for the province and the nation.",
    },
  },
  programs: {
    badge: "Academic Program",
    title: "One focused path to a career in IT",
    description:
      "The college offers a single four-year program at Balayan Campus — a curriculum built on strong fundamentals, hands-on projects, and industry exposure so graduates are ready to hit the ground running.",
    learnLabel: "What you'll learn",
    careerLabel: "Where you can go",
  },
  announcements: {
    badge: "Announcements",
    title: "News and updates from CICS",
    description:
      "Stay up to date with enrollment schedules, events, seminars, and student activities. Click any post to read the full story.",
    readMore: "Read more",
    dialogFooter:
      "For inquiries, visit the CICS office during office hours or reach out to us through the contact details at the bottom of this page.",
  },
  works: {
    badge: "Student Works",
    title: "Projects built by CICS students",
    description:
      "From capstone theses to passion projects, explore the innovative work our students produce every year.",
    exploreButton: "Explore on GitHub",
    viewMore: "View more works",
  },
  cta: {
    title: "Become part of the CICS family",
    description: `Join our student organizations, participate in hackathons and seminars, or simply say hello. There's always a place for passionate students at ${college.campus}.`,
    primaryButton: "Get in Touch",
    secondaryButton: "Follow on Facebook",
  },
  footer: {
    description: `The student body and academic programs of the ${college.name}, ${college.university}, ${college.tagline} — ${college.campus}.`,
    navigate: "Navigate",
    programs: "Programs",
    contact: "Contact",
    facebook: "CICS Balayan on Facebook",
    github: "CICS on GitHub",
    rights: "All rights reserved.",
  },
}

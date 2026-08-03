import { navLinks, college, programs } from "@/lib/data"
import {
  RiFacebookCircleLine,
  RiGithubLine,
  RiMailLine,
  RiMapPin2Line,
} from "@remixicon/react"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-heading text-sm font-bold text-primary-foreground">
                C
              </span>
              <span className="font-heading text-sm font-semibold">CICS</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The student body and academic programs of the {college.name},{" "}
              {college.university}, {college.tagline} — {college.campus}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={college.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <RiFacebookCircleLine />
              </a>
              <a
                href={college.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <RiGithubLine />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Navigate</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Programs</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {programs.map((program) => (
                <li key={program.code}>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {program.code} · {program.title.replace("BS in ", "")}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={college.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  CICS Balayan on Facebook
                </a>
              </li>
              <li>
                <a
                  href={college.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  CICS on GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <RiMapPin2Line className="mt-0.5 size-4 shrink-0" />
                {college.location}
              </li>
              <li className="flex items-center gap-2">
                <RiMailLine className="size-4 shrink-0" />
                <a
                  href={`mailto:${college.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {college.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {college.name}. All rights reserved.
          </p>
          <p>
            {college.university} · {college.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { WorkCard } from "@/components/work-card"
import { cn } from "@/lib/utils"
import { college, works } from "@/lib/data"
import type { Work } from "@/lib/types"
import { RiGithubFill, RiArrowRightLine } from "@remixicon/react"

type WorksProps = {
  items?: Work[]
}

export function Works({ items = works }: WorksProps) {
  return (
    <section id="works" className="scroll-mt-20 bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              badge="Student Works"
              title="Projects built by CICS students"
              description="From capstone theses to passion projects, explore the innovative work our students produce every year."
            />
          </Reveal>
          <Reveal delay={150} className="shrink-0">
            <a
              href={college.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <RiGithubFill />
              Explore on GitHub
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((work, index) => (
            <Reveal key={work.id} delay={(index % 3) * 100}>
              <WorkCard work={work} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Reveal>
            <a
              href={college.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              View more works
              <RiArrowRightLine data-icon="inline-end" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

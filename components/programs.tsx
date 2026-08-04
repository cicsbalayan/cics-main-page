import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { programs, site } from "@/data"
import type { Program } from "@/lib/types"
import {
  RiArrowRightSLine,
  RiCheckLine,
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiSmartphoneLine,
} from "@remixicon/react"

const programIcons = {
  code: RiCodeSSlashLine,
  database: RiDatabase2Line,
  network: RiGlobalLine,
  device: RiSmartphoneLine,
} as const

type ProgramsProps = {
  items?: Program[]
}

export function Programs({ items = programs }: ProgramsProps) {
  const program = items[0]
  const Icon = programIcons[program.icon]

  return (
    <section className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            badge={site.programs.badge}
            title={site.programs.title}
            description={site.programs.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={100}>
            <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/30 via-primary/20 to-primary-2/30 text-primary-foreground shadow-[0_0_20px_-6px] shadow-primary/40">
                    <Icon />
                  </div>
                  <Badge>{program.code}</Badge>
                </div>
                <h3 className="font-heading text-xl font-semibold text-balance">
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            <Reveal delay={200}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-3">
                  <h4 className="font-heading text-sm font-semibold">
                    {site.programs.learnLabel}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {program.specializations.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <RiCheckLine className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-3">
                  <h4 className="font-heading text-sm font-semibold">
                    {site.programs.careerLabel}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {program.careerPaths.map((career) => (
                      <li
                        key={career}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <RiArrowRightSLine className="mt-0.5 size-4 shrink-0 text-primary" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { college } from "@/lib/data"
import { RiLightbulbFlashLine, RiRocketLine } from "@remixicon/react"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionHeading
              badge="About the College"
              title="Shaping the digital leaders of tomorrow"
              description={`The ${college.name} (${college.shortName}) is the academic home of computing programs at ${college.university}, ${college.tagline}. Situated in the coastal town of ${college.campus}, our college brings modern computing education to Batangas, blending theory with practice through project-based learning and community-driven initiatives.`}
            />
            <p className="mt-4 text-pretty text-muted-foreground">
              We believe that technology is most powerful when it serves people.
              Through student organizations, research labs, and industry
              collaborations, we equip every CICS student not just to use
              technology — but to create it.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={150}>
              <Card size="sm" className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-2">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <RiLightbulbFlashLine />
                  </div>
                  <h3 className="font-heading text-sm font-semibold">
                    Our Mission
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To produce competent, ethical, and socially responsible
                    computing professionals through quality instruction,
                    research, and extension services.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card size="sm" className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-2">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <RiRocketLine />
                  </div>
                  <h3 className="font-heading text-sm font-semibold">
                    Our Vision
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To be a center of excellence in computing education that
                    drives innovation and inclusive digital growth for the
                    province and the nation.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/data"
import { RiLightbulbFlashLine, RiRocketLine } from "@remixicon/react"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionHeading
              badge={site.about.badge}
              title={site.about.title}
              description={site.about.description}
            />
            <p className="mt-4 text-pretty text-muted-foreground">
              {site.about.body}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={150}>
              <Card
                size="sm"
                className="h-full transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col gap-2">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <RiLightbulbFlashLine />
                  </div>
                  <h3 className="font-heading text-sm font-semibold">
                    {site.about.mission.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {site.about.mission.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card
                size="sm"
                className="h-full transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col gap-2">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <RiRocketLine />
                  </div>
                  <h3 className="font-heading text-sm font-semibold">
                    {site.about.vision.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {site.about.vision.description}
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

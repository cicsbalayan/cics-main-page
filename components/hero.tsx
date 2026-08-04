import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { college, site } from "@/data"
import { RiArrowRightLine, RiGraduationCapLine } from "@remixicon/react"

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20">
        <Reveal delay={0}>
          <Badge className="mb-6 gap-1.5" variant="secondary">
            <RiGraduationCapLine />
            {college.university} · {college.campus}
          </Badge>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-3xl font-heading text-4xl leading-[1.15] font-bold tracking-tight  sm:text-5xl md:text-6xl">
            {college.name}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
            {site.hero.description}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.hero.primaryButton.href}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {site.hero.primaryButton.label}
              <RiArrowRightLine data-icon="inline-end" />
            </a>
            <a
              href={site.hero.secondaryButton.href}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              {site.hero.secondaryButton.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

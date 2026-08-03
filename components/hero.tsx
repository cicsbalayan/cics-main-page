import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { college, site } from "@/data"
import { RiArrowRightLine, RiGraduationCapLine } from "@remixicon/react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-24 -right-24 h-72 w-72 animate-float rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] [background-size:44px_44px] [--border:color-mix(in_oklch,var(--border)_60%,transparent)]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20">
        <Reveal delay={0}>
          <Badge className="mb-6 gap-1.5" variant="secondary">
            <RiGraduationCapLine />
            {college.university} · {college.campus}
          </Badge>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
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

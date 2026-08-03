import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { college, stats } from "@/lib/data"
import { RiArrowRightLine, RiGraduationCapLine } from "@remixicon/react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-float absolute top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
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
            The home of future innovators and technologists. We nurture students
            in information technology — empowering them to design, build, and
            manage the digital solutions that shape the future of the Batangas
            province and beyond.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#announcements"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Latest Announcements
              <RiArrowRightLine data-icon="inline-end" />
            </a>
            <a
              href="#about"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Explore the College
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 bg-background px-4 py-6"
              >
                <dt className="order-2 text-xs text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 font-heading text-2xl font-bold">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

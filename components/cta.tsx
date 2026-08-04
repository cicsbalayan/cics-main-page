import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { college, site } from "@/data"
import Image from "next/image"
import { RiArrowRightLine } from "@remixicon/react"

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-4xl border border-border/60 bg-background/60 px-6 py-14 text-center shadow-[0_20px_60px_-30px] shadow-black/50 backdrop-blur-xl ring-1 ring-primary-2/15 sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-2/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-3/20 blur-3xl"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <div className="flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 ring-1 ring-primary-2/20">
                <Image
                  src="/cics_logo-removebg.png"
                  alt={`${college.shortName} logo`}
                  width={48}
                  height={48}
                  className="size-10 object-contain"
                />
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {site.cta.title}
              </h2>
              <p className="text-pretty text-muted-foreground">
                {site.cta.description}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${college.email}`}
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  {site.cta.primaryButton}
                  <RiArrowRightLine data-icon="inline-end" />
                </a>
                <a
                  href={college.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" })
                  )}
                >
                  {site.cta.secondaryButton}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

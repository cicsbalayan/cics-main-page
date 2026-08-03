import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { college } from "@/lib/data"
import { RiArrowRightLine, RiTeamLine } from "@remixicon/react"

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-4xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/15">
                <RiTeamLine className="size-6" />
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Become part of the CICS family
              </h2>
              <p className="text-pretty text-primary-foreground/80">
                Join our student organizations, participate in hackathons and
                seminars, or simply say hello. There&apos;s always a place for
                passionate students at {college.campus}.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${college.email}`}
                  className={cn(
                    buttonVariants({ size: "lg", variant: "secondary" })
                  )}
                >
                  Get in Touch
                  <RiArrowRightLine data-icon="inline-end" />
                </a>
                <a
                  href={college.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "outline",
                    }),
                    "border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                  )}
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

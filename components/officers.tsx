import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { OfficerCard } from "@/components/officer-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { officers, site } from "@/data"
import type { Officer } from "@/lib/types"

type OfficersProps = {
  items?: Officer[]
}

export function Officers({ items = officers }: OfficersProps) {
  return (
    <section id="officers" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            badge={site.officers.badge}
            title={site.officers.title}
            description={site.officers.description}
          />
          <div className="mt-5 flex justify-center">
            <Badge variant="secondary">{site.officers.term}</Badge>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Carousel
            className="mt-12 px-6 sm:px-10"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              {items.map((officer) => (
                <CarouselItem
                  key={officer.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <OfficerCard officer={officer} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 sm:-left-2" />
            <CarouselNext className="-right-1 sm:-right-2" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}

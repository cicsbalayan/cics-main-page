import { AnnouncementCard } from "@/components/announcement-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { announcements, site } from "@/data"
import type { Announcement } from "@/lib/types"

type AnnouncementsProps = {
  items?: Announcement[]
}

export function Announcements({ items = announcements }: AnnouncementsProps) {
  return (
    <section id="announcements" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            badge={site.announcements.badge}
            title={site.announcements.title}
            description={site.announcements.description}
          />
        </Reveal>

        <Reveal delay={150}>
          <Carousel
            className="mt-12 px-6 sm:px-10"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              {items.map((announcement) => (
                <CarouselItem
                  key={announcement.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <AnnouncementCard announcement={announcement} />
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

"use client"

import * as React from "react"
import Image from "next/image"

import { AnnouncementCard } from "@/components/announcement-card"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { announcements, site } from "@/data"
import type { Announcement } from "@/lib/types"
import { RiCalendarEventLine, RiUserStarLine } from "@remixicon/react"

type AnnouncementsProps = {
  items?: Announcement[]
}

export function Announcements({ items = announcements }: AnnouncementsProps) {
  const [selected, setSelected] = React.useState<Announcement | null>(null)

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
                  <AnnouncementCard
                    announcement={announcement}
                    onRead={setSelected}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 sm:-left-2" />
            <CarouselNext className="-right-1 sm:-right-2" />
          </Carousel>
        </Reveal>

        <Dialog
          open={selected !== null}
          onOpenChange={(open) => !open && setSelected(null)}
        >
          {selected && (
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <Badge className="w-fit">{selected.category}</Badge>
                <DialogTitle className="pt-2 text-xl leading-snug font-bold">
                  {selected.title}
                </DialogTitle>
                <DialogDescription>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                    <span className="inline-flex items-center gap-1">
                      <RiCalendarEventLine className="size-4" />
                      {selected.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <RiUserStarLine className="size-4" />
                      {selected.author}
                    </span>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="40rem"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 text-sm leading-relaxed">
                <p className="text-base text-foreground">{selected.excerpt}</p>
                <p className="text-muted-foreground">{selected.body}</p>
                <p className="text-muted-foreground">
                  {site.announcements.dialogFooter}
                </p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}

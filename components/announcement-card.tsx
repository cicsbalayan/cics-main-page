"use client"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { site } from "@/data"
import type { Announcement } from "@/lib/types"
import {
  RiArrowRightLine,
  RiCalendarEventLine,
  RiUserStarLine,
} from "@remixicon/react"

export function AnnouncementCard({
  announcement,
  onRead,
}: {
  announcement: Announcement
  onRead: (announcement: Announcement) => void
}) {
  return (
    <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={announcement.image}
          alt={announcement.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4">{announcement.category}</Badge>
      </div>
      <CardContent className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <RiCalendarEventLine className="size-3.5" />
            {announcement.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <RiUserStarLine className="size-3.5" />
            {announcement.author}
          </span>
        </div>
        <h3 className="font-heading text-lg font-semibold text-balance">
          {announcement.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {announcement.excerpt}
        </p>
        <button
          type="button"
          onClick={() => onRead(announcement)}
          className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {site.announcements.readMore}
          <RiArrowRightLine className="size-4" />
        </button>
      </CardContent>
    </Card>
  )
}

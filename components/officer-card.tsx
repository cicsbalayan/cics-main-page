import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { site } from "@/data"
import type { Officer } from "@/lib/types"
import { RiArrowRightUpLine } from "@remixicon/react"

export function OfficerCard({ officer }: { officer: Officer }) {
  const initials = officer.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <Card className="group relative h-full min-h-80 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
      {officer.image ? (
        <Image
          src={officer.image}
          alt={officer.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary via-primary-2 to-primary-3 font-heading text-3xl font-semibold text-primary-foreground">
          {initials}
        </div>
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10"
      />
      <CardContent className="relative flex h-full flex-col items-start justify-end ">
        <h3 className="font-heading text-lg font-semibold text-balance text-white">
          {officer.name}
        </h3>
        <p className="text-xs font-medium tracking-wide text-white/70 uppercase">
          {officer.position}
        </p>
        {officer.portfolio && (
          <a
            href={officer.portfolio}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs  text-white transition-colors hover:text-white/70"
          >
            {site.officers.portfolioLabel}
            <RiArrowRightUpLine data-icon="inline-end" />
          </a>
        )}
      </CardContent>
    </Card>
  )
}

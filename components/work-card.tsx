import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Work } from "@/lib/types"
import { RiUserStarLine } from "@remixicon/react"

export function WorkCard({ work }: { work: Work }) {
  return (
    <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-primary-2/40 via-primary/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="font-heading text-base font-semibold text-balance">
          {work.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {work.description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <RiUserStarLine className="size-3.5" />
            {work.author}
          </span>
          <span>{work.year}</span>
        </div>
      </CardContent>
    </Card>
  )
}

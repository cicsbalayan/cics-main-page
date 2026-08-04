import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Service } from "@/lib/types"
import {
  RiArrowRightUpLine,
  RiBookLine,
  RiFlaskLine,
  RiGraduationCapLine,
  RiHeadphoneLine,
  RiLifebuoyLine,
  RiTimeLine,
  RiUserAddLine,
} from "@remixicon/react"

const serviceIcons = {
  enrollment: RiUserAddLine,
  learning: RiGraduationCapLine,
  library: RiBookLine,
  support: RiHeadphoneLine,
  guidance: RiLifebuoyLine,
  research: RiFlaskLine,
} as const

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon]
  const clickable = Boolean(service.href)

  const inner = (
    <CardContent className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/30 via-primary/20 to-primary-2/30 text-primary-foreground shadow-[0_0_20px_-6px] shadow-primary/40">
          <Icon />
        </div>
        {clickable && (
          <RiArrowRightUpLine
            data-icon="inline-end"
            className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </div>
      <h3 className="font-heading text-base font-semibold text-balance">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-auto flex items-center gap-1.5 border-t border-border/60 pt-3">
        <Badge variant="outline">
          <RiTimeLine />
          Coming Soon
        </Badge>
      </div>
    </CardContent>
  )

  if (clickable) {
    return (
      <a href={service.href} className="block h-full">
        <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-lg">
          {inner}
        </Card>
      </a>
    )
  }

  return (
    <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-lg">
      {inner}
    </Card>
  )
}

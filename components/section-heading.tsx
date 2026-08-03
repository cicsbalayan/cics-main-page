import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  badge: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Badge variant="secondary">{badge}</Badge>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

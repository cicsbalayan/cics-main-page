import { cn } from "@/lib/utils"

type SectionSkeletonProps = {
  className?: string
  cardCount?: number
}

export function SectionSkeleton({
  className,
  cardCount = 3,
}: SectionSkeletonProps) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-4">
          <div className="h-6 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-9 w-64 max-w-full animate-pulse rounded-lg bg-muted" />
          <div className="h-4 w-96 max-w-full animate-pulse rounded-md bg-muted" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: cardCount }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-2xl border border-border/60 bg-card p-4"
            >
              <div className="aspect-[16/10] rounded-xl bg-muted" />
              <div className="mt-4 space-y-3">
                <div className="h-4 w-3/4 rounded-md bg-muted" />
                <div className="h-4 w-1/2 rounded-md bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

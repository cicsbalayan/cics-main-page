import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { announcements, site } from "@/data"
import {
  RiArrowLeftLine,
  RiCalendarEventLine,
  RiUserStarLine,
} from "@remixicon/react"

type AnnouncementPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return announcements.map((announcement) => ({ slug: announcement.slug }))
}

export async function generateMetadata({
  params,
}: AnnouncementPageProps): Promise<Metadata> {
  const { slug } = await params
  const announcement = announcements.find((a) => a.slug === slug)

  if (!announcement) return {}

  return {
    title: announcement.title,
    description: announcement.excerpt,
  }
}

export default async function AnnouncementPage({
  params,
}: AnnouncementPageProps) {
  const { slug } = await params
  const announcement = announcements.find((a) => a.slug === slug)

  if (!announcement) notFound()

  return (
    <div className="relative isolate min-h-svh overflow-x-clip">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-linear-to-br from-primary/20 via-primary-2/15 to-primary-3/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-linear-to-tr from-primary-2/20 to-primary-3/10 blur-3xl" />
      </div>
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <Link
            href="/#announcements"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <RiArrowLeftLine className="size-4" />
            {site.announcements.backLabel}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge>{announcement.category}</Badge>
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              <RiCalendarEventLine className="size-4" />
              {announcement.date}
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              <RiUserStarLine className="size-4" />
              {announcement.author}
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {announcement.title}
          </h1>
          <p className="mt-4 text-lg font-medium text-pretty text-foreground/90">
            {announcement.excerpt}
          </p>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-4xl ring-1 ring-foreground/10">
            <Image
              src={announcement.image}
              alt={announcement.title}
              fill
              sizes="(max-width: 768px) 100vw, 48rem"
              loading="eager"
              fetchPriority="high"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-primary-2/30 via-transparent to-transparent"
            />
          </div>

          <div className="mt-10 flex flex-col gap-5 text-base leading-relaxed">
            <p className="text-muted-foreground">{announcement.body}</p>
            <p className="text-sm text-muted-foreground">
              {site.announcements.footer}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

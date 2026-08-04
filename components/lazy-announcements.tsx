"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

import { SectionSkeleton } from "@/components/section-skeleton"

const Announcements = dynamic(() =>
  import("@/components/announcements").then((mod) => mod.Announcements)
)

export function LazyAnnouncements() {
  return (
    <Suspense fallback={<SectionSkeleton cardCount={3} />}>
      <Announcements />
    </Suspense>
  )
}

import { Suspense } from "react"
import dynamic from "next/dynamic"

import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Services } from "@/components/services"
import { Officers } from "@/components/officers"
import { LazyAnnouncements } from "@/components/lazy-announcements"
import { SectionSkeleton } from "@/components/section-skeleton"

const Works = dynamic(() => import("@/components/works").then((mod) => mod.Works))
const Cta = dynamic(() => import("@/components/cta").then((mod) => mod.Cta))
const Footer = dynamic(() =>
  import("@/components/footer").then((mod) => mod.Footer)
)

export default function Page() {
  return (
    <div className="relative isolate min-h-svh overflow-x-clip">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-linear-to-br from-primary/20 via-primary-2/15 to-primary-3/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-linear-to-tr from-primary-2/20 to-primary-3/10 blur-3xl" />
        <div className="absolute top-2/3 left-1/3 h-72 w-72 rounded-full bg-linear-to-b from-primary-3/10 to-primary-2/15 blur-3xl" />
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Programs />
        <Services />
        <LazyAnnouncements />
        <Suspense fallback={<SectionSkeleton cardCount={3} />}>
          <Works />
        </Suspense>
        <Officers />
        <Suspense fallback={<SectionSkeleton cardCount={1} />}>
          <Cta />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

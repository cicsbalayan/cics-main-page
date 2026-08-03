import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Announcements } from "@/components/announcements"
import { Works } from "@/components/works"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Programs />
        <Announcements />
        <Works />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

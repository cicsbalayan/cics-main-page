import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { services, site } from "@/data"
import type { Service } from "@/lib/types"

type ServicesProps = {
  items?: Service[]
}

export function Services({ items = services }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            badge={site.services.badge}
            title={site.services.title}
            description={site.services.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 100}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

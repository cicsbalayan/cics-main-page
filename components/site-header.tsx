"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { navLinks, college, site, links } from "@/data"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import { buttonVariants } from "@/components/ui/button"

function Logo() {
  return (
    <a href={links.sections.home} className="flex items-center gap-2.5">
      <Image
        src="/cics_logo-removebg.png"
        alt={`${college.shortName} logo`}
        width={36}
        height={36}
        loading="eager"
        priority
        className="size-9 object-contain [filter:drop-shadow(0_0_8px_color-mix(in_oklch,var(--primary)_50%,transparent))]"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-sm font-semibold">
          {college.shortName}
        </span>
        <span className="text-[11px] text-muted-foreground">
          {site.header.logoTagline}
        </span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-primary-2/60 after:to-transparent">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={links.sections.contact}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden md:inline-flex"
            )}
          >
            {site.header.join}
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={links.sections.contact}
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "w-full")}
              >
                {site.header.join}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

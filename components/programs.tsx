"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { programs, site } from "@/data"
import type { CurriculumSemester, Program } from "@/lib/types"
import {
  RiBookOpenLine,
  RiCloseLine,
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiSmartphoneLine,
} from "@remixicon/react"

const programIcons = {
  code: RiCodeSSlashLine,
  database: RiDatabase2Line,
  network: RiGlobalLine,
  device: RiSmartphoneLine,
} as const

function CurriculumTable({ sem }: { sem: CurriculumSemester }) {
  if (sem.courses.length === 0) return null

  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 rounded-xl bg-primary/10 px-4 py-2 ring-1 ring-primary/20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">
          {sem.year}
        </p>
        <p className="font-heading text-sm font-bold text-foreground">
          {sem.semester}
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl ring-1 ring-border scrollbar-hide">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border bg-muted/60">
              <th className="px-3 py-2 text-left font-semibold text-muted-foreground">Code</th>
              <th className="px-3 py-2 text-left font-semibold text-muted-foreground">Course Title</th>
              <th className="px-3 py-2 text-center font-semibold text-muted-foreground">Units</th>
              <th className="px-3 py-2 text-center font-semibold text-muted-foreground">Lec</th>
              <th className="px-3 py-2 text-center font-semibold text-muted-foreground">Lab</th>
              <th className="px-3 py-2 text-left font-semibold text-muted-foreground">Prerequisite</th>
            </tr>
          </thead>
          <tbody>
            {sem.courses.map((course, i) => (
              <tr
                key={course.code}
                className={
                  i % 2 === 0
                    ? "border-b border-border/50"
                    : "border-b border-border/50 bg-muted/20"
                }
              >
                <td className="whitespace-nowrap px-3 py-2 font-mono font-semibold text-primary">{course.code}</td>
                <td className="px-3 py-2 text-foreground/90">{course.title}</td>
                <td className="px-3 py-2 text-center text-muted-foreground">{course.units}</td>
                <td className="px-3 py-2 text-center text-muted-foreground">{course.lec}</td>
                <td className="px-3 py-2 text-center text-muted-foreground">{course.lab}</td>
                <td className="whitespace-nowrap px-3 py-2 text-muted-foreground">{course.prerequisite ?? "—"}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-primary/5 font-semibold">
              <td colSpan={2} className="px-3 py-2 text-right text-foreground/70">TOTAL</td>
              <td className="px-3 py-2 text-center text-foreground">{sem.totalUnits}</td>
              <td className="px-3 py-2 text-center text-foreground">{sem.totalLec}</td>
              <td className="px-3 py-2 text-center text-foreground">{sem.totalLab}</td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

type ProgramsProps = {
  items?: Program[]
}

export function Programs({ items = programs }: ProgramsProps) {
  const program = items[0]
  const Icon = programIcons[program.icon]

  return (
    <section className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            badge={site.programs.badge}
            title={site.programs.title}
            description={site.programs.description}
          />
        </Reveal>

        <div className="mt-12">
          <Reveal delay={100}>
            <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Left: icon + title + description */}
                <div className="flex flex-col gap-4 sm:max-w-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/30 via-primary/20 to-primary-2/30 text-primary-foreground shadow-[0_0_20px_-6px] shadow-primary/40">
                      <Icon />
                    </div>
                    <Badge>{program.code}</Badge>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-balance">
                    {program.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </div>

                {/* Right: View Curriculum button */}
                <div className="shrink-0">
                  <Dialog>
                    <DialogTrigger render={<Button size="lg" className="w-full gap-2 sm:w-auto" />}>
                      <RiBookOpenLine className="size-4" />
                      View Curriculum
                    </DialogTrigger>

                    {/*
                      showCloseButton={false} — we manage our own sticky close button
                      No overflow on DialogContent itself — the inner div scrolls instead
                    */}
                    <DialogContent
                      showCloseButton={false}
                      className="flex max-h-[85vh] w-[95vw] max-w-6xl flex-col gap-0 overflow-hidden p-0"
                    >
                      {/* Sticky header with close button */}
                      <div className="flex items-start justify-between border-b border-border px-5 py-4 sm:px-6">
                        <div className="flex flex-col gap-0.5">
                          <h2 className="font-heading text-lg font-bold">
                            {program.code} — Curriculum
                          </h2>
                          <p className="text-xs text-muted-foreground">
                            New Curriculum · AY 2025–2026
                          </p>
                        </div>
                        <DialogClose
                          render={
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              className="shrink-0 bg-secondary"
                            />
                          }
                        >
                          <RiCloseLine />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                      </div>

                      {/* Scrollable body */}
                      <div className="overflow-y-auto scrollbar-hide px-5 py-4 sm:px-6">
                        {program.curriculum.map((sem, i) => (
                          <CurriculumTable key={i} sem={sem} />
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

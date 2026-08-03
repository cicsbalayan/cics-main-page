"use client"

import * as React from "react"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const revealVariants = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  scale: "scale-95",
  fade: "",
} as const

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: keyof typeof revealVariants
  as?: React.ElementType
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "reveal-target transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity]",
        inView
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : cn("opacity-0", revealVariants[variant]),
        className
      )}
    >
      {children}
    </Tag>
  )
}

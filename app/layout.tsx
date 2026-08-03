import { Geist_Mono, Raleway } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "CICS — College of Informatics and Computing Sciences",
    template: "%s | CICS BSU Balayan",
  },
  description:
    "Official landing page of the College of Informatics and Computing Sciences — Batangas State University, The National Engineering University, Balayan Campus.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        fontMono.variable,
        raleway.variable
      )}
    >
      <body>{children}</body>
    </html>
  )
}

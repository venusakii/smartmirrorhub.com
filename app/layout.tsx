import type React from "react"
import { Exo_2, Inter, Rubik } from "next/font/google"
import "./globals.css"

const exo = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-exo",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  variable: "--font-rubik",
  weight: ["300", "400", "500"],
})

export const metadata = {
  title: "SmartMirrorX - Отражение интеллекта",
  description: "Умные зеркала с подсветкой, сенсорным дисплеем и голосовым управлением",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${exo.variable} ${inter.variable} ${rubik.variable}`}>
      <body>{children}</body>
    </html>
  )
}

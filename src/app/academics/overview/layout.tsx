import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Academic Excellence Overview | SPEC Campus - Leading Educational Institution",
  description: "Discover SPEC Campus's comprehensive academic framework featuring 19+ programs across 7 institutes, innovative teaching practices, and industry-aligned curriculum designed for career success.",
  keywords: "SPEC Campus academics, academic programs, teaching practices, evaluation system, institutes, engineering, pharmacy, management, commerce, applied sciences, education",
  openGraph: {
    title: "Academic Excellence Overview | SPEC Campus",
    description: "Comprehensive academic framework with 19+ programs across 7 institutes featuring innovative teaching and industry integration.",
    type: "website",
    url: "https://spec.edu.in/academics/overview",
  },
}

export default function AcademicsOverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
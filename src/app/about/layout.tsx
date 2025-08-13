import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | About SPEC Campus",
    default: "About SPEC Campus - Leadership, Values & Recognition"
  },
  description: "Learn about SPEC Campus leadership, values, vision, mission, and achievements. Discover what makes us a leading educational institution in Gujarat."
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
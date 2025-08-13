import React from "react"
import HomePage from "@/components/HomePage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SPEC Campus - Home | Top Engineering & Pharmacy College in Gujarat",
  description: "Welcome to SPEC Campus Gujarat - Leading institution offering Engineering, Pharmacy, Management and other programs with 100% placement assistance and industry partnerships.",
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <HomePage />
    </main>
  )
}

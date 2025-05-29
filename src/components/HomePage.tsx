"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { RankingBanner } from "@/components/home/RankingBanner"
import { NotificationBell } from "@/components/home/NotificationBell"
import { ScrollToTop } from "@/components/home/ScrollToTop"
import { Chatbot } from "@/components/home/Chatbot"
import { StatsSection, SpecScalarSection } from "@/components/home/StatsSection"
import { PlacementsOverview, PlacementStats, WhyChooseSection, StudentsSpeak, PioneeringResearch, NewsEvents } from "@/components/home/AdditionalSections"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 relative">
        <HeroSection />
        <RankingBanner />
        <StatsSection />
        <SpecScalarSection />
        <PlacementsOverview />
        <PlacementStats />
        <WhyChooseSection />
        <StudentsSpeak />
        <PioneeringResearch />
        <NewsEvents />
      </main>

      <Footer />
      <NotificationBell />
      <ScrollToTop />
      <Chatbot />
    </div>
  )
}

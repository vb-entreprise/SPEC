"use client"

import ProgramHero from '@/components/ui/ProgramHero'
import { useState } from 'react'
import { Header } from '@/components/layout/Header'

export default function BEEEPage() {
  const [activeTab, setActiveTab] = useState('about-department')

  const programHighlights = [
    "AICTE Approved & NBA Accredited",
    "Industry-Integrated Curriculum",
    "100% Placement Assistance",
    "Modern Electrical Labs"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Modern Hero Section */}
      <ProgramHero
        icon="/images/icons/electrical.svg"
        programType="B.Tech Program"
        duration="4 Years • Full Time"
        title="Electrical Engineering"
        description="Learn about power systems, control systems, and electrical machines to power the world of tomorrow."
        highlights={programHighlights}
        bgImage="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=800&fit=crop"
      />

      {/* Tab Navigation and Content */}
      {/* ...existing tab navigation and content here, starting with the tab bar... */}
      {/* (Move all tab navigation and content below the hero section) */}
      {/* ...rest of the file remains unchanged... */}
    </div>
  )
} 
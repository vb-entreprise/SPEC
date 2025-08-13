"use client"

import React from "react"
import Image from "next/image"

interface ProgramHeroProps {
  icon: string
  programType?: string
  duration?: string
  title: string
  description: string
  highlights?: string[]
  bgImage?: string
  onApply?: () => void
  onDownload?: () => void
}

export default function ProgramHero({
  icon,
  programType = "B.Tech Program",
  duration = "4 Years • Full Time",
  title,
  description,
  highlights = [],
  bgImage = "/images/hero-bg.jpg",
  onApply,
  onDownload,
}: ProgramHeroProps) {
  return (
    // STANDARD SPACING: pt-24 (14rem) ensures consistent header clearance across all program pages
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage} 
          alt="Program Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-purple-800/80" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Program Info */}
        <div className="flex-1 text-white max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image src={icon} alt={title} width={40} height={40} className="object-contain" />
            </div>
            <div>
              <div className="text-sm font-medium opacity-80">{programType}</div>
              <div className="text-xs opacity-60">{duration}</div>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl mb-6 opacity-90 max-w-xl">{description}</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-orange-400"></span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={onApply}
            >
              Apply Now
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={onDownload}
            >
              Download Brochure
            </button>
          </div>
        </div>
        {/* Right: Quick Inquiry Form */}
        <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-8 ml-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Academic Level</option>
              <option value="ug">Undergraduate</option>
              <option value="pg">Postgraduate</option>
              <option value="phd">PhD</option>
            </select>
            <textarea
              placeholder="Message (Optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={2}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 
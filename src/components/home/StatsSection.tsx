"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type StatProps = {
  number: string
  title: string
  subtitle?: string
}

const StatCard = ({ number, title, subtitle }: StatProps) => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0 flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-[#1f425c] mb-1">{number}</h3>
        <p className="text-gray-700 font-medium text-sm mb-1">{title}</p>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </CardContent>
    </Card>
  )
}

export const StatsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [eventSlide, setEventSlide] = useState(0)
  
  const cards = [
    {
      type: 'video' as const,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      title: 'भारत से जुडिये हे CHANDIGARH UNIVERSITY',
      hasPlayButton: true
    },
    {
      type: 'achievement' as const,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      title: 'MA Student Sakshi Sharma wins GOLD Medal at the 6th Asian Kabaddi Championship held in Iran'
    },
    {
      type: 'achievement' as const,
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
      title: 'CU Achieves Top Rank & Overall Championship at 38th All India Inter University National Youth Festival'
    },
    {
      type: 'achievement' as const,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      title: 'CU Becomes the First Ever University to Win the Most Prestigious Bharat Ratna Dr. APJ Abdul Kalam Award'
    }
  ]

  const events = [
    {
      title: 'Annual Tech Fest 2025',
      date: 'March 15-17, 2025',
      description: 'Join us for the biggest technology festival featuring competitions, workshops, and exhibitions.',
      time: '9:00 AM onwards'
    },
    {
      title: 'International Conference on AI',
      date: 'April 5-7, 2025',
      description: 'Explore the latest in Artificial Intelligence with renowned speakers from around the world.',
      time: '10:00 AM - 6:00 PM'
    },
    {
      title: 'Cultural Night 2025',
      date: 'February 28, 2025',
      description: 'Experience diverse cultures through music, dance, and performances by students.',
      time: '7:00 PM onwards'
    },
    {
      title: 'Career Fair 2025',
      date: 'May 12-13, 2025',
      description: 'Meet top recruiters and explore career opportunities across various industries.',
      time: '10:00 AM - 5:00 PM'
    }
  ]

  const cardsPerView = 3
  const maxSlide = Math.max(0, cards.length - cardsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const nextEvent = () => {
    setEventSlide((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setEventSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  // Auto-rotate events every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(nextEvent, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="py-8 bg-[#0b578a] text-white relative pb-16 md:pb-48">
        <div className="cu-container">
          <h2 className="text-center text-3xl font-semibold mb-8">An Illustrious Legacy we continue to Shape</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-center text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-1">154+</span>
              <span className="text-sm uppercase">Programs</span>
              <span className="text-xs mt-1">Industry Oriented Academic Programs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-1">980+</span>
              <span className="text-sm uppercase">Students</span>
              <span className="text-xs mt-1">Top-Tier Mentorship</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-1">1350+</span>
              <span className="text-sm uppercase">Faculty</span>
              <span className="text-xs mt-1">Dedicated Faculty</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-1">300+</span>
              <span className="text-sm uppercase">Faculty</span>
              <span className="text-xs mt-1">Renowned Faculty</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-1">100000+</span>
              <span className="text-sm uppercase">Alumni</span>
              <span className="text-xs mt-1">Accomplished Alumni Across the Globe</span>
            </div>
          </div>

          {/* Carousel section positioned absolutely to span blue and white areas */}
          <div className="absolute left-0 right-0 top-[320px] md:top-[280px] z-10">
            <div className="cu-container">
              <div className="hidden md:flex gap-6">
                {/* Main Cards Carousel - Shows 3 cards - Hidden on mobile */}
                <div className="flex-1 relative">
                  <div className="overflow-hidden rounded-lg">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out gap-4"
                      style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
                    >
                      {cards.map((card, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / cardsPerView}%` }}>
                          <div className="px-2">
                            <div className="relative group cursor-pointer rounded-lg overflow-hidden" style={{ height: '345px', width: '100%' }}>
                              {card.image && (
                                <Image
                                  src={card.image}
                                  alt={card.title}
                                  fill
                                  className="object-cover"
                                />
                              )}
                              {card.hasPlayButton && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  </div>
                                </div>
                              )}
                              {card.type === 'achievement' && (
                                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                  ACHIEVEMENTS
                                </div>
                              )}
                              <div className="absolute bottom-2 left-2 right-2">
                                <p className="text-white text-xs font-medium line-clamp-2">{card.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation arrows for main carousel */}
                  {currentSlide > 0 && (
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                  )}
                  {currentSlide < maxSlide && (
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  )}

                  {/* Indicators for main carousel */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentSlide === index 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Upcoming Events Card with Internal Slideshow - Desktop only */}
                <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-lg" style={{ height: '345px', width: '370px' }}>
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-white text-lg uppercase">Upcoming Events</h3>
                      <div className="flex space-x-1">
                        <button
                          onClick={prevEvent}
                          className="text-white/70 hover:text-white p-1 rounded"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                          </svg>
                        </button>
                        <button
                          onClick={nextEvent}
                          className="text-white/70 hover:text-white p-1 rounded"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-hidden">
                      <div 
                        className="h-full transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateY(-${eventSlide * 100}%)` }}
                      >
                        {events.map((event, index) => (
                          <div key={index} className="h-full flex flex-col justify-center">
                            <div className="text-white">
                              <h4 className="font-bold text-xl mb-2">{event.title}</h4>
                              <div className="flex items-center mb-2 text-purple-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                  <line x1="16" y1="2" x2="16" y2="6"/>
                                  <line x1="8" y1="2" x2="8" y2="6"/>
                                  <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                <span className="text-sm">{event.date}</span>
                              </div>
                              <div className="flex items-center mb-3 text-purple-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                                  <circle cx="12" cy="12" r="10"/>
                                  <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span className="text-sm">{event.time}</span>
                              </div>
                              <p className="text-sm leading-relaxed text-purple-100">{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Event indicators */}
                    <div className="flex justify-center space-x-2 mt-4">
                      {events.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setEventSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            eventSlide === index 
                              ? 'bg-white' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Show only upcoming events - Outside absolute positioning to avoid overlap */}
        <div className="md:hidden mt-8">
          <div className="cu-container">
            <div className="flex justify-center">
              <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-lg w-full max-w-sm" style={{ height: '345px' }}>
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-white text-base uppercase">Upcoming Events</h3>
                    <div className="flex space-x-1">
                      <button
                        onClick={prevEvent}
                        className="text-white/70 hover:text-white p-1 rounded"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                      </button>
                      <button
                        onClick={nextEvent}
                        className="text-white/70 hover:text-white p-1 rounded"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-hidden">
                    <div 
                      className="h-full transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateY(-${eventSlide * 100}%)` }}
                    >
                      {events.map((event, index) => (
                        <div key={index} className="h-full flex flex-col justify-center">
                          <div className="text-white">
                            <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                            <div className="flex items-center mb-2 text-purple-200">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                              </svg>
                              <span className="text-sm">{event.date}</span>
                            </div>
                            <div className="flex items-center mb-3 text-purple-200">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                              </svg>
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <p className="text-sm leading-relaxed text-purple-100">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Event indicators */}
                  <div className="flex justify-center space-x-2 mt-3">
                    {events.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setEventSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          eventSlide === index 
                            ? 'bg-white' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* White section to provide background for the bottom part of the cards */}
      <section className="pt-16 md:pt-48 pb-12 bg-white">
        <div className="cu-container">
          {/* This space is occupied by the absolutely positioned carousel */}
        </div>
      </section>
    </>
  )
}

// SPEC SCALAR Component
export const SpecScalarSection = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [counters, setCounters] = React.useState<{ [key: number]: number }>({})

  const scalarStats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
        </svg>
      ),
      number: 7,
      label: "Institute"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
        </svg>
      ),
      number: 2,
      label: "NAAC Accredited Institutes"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      number: 19,
      suffix: "+",
      label: "Program"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      ),
      number: 300,
      suffix: "+",
      label: "Faculties"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      number: 300,
      suffix: "+",
      label: "MOU"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8"/>
        </svg>
      ),
      number: 75,
      suffix: "%",
      label: "Placement (%)"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
      number: 3500,
      suffix: "+",
      label: "Students"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
        </svg>
      ),
      number: 500,
      suffix: "+",
      label: "Workshop & Seminar"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      ),
      number: 20,
      suffix: "+",
      label: "Patent"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      number: 100,
      suffix: "+",
      label: "Book Publication"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      number: 330,
      suffix: "+",
      label: "Conference Proceeding"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      number: 700,
      suffix: "+",
      label: "Research Paper Publication"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
      number: 12000,
      suffix: "+",
      label: "Alumni"
    }
  ]

  // Intersection Observer to trigger animation when section comes into view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('spec-scalar-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [isVisible])

  // Counter animation effect
  React.useEffect(() => {
    if (!isVisible) return

    scalarStats.forEach((stat, index) => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = stat.number / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(timer)
        }
        setCounters(prev => ({ ...prev, [index]: Math.floor(current) }))
      }, duration / steps)
    })
  }, [isVisible])

  return (
    <section id="spec-scalar-section" className="py-16 bg-white">
      <div className="cu-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-2">SPEC SCALAR</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {scalarStats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="text-orange-500 group-hover:text-orange-600 transition-colors">
                  {stat.icon}
                </div>
              </div>
              
              {/* Number - Made prominent like in the image */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-semibold text-orange-500">
                  {isVisible ? (counters[index] || 0).toLocaleString() : 0}
                </span>
                {stat.suffix && (
                  <span className="text-3xl md:text-4xl font-semibold text-orange-500 ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              
              {/* Label - Made subtle like in the image */}
              <p className="text-sm text-gray-600 font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
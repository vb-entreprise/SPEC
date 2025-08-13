'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export const SpecScalarSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState<{ [key: number]: number }>({})

  const stats = [
    {
      value: '7',
      label: 'Institutes',
      description: 'Leading Academic Institutes'
    },
    {
      value: '2',
      label: 'NAAC Accredited Institutes',
      description: 'Excellence in Education'
    },
    {
      value: '19+',
      label: 'Programs',
      description: 'Diverse Academic Programs'
    },
    {
      value: '300+',
      label: 'Faculties',
      description: 'Expert Teaching Staff'
    },
    {
      value: '300+',
      label: 'MOUs',
      description: 'Global Partnerships'
    },
    {
      value: '75%',
      label: 'Placement',
      description: 'Career Success Rate'
    },
    {
      value: '3,500+',
      label: 'Students',
      description: 'Current Enrollment'
    },
    {
      value: '500+',
      label: 'Workshops & Seminars',
      description: 'Learning Opportunities'
    },
    {
      value: '20+',
      label: 'Patents',
      description: 'Innovation & Research'
    },
    {
      value: '100+',
      label: 'Book Publications',
      description: 'Academic Contributions'
    },
    {
      value: '330+',
      label: 'Conference Proceedings',
      description: 'Research Presentations'
    },
    {
      value: '700+',
      label: 'Research Papers',
      description: 'Scholarly Publications'
    },
    {
      value: '12,000+',
      label: 'Alumni',
      description: 'Global Network'
    }
  ]

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('spec-scalar-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [isVisible])

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return

    stats.forEach((stat, index) => {
      const value = parseInt(stat.value.replace(/[^0-9]/g, ''))
      if (isNaN(value)) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          current = value
          clearInterval(timer)
        }
        setCounters(prev => ({ ...prev, [index]: Math.floor(current) }))
      }, duration / steps)

      return () => clearInterval(timer)
    })
  }, [isVisible])

  const formatValue = (index: number, originalValue: string) => {
    if (!isVisible) return '0'
    const value = counters[index] || 0
    const suffix = originalValue.match(/[^0-9]+$/)?.[0] || ''
    return value.toLocaleString() + suffix
  }

  const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => (
    <div className="bg-[#F8F8F8] p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white group cursor-pointer">
      <span className="text-[#FF6B00] text-3xl font-bold mb-2 transition-all duration-300 group-hover:text-4xl">
        {formatValue(index, stat.value)}
      </span>
      <span className="text-gray-800 font-medium text-sm mb-1 group-hover:text-[#FF6B00] transition-colors duration-300">
        {stat.label}
      </span>
      <span className="text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {stat.description}
      </span>
    </div>
  )

  return (
    <section id="spec-scalar-section" className="py-16 bg-white">
      <div className="cu-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#FF6B00] mb-2 transform transition-all duration-500 hover:scale-110">
            SPEC SCALAR
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {stats.slice(0, 10).map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
        {/* Last row centered */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-w-3xl mx-auto">
          {stats.slice(10).map((stat, index) => (
            <StatCard key={index + 10} stat={stat} index={index + 10} />
          ))}
        </div>
      </div>
    </section>
  )
} 
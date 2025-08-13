"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function OverviewPage() {
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll events for first section animation only
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrollY(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate the position of the white bar for first section only
  const getFirstSectionBarPosition = () => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return 'translateX(0%)'
    
    const windowHeight = window.innerHeight
    const sectionProgress = Math.min(scrollY / windowHeight, 1) // Clamp to 1
    
    // First section: start center, move to right
    const translateX = sectionProgress * 50 // Move from center (0%) to right (50%)
    return `translateX(${translateX}%)`
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Section 1: Best Student Friendly University - Blue Background with animated bar */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop"
              alt="Students Background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* Animated white content bar for first section */}
          <div className="relative z-10 cu-container flex items-center justify-center min-h-screen py-20">
            <div 
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg text-center transition-transform duration-1000 ease-out"
              style={{
                transform: getFirstSectionBarPosition(),
              }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                BEST STUDENT
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                FRIENDLY
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                UNIVERSITY
              </h3>
              <p className="text-sm text-gray-600 mb-2">By SPEC Campus</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                SPEC Campus is a full-fledged university established by the Gujarat State Legislature and is recognized by University Grants Commission under Section 2(f) with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: About SPEC Campus - Purple Background with static content */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-500 to-purple-700 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop"
              alt="University Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          
          {/* Content - Positioned Left with static white box */}
          <div className="relative z-10 cu-container flex items-center min-h-screen py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              {/* Left side - bullet points */}
              <div className="text-white space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• The name reflects the legacy of Sardar Vallabhbhai Patel, the Iron Man of India, symbolizing unity, excellence, and nation-building.</li>
                  <li>• SPEC offers a future-ready academic model that balances theoretical foundations with hands-on, real-world learning.</li>
                  <li>• Our institutions are committed to interdisciplinary education, pairing flexibility with innovation across 30+ programs.</li>
                  <li>• SPEC consistently produces research-backed outcomes and maintains academic excellence across all its colleges.</li>
                  <li>• A vibrant faculty team includes PhDs, industry professionals, and researchers from across India.</li>
                  <li>• We maintain a favorable student-faculty ratio, leading to strong mentoring relationships and high student satisfaction.</li>
                  <li>• SPEC provides global exposure through industry tie-ups, internships, and skill-building programs with 50+ companies.</li>
                  <li>• Students represent diverse regions of Gujarat and neighboring states, fostering a multicultural, inclusive environment.</li>
                  <li>• Our campus operates on a student-first philosophy, integrating career training, soft skills, and academic guidance.</li>
                  <li>• SPEC integrates modern digital infrastructure, from smart classrooms to LMS, ERP, biometric systems, and high-speed Wi-Fi.</li>
                  <li>• We are a self-financed, not-for-profit institution, reinvesting in faculty, labs, placements, and student development.</li>
                </ul>
              </div>
              
              {/* Right side - static white content box */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                  About SPEC Campus
                </h1>
                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                  Sardar Patel Education Campus (SPEC), located in the academic heartland of Bakrol, Anand (Gujarat), is a premier integrated campus offering excellence in higher education. Affiliated with both Gujarat Technological University (GTU) and Sardar Patel University (SPU), SPEC has earned a reputation for delivering career-focused, values-driven academic programs.

                  SPEC is home to eight institutions across domains like Management (MBA, BBA), Pharmacy (B.Pharm, M.Pharm, Pharm D), Engineering (B.E.), Commerce, Computer Applications (BCA), Education (B.Ed), and Science. The campus is approved by top accrediting bodies such as AICTE, PCI, and NCTE, and has emerged as one of Gujarat's fastest-growing education hubs.

                  With a sharp focus on innovation, entrepreneurship, and academic depth, SPEC nurtures students into industry-ready professionals and socially responsible citizens. Our programs are powered by experienced faculty, dynamic pedagogy, and partnerships with leading corporates including Airtel, Blue Dwarf, NJ Wealth, Infinium, and DMart.

                  At SPEC, education goes beyond textbooks. Through skill development cells, foreign language training, placement guidance, digital transformation initiatives, and cultural clubs, students are equipped to lead in both global careers and community life. We are committed to shaping individuals who combine intellect with impact — bridging knowledge with purpose.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                  EXPLORE MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: SPEC Campus Recognised - Red Background */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop"
              alt="Recognition Background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 cu-container flex items-center justify-between min-h-screen py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              {/* Left - Accreditation logos */}
              <div className="flex flex-col items-center space-y-8">
                {/* Circular arrangement of logos */}
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">SPEC</span>
                    </div>
                  </div>
                  {/* Surrounding logos */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">COA</span>
                  </div>
                  <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">IUCEE</span>
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">ACS</span>
                  </div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">IEEE</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">AACSB</span>
                  </div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">AICTE</span>
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">CII</span>
                  </div>
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">UGC</span>
                  </div>
                </div>
              </div>
              
              {/* Right - static white content box */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  SPEC Campus Recognised
                </h1>
                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                  SPEC Campus is recognized along with being an active 
                  member of various associations and international bodies.
                </p>
                
                {/* University logo */}
                <div className="mb-8">
                  <div className="mx-auto flex items-center justify-center">
                    <Image
                      src="https://www.ugc.gov.in/Content/images/MainPage/ugc.jpg"
                      alt="UGC Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Best Educational Institution - Orange/Yellow Background */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-yellow-400 to-orange-500 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=1080&fit=crop"
              alt="Educational Background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 cu-container flex items-center min-h-screen py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              {/* Left side - infographic */}
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-sm">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600 mb-4">Unprecedented Industry Partnerships</h3>
                  <p className="text-xs text-gray-600 mb-6">Unique, Inspiring Academic Model</p>
                  
                  {/* Chart/Graph representation */}
                  <div className="flex items-end justify-center space-x-2 mb-6">
                    <div className="w-8 h-12 bg-gray-300 rounded"></div>
                    <div className="w-8 h-16 bg-gray-400 rounded"></div>
                    <div className="w-8 h-20 bg-blue-500 rounded"></div>
                    <div className="w-8 h-24 bg-orange-500 rounded relative">
                      <svg className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14l3-3 3 3 5-5v4h4V9h-4l-1 1-4-4-3 3-4-4v6z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs text-gray-600">
                    <p>International Partnerships</p>
                    <p>Culturally Rich Diverse Student Life</p>
                  </div>
                </div>
              </div>
              
              {/* Right side - static white content box */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg ml-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                  Best Educational Institution
                </h1>
                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                  SPEC Campus is ranked among the Leading & Best 
                  Educational Institution in Gujarat. SPEC is constantly ranked 
                  among the top institutions of Gujarat for academic excellence, 
                  innovative pedagogy, research, and placements by reputed 
                  national and international accreditation bodies and media 
                  houses.
                  
                  SPEC Campus has become an indisputable leader in 
                  campus placements. The top-tier multinationals that visit us 
                  repeatedly stand as a testimony to the fact that SPEC has created a 
                  niche as the University with Best Placements in Gujarat.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Impeccable Placements - Green Background */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop"
              alt="Placements Background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 cu-container flex items-center justify-between min-h-screen py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              {/* Left side - placement stats */}
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Placement Highlights for Batch 2024-25
                </h2>
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">900+</h3>
                    <p className="text-green-200">Highest Number of Companies</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">9000+</h3>
                    <p className="text-green-200">Placement Offers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">1.7 CR</h3>
                    <p className="text-green-200">Highest International Package Offered</p>
                  </div>
                </div>
                <p className="text-green-100 text-sm">
                  Maintaining The Tradition Of Excellence, SPEC Registers 9000+ Placement Offers 
                  for Batch 2024-25 (Highest in Gujarat).
                </p>
              </div>
              
              {/* Right side - static white content box */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-lg ml-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  IMPECCABLE
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Placements
                </h2>
                <h3 className="text-xl font-bold text-gray-600 mb-8">
                  Batch 2024-25
                </h3>
                
                {/* Vertical text "HIGHLIGHTS" */}
                <div className="flex justify-center mb-8">
                  <div className="transform rotate-90 origin-center">
                    <span className="text-gray-400 font-bold tracking-widest text-sm">
                      HIGHLIGHTS
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                  Maintaining The Tradition Of Excellence, SPEC Registers 9000+ Placement Offers 
                  for Batch 2024-25 (Highest in Gujarat).
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                  VIEW PLACEMENTS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Our Top Recruiters - White Background */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Top Recruiters</h2>
              <p className="text-lg text-gray-600">
                Institutional alliances with Leading Companies to ensure a strong bonding with the industry and many more...
              </p>
            </div>

            {/* Company Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-8">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">Microsoft</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">amazon</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">IBM</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">:practo</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">SAP</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-8">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">Flipkart</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">gwynnie bee.</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">hp</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">ORACLE</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16">
                <span className="text-gray-600 font-semibold">Deloitte.</span>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16 w-32">
                <span className="text-gray-600 font-semibold">Capgemini</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-16 w-32">
                <span className="text-gray-600 font-semibold">Sapient</span>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                VIEW ALL
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
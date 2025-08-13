"use client"

import React, { useState } from "react"
import Image from "next/image"

// Placements Overview Component
export const PlacementsOverview = () => {
  const [currentPlacement, setCurrentPlacement] = React.useState(0)
  const [currentCompany, setCurrentCompany] = React.useState(0)

  const placements = [
    {
      name: "Ms. Vidhi Prajapati",
      company: "SPCAM-MBA",
      role: "Marketing",
      batch: "Batch 2023-2025",
      package: "8.5",
      currency: "LPA",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      background: "dark"
    },
    {
      name: "Gaurav Kumar",
      company: "Nutanix",
      role: "Software Engineer",
      package: "51.00",
      currency: "LPA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      background: "blue"
    },
    {
      name: "Priya Sharma",
      company: "Google",
      role: "Product Manager",
      package: "75.00",
      currency: "LPA",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      background: "dark"
    },
    {
      name: "Arjun Patel",
      company: "Microsoft",
      role: "Senior Developer",
      package: "2.1",
      currency: "CRORE",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      background: "blue"
    }
  ]

  const companies = [
    { name: "Torrecid", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/13%20Torrecid.jpg" },
    { name: "Torrent", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/14%20Torrent.jpg" },
    { name: "Amanta", logo: "https://spec.edu.in/specpharmacy/images/Recruitment_Logo/Amanta.jpg" },
    { name: "BYJU'S", logo: "https://spec.edu.in//images/Recruitment_Logo/BYJU'S.jpg" },
    { name: "AXIS Bank", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/AXIS%20Bank.jpg" },
    { name: "Bajaj Finserv", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/Bajaj%20Finserv.jpg" },
    { name: "Care Ratings", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/Care%20Ratings.jpg" },
    { name: "Cognixia", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/cognixia.jpg" },
    { name: "Collabera", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/Collabera.jpg" },
    { name: "Divya Bhaskar", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/Divya%20Bhaskar.jpg" },
    { name: "D-Mart", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/D-Mart.jpg" },
    { name: "HDFC", logo: "https://spec.edu.in/specmba/images/Recruitment_Logo/HDFC%20.jpg" }
  ]

  const nextPlacement = () => {
    setCurrentPlacement((prev) => (prev + 1) % placements.length)
  }

  const prevPlacement = () => {
    setCurrentPlacement((prev) => (prev - 1 + placements.length) % placements.length)
  }

  const nextCompany = () => {
    setCurrentCompany((prev) => (prev + 1) % Math.max(1, companies.length - 4))
  }

  const prevCompany = () => {
    setCurrentCompany((prev) => (prev - 1 + Math.max(1, companies.length - 4)) % Math.max(1, companies.length - 4))
  }

  // Auto-rotate placements every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(nextPlacement, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="cu-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Placements Overview</h2>
          <p className="text-xl text-gray-600">The World's Leading Companies Hire Our Talent</p>
        </div>

        {/* Placement Cards Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPlacement * 50}%)` }}
            >
              {placements.map((placement, index) => (
                <div key={index} className="w-1/2 flex-shrink-0 px-3">
                  <div className={`relative rounded-lg overflow-hidden h-96 ${
                    placement.background === 'dark' 
                      ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-800'
                  }`}>
                    {/* Student Image - Takes up right 60% of the card */}
                    <div className="absolute right-0 top-0 bottom-0 w-3/5">
                      <Image
                        src={placement.image}
                        alt={placement.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                      {/* Top Right - Salary Package */}
                      <div className="flex justify-end">
                        <div className="text-right">
                          <div className="text-4xl font-bold">₹{placement.package}</div>
                          <div className="text-lg font-semibold">{placement.currency}</div>
                          <div className="text-sm">Salary Package</div>
                        </div>
                      </div>
                      
                      {/* Bottom Left - Student Info */}
                      <div className="max-w-sm">
                        <h3 className="text-4xl font-bold text-orange-400 mb-2 leading-tight">{placement.name}</h3>
                        {placement.company === 'SPCAM-MBA' && (
                          <p className="text-base mb-2">Batch 2023-2025</p>
                        )}
                        <p className="text-base leading-relaxed">
                          {placement.company === 'SPCAM-MBA' ? 
                            `Placed in: ${placement.role}` : 
                            `${placement.company} (${placement.role})`
                          }
                        </p>
                        {placement.company === 'Nutanix' && (
                          <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold inline-block mt-3">
                            NUTANIX
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows for placements */}
          <button
            onClick={prevPlacement}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={nextPlacement}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Indicators for placements */}
          <div className="flex justify-center mt-6 space-x-2">
            {placements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPlacement(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPlacement === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCompany * 20}%)` }}
            >
              {companies.map((company, index) => (
                <div key={index} className="w-1/5 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow h-24 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={120}
                      height={60}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows for companies */}
          <button
            onClick={prevCompany}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={nextCompany}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

// Placement Statistics Component
export const PlacementStats = () => {
  return (
    <section className="py-16 bg-[#0b578a] text-white">
      <div className="cu-container">
        {/* Top Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">9000+</h3>
            <p className="text-lg">Placement<br />Offers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">900+</h3>
            <p className="text-lg">Company Visited<br />for Recruitment</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">54.75<span className="text-2xl">LPA</span></h3>
            <p className="text-lg">Highest National<br />Package Offered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">1.7<span className="text-2xl">CR</span></h3>
            <p className="text-lg">Highest International<br />Package Offered</p>
          </div>
        </div>

        {/* Salary Range Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          <div className="text-center border border-white/20 rounded-lg p-6">
            <h4 className="text-3xl font-bold mb-2">20<span className="text-lg">LPA</span></h4>
            <p className="text-sm">Package Offered by<br />50+ Companies</p>
          </div>
          <div className="text-center border border-white/20 rounded-lg p-6">
            <h4 className="text-3xl font-bold mb-2">15<span className="text-lg">LPA</span></h4>
            <p className="text-sm">Package Offered by<br />60+ Companies</p>
          </div>
          <div className="text-center border border-white/20 rounded-lg p-6">
            <h4 className="text-3xl font-bold mb-2">10<span className="text-lg">LPA</span></h4>
            <p className="text-sm">Package Offered by<br />200+ Companies</p>
          </div>
          <div className="text-center border border-white/20 rounded-lg p-6">
            <h4 className="text-3xl font-bold mb-2">7<span className="text-lg">LPA</span></h4>
            <p className="text-sm">Package Offered by<br />162 Companies</p>
          </div>
          <div className="text-center border border-white/20 rounded-lg p-6">
            <h4 className="text-3xl font-bold mb-2">5<span className="text-lg">LPA</span></h4>
            <p className="text-sm">Package Offered by<br />500+ Companies</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold text-lg transition-colors">
            APPLY TODAY
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-bold text-lg transition-colors">
            VIEW PLACEMENTS
          </button>
        </div>
      </div>
    </section>
  )
}

// Why Choose Section Component
export const WhyChooseSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: "High-Impact Networking Connections",
      description: "Connect with an extensive network of top CEOs, Nobel Laureates, eminent entrepreneurs, top scientists, industry innovators, and global academicians for collaboration, mentorship, and career advancement opportunities."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "Tech-driven collaborative and fluid learning environments",
      description: "Go beyond conventional learning approaches and engage in industry-embedded learning, contextualised problem-solving, immersive simulations, interactive digital platforms, and professional certifications that align with the pace of emerging industries and technologies."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "360-degree support in building a personal brand",
      description: "Carve out a niche in the professional arena by elevating your personal brand through leadership programs and personalised mentorship, gaining attributes like resilience, adaptability, and strategic foresight, and emerging as a goal-oriented individual."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      title: "Multi-Disciplinary University",
      description: "Immerse yourself in a multidisciplinary educational experience with 18 specialised schools, offering more than 140 programs across diverse domains, including engineering, management, sciences, law, hospitality, and more."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="cu-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Should You Choose SPEC Campus?</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our academic approach combines industry mentorship, global exposure, certifications, research opportunities, and capstone projects to provide experiential learning and a well-rounded education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 p-8 rounded-xl transition-all duration-500 hover:shadow-xl hover:bg-blue-600 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 text-gray-700 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-4 transition-colors duration-500 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Students Speak Component
export const StudentsSpeak = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="cu-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Students Speak</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover the inspiring stories and gain valuable insights straight from our accomplished graduates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Ashi Sharma - Naval Officer */}
          <div className="relative h-96 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg overflow-hidden">
            <div className="absolute right-4 top-4 bottom-4 w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                alt="Ashi Sharma"
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
              <div className="bg-red-600 px-4 py-3 rounded text-white inline-block self-start max-w-48">
                <div className="font-bold text-lg">Ashi Sharma</div>
                <div className="text-sm mt-1">Naval Officer</div>
              </div>

              <div className="max-w-md">
                <h3 className="text-lg font-bold leading-tight mb-4">
                  FROM AN ENGINEERING ENTHUSIAST TO A PROUD NAVAL OFFICER!
                </h3>
                <p className="text-sm leading-relaxed">
                  SPEC Campus has prepared me for a successful professional journey.
                </p>
              </div>
            </div>
          </div>

          {/* Arshdeep Singh - Cricketer */}
          <div className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden">
            <div className="absolute right-4 top-4 bottom-4 w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                alt="Arshdeep Singh"
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
              <div className="bg-red-600 px-4 py-3 rounded text-white inline-block self-start max-w-48">
                <div className="font-bold text-lg">Arshdeep Singh</div>
                <div className="text-sm mt-1">International Cricketer</div>
              </div>

              <div className="max-w-md">
                <h3 className="text-lg font-bold leading-tight mb-4">
                  FROM AN ASPIRING ATHLETE TO AN INTERNATIONAL CRICKETER
                </h3>
                <p className="text-sm leading-relaxed">
                  Lots of credit for my success in cricket goes to SPEC Campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pioneering Research Component
export const PioneeringResearch = () => {
  const [currentLab, setCurrentLab] = React.useState(0)

  const labs = [
    {
      name: "Colforge Lab",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      name: "Automobile Lab", 
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=400&fit=crop"
    },
    {
      name: "Biotech Lab",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop"
    },
    {
      name: "Robotics Lab",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
    }
  ]

  const researchStats = [
    {
      number: "15000+",
      description: "Publications in National &\nInternational Journals"
    },
    {
      number: "4300+", 
      description: "Patents filed by SPEC\nCampus Successfully"
    },
    {
      number: "200+",
      description: "Departmental Research\nGroups"
    },
    {
      number: "14+",
      description: "Industry-Collaborated\nCentres of Excellence"
    }
  ]

  const nextLab = () => {
    setCurrentLab((prev) => (prev + 1) % labs.length)
  }

  const prevLab = () => {
    setCurrentLab((prev) => (prev - 1 + labs.length) % labs.length)
  }

  return (
    <section className="py-16 bg-[#0b578a] text-white">
      <div className="cu-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Pioneering Research</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Create transformative solutions to global challenges through opportunities in government and industry-funded projects.
          </p>
        </div>

        {/* Research Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchStats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</h3>
              <p className="text-sm leading-relaxed whitespace-pre-line">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Labs Image Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentLab * (100/3)}%)` }}
            >
              {labs.map((lab, index) => (
                <div key={index} className="w-1/3 flex-shrink-0">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={lab.image}
                      alt={lab.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-white text-lg font-bold">{lab.name}</h4>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevLab}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={nextLab}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

// News and Events Component
export const NewsEvents = () => {
  const newsItems = [
    {
              title: "SPEC Campus Student Achieves National Recognition in Sports",
      description: "SPEC Campus alumnus achieves excellence in sports representing India at national and international levels...",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop",
      category: "ACHIEVEMENT"
    },
    {
              title: "SPEC Campus Achieves 5th Rank in GTU Engineering Category",
              description: "SPEC Engineering College secures 5th position among Gujarat's top engineering institutions...",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      category: "ACCREDITATION"
    },
    {
              title: "SPEC Alumni Develops Innovative Solutions for Social Impact",
              description: "SPEC Campus alumni excel in innovation and contribute to public service across various sectors...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      category: "INNOVATION"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="cu-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">News and Events</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From our students clinching global honors to the university soaring in national and international rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded font-bold">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {news.description}
                    </p>
                  </div>
                  
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-xs font-bold transition-colors self-start">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
"use client"

import React from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function SpecDynamicsPage() {
  const coreFeatures = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description: "World-class education standards"
    },
    {
      icon: "🏭",
      title: "Industry Patronage", 
      description: "Strong industry partnerships"
    },
    {
      icon: "🌍",
      title: "Global Exposure",
      description: "International opportunities"
    },
    {
      icon: "💼",
      title: "Choice Based Careers",
      description: "Diverse career pathways"
    },
    {
      icon: "🔬",
      title: "Research & Innovation",
      description: "Cutting-edge research facilities"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[42rem] overflow-hidden -mt-[120px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=800&fit=crop"
              alt="University Campus"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 cu-container h-full flex flex-col items-center text-white text-center pt-[320px]">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                SPEC Dynamics
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover what gives SPEC Campus students the competitive edge in today's dynamic world
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                APPLY NOW →
              </button>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="cu-container">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">HOME</a>
              <span className="mx-2">/</span>
              <a href="/about" className="hover:text-blue-600">ABOUT</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">SPEC DYNAMICS</span>
            </div>
          </div>
        </div>

        {/* Edge Banner */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4">
          <div className="cu-container">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                                  AS A MEMBER OF SPEC CAMPUS, YOU HAVE AN EDGE!
              </h2>
            </div>
          </div>
        </section>

        {/* Edge Sections */}
        <section className="py-12 bg-gray-50">
          <div className="cu-container">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
              
              {/* Edge with Industry Patronage */}
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-2xl font-bold">Edge with Industry Patronage</h3>
                  </div>
                  
                  <p className="text-yellow-100 mb-6 leading-relaxed">
                    Our significant corporate tie-ups coupled with continuous research and developmental 
                    activities of some the most qualified industry leaders. You will have continuous professional 
                    learning and exclusive opportunities to network and build connections with some of the most 
                    successful business leaders and industry leaders. You will have an edge through exposure to 
                    the corporate world via industrial Internships for learning and career advancement.
                  </p>
                  
                  <button className="bg-white text-yellow-600 px-6 py-2 rounded font-semibold hover:bg-yellow-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Edge with Academic Excellence */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-4 translate-y-4"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-2xl font-bold">Edge with Academic Excellence</h3>
                  </div>
                  
                  <p className="text-teal-100 mb-6 leading-relaxed">
                    SPEC Campus's academic model is designed in such a way that you will find personal 
                    growth opportunities with practical learning opportunities. Interactive learning 
                    and skill based practical curriculum ensures that you gain enriched 
                    knowledge of the real world.
                  </p>
                  
                  <button className="bg-white text-teal-600 px-6 py-2 rounded font-semibold hover:bg-teal-50 transition-colors">
                    Explore Programs
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
              
              {/* Edge with Choice Based Careers */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full transform translate-x-6 -translate-y-6"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="text-2xl font-bold">Edge with Choice Based Careers</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    SPEC Campus offers choice based Career opportunities for our graduates. 
                    As technology shifts and evolves, the future of work needs to adapt. With advanced 
                    learning and technologies, you are equipped to choose to shape your career.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold">500+</div>
                      <div className="text-xs">Career Options</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold">95%</div>
                      <div className="text-xs">Placement Rate</div>
                    </div>
                  </div>
                  
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded font-semibold transition-colors">
                    View Careers
                  </button>
                </div>
              </div>

              {/* Edge with Global Exposure */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-white opacity-10 rounded-full transform translate-x-8 translate-y-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h3 className="text-2xl font-bold">Edge with Global Exposure</h3>
                  </div>
                  
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    SPEC Campus has a Global Outlook and we believe that international 
                    connections for higher education are the catalyst for career advancement. 
                    Professionals. Our partnership with leading international universities has 
                    created a strong network to connect our students with global education.
                  </p>
                  
                  <div className="flex space-x-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-3 text-center flex-1">
                      <div className="text-lg font-bold">130+</div>
                      <div className="text-xs">Global Partners</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center flex-1">
                      <div className="text-lg font-bold">50+</div>
                      <div className="text-xs">Countries</div>
                    </div>
                  </div>
                  
                  <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition-colors">
                    Global Programs
                  </button>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="max-w-3xl mx-auto">
              {/* Edge with Return on Investment */}
              <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-6 -translate-y-6"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-8 translate-y-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-2xl font-bold">Edge with Return on Investment</h3>
                  </div>
                  
                  <p className="text-pink-100 mb-6 leading-relaxed">
                    University education is an investment in the future. With SPEC Campus, your investment in education will yield 
                    higher returns than any other investment. Our comprehensive approach to education, industry connections, 
                    and career support ensures that you get the best value for your money and time invested with us.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold">300%</div>
                      <div className="text-sm">Average ROI</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold">₹12L</div>
                      <div className="text-sm">Avg. Package</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold">2 Yrs</div>
                      <div className="text-sm">Payback Period</div>
                    </div>
                  </div>
                  
                  <button className="bg-white text-pink-600 px-6 py-2 rounded font-semibold hover:bg-pink-50 transition-colors">
                    Calculate ROI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SPEC Dynamics?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our unique approach to education combines academic excellence with industry relevance, 
                giving our students the competitive edge they need to succeed in today's dynamic world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation Hub</h3>
                <p className="text-gray-600 text-sm">State-of-the-art research facilities and innovation centers</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Industry Connect</h3>
                <p className="text-gray-600 text-sm">Strong partnerships with leading global corporations</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Focus</h3>
                <p className="text-gray-600 text-sm">Dedicated career development and placement support</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🌟</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">Commitment to academic and research excellence</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
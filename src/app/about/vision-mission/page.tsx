"use client"

import React from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function VisionMissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Banner Section */}
      <section className="relative h-[31rem] bg-gray-900 overflow-hidden -mt-[120px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=400&fit=crop"
            alt="SPEC Campus Background"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 cu-container h-full flex flex-col justify-start items-center text-white text-center pt-[320px] pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision and Mission</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors">
            APPLY NOW →
          </button>
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
            <span className="text-gray-900 font-medium">VISION AND MISSION</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12 bg-gray-50">
        <div className="cu-container">
          <div className="max-w-6xl mx-auto">
            
            {/* Page Title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our commitment to excellence in education, research, and innovation that drives us forward.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Vision Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-blue-100">
                    To be globally recognised as a Centre of Excellence for Research, Innovation and Academic pursuits and disseminating knowledge by providing transformational learning to serve the society.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-red-100 mb-4">
                    We are committed to providing transformational learning experiences through:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-red-100">Research, Innovation & Entrepreneurship</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-red-100">Nation building through quality education</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-red-100">Global collaborations & partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Details Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Mission in Detail</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Providing a conducive academic and ideal environment for Research, Innovation, Consultancy and Entrepreneurship relevant to the society.
                    </p>
                  </div>

                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Offering programs & courses in consonance with National policies for nation building and nurturing human values to prepare students as responsible citizens.
                    </p>
                  </div>

                  <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Ensuring students delight by receiving their aspirations through blended learning, corporate mentoring, industrial relevance in curriculum, social inclusion, and the fulfillment of human values.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Creating a scientific, transparent and objective examination/evaluation systems to ensure an ideal assessment process.
                    </p>
                  </div>

                  <div className="flex items-start p-4 bg-indigo-50 rounded-lg">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Establishing strategic relationships with leading national and international corporations and universities for academic as well as research collaborations.
                    </p>
                  </div>

                  <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Contributing for creation of healthy, vibrant and sustainable society by involving in Institutional Social Responsibility (ISR) activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Policy Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Quality Policy</h3>
                <p className="text-gray-300">Our commitment to excellence in every aspect</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Innovation</h4>
                  <p className="text-sm text-gray-300">Creative thinking & innovative applications</p>
                </div>

                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Academic Excellence</h4>
                  <p className="text-sm text-gray-300">Regular curriculum upgradation</p>
                </div>

                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Faculty Development</h4>
                  <p className="text-sm text-gray-300">Professional growth opportunities</p>
                </div>

                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-300">Continuous improvement process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 
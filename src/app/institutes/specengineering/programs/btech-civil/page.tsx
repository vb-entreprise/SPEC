"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function BTechCivilPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const programHighlights = [
    "AICTE Approved & NBA Accredited",
    "Smart Infrastructure Design",
    "Green Building Technology",
    "Advanced Survey Equipment",
    "Sustainable Construction Focus",
    "100% Placement Support"
  ]

  const placementStats = {
    placementRate: "94.5%",
    highestPackage: "₹24 LPA",
    averagePackage: "₹6.8 LPA",
    topRecruiters: ["L&T", "DLF", "Godrej", "Shapoorji", "Tata Projects", "Afcons", "HCC", "IRCON"]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[57rem] overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop"
              alt="Civil Engineering"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/80" />
          
          <div className="relative z-10 cu-container h-full pt-[320px]">
            <div className="grid lg:grid-cols-2 gap-12 w-full">
              <div className="text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-200">B.Tech Program</div>
                    <div className="text-xs text-gray-300">4 Years • Full Time</div>
                  </div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Civil Engineering
                </h1>
                
                <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                  Build the infrastructure of tomorrow with sustainable design, smart construction 
                  technologies, and innovative engineering solutions for modern urban challenges.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md ml-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
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
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="cu-container">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">HOME</a>
              <span className="mx-2">/</span>
              <a href="/institutes" className="hover:text-blue-600">INSTITUTES</a>
              <span className="mx-2">/</span>
              <a href="/institutes/specengineering" className="hover:text-blue-600">ENGINEERING</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">B.TECH CIVIL</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="py-8 bg-gradient-to-r from-gray-600 to-blue-600 text-white">
          <div className="cu-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.placementRate}</div>
                <div className="text-gray-100 text-sm">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.highestPackage}</div>
                <div className="text-gray-100 text-sm">Highest Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.averagePackage}</div>
                <div className="text-gray-100 text-sm">Average Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">380+</div>
                <div className="text-gray-100 text-sm">Students Enrolled</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8">
          <div className="cu-container">
            <div className="flex gap-8">
              {/* Vertical Navigation */}
              <div className="w-64 shrink-0">
                <div className="flex flex-col gap-2">
                  {['overview', 'curriculum', 'faculty', 'labs', 'placements', 'admission'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-lg font-semibold text-sm transition-colors text-left ${
                        activeTab === tab
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Overview</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">About the Program</h3>
                        <p className="text-gray-700 mb-6">
                          The B.Tech Civil Engineering program focuses on designing, constructing, and 
                          maintaining infrastructure projects including buildings, roads, bridges, 
                          and water supply systems with emphasis on sustainability.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Structural Engineer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Construction Manager</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Transportation Engineer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Environmental Engineer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Urban Planner</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Program Highlights</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {programHighlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <span className="text-gray-800 font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="cu-container text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build the Future Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join our Civil Engineering program and become part of creating sustainable, 
              smart infrastructure for the cities of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg">
                Apply Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
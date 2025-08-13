"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function BTechECEPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const programHighlights = [
    "AICTE Approved & NBA Accredited",
    "VLSI & Embedded Systems Focus",
    "5G Technology Integration",
    "Industry-Standard Equipment",
    "Research Collaboration",
    "100% Placement Support"
  ]

  const curriculum = {
    "Year 1": [
      "Circuit Analysis",
      "Electronic Devices",
      "Mathematics for Engineers",
      "Physics of Materials",
      "Programming Fundamentals",
      "Engineering Graphics"
    ],
    "Year 2": [
      "Analog Electronics",
      "Digital Electronics",
      "Signals & Systems",
      "Electromagnetic Theory",
      "Network Analysis",
      "Microprocessors"
    ],
    "Year 3": [
      "Communication Systems",
      "VLSI Design",
      "Embedded Systems",
      "Digital Signal Processing",
      "Antenna & Wave Propagation",
      "Control Systems"
    ],
    "Year 4": [
      "Major Project",
      "Industry Internship",
      "5G Technologies",
      "IoT Systems",
      "Optical Communication",
      "Advanced Electronics"
    ]
  }

  const facultyMembers = [
    {
      name: "Dr. Suresh Patel",
      designation: "Professor & Head",
      specialization: "VLSI Design & Testing",
      experience: "22+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Meera Joshi",
      designation: "Associate Professor",
      specialization: "Communication Systems",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b100?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Vikram Gupta",
      designation: "Assistant Professor",
      specialization: "Embedded Systems & IoT",
      experience: "14+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ]

  const labs = [
    {
      name: "VLSI Design Lab",
      description: "Advanced CAD tools for chip design and verification",
      equipment: "Cadence, Synopsys tools, FPGA boards, Logic analyzers"
    },
    {
      name: "Communication Systems Lab",
      description: "RF testing and wireless communication setups",
      equipment: "Spectrum analyzers, Signal generators, Network analyzers"
    },
    {
      name: "Embedded Systems Lab",
      description: "Microcontroller and IoT development environment",
      equipment: "ARM boards, Arduino, Raspberry Pi, Sensors"
    },
    {
      name: "Digital Signal Processing Lab",
      description: "DSP processors and software tools for signal analysis",
      equipment: "TI DSP boards, MATLAB, LabVIEW, Oscilloscopes"
    }
  ]

  const placementStats = {
    placementRate: "96.8%",
    highestPackage: "₹32 LPA",
    averagePackage: "₹7.8 LPA",
    topRecruiters: ["Qualcomm", "Intel", "Broadcom", "Samsung", "Ericsson", "Nokia", "TCS", "L&T"]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[57rem] overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=800&fit=crop"
              alt="Electronics Laboratory"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-teal-900/80" />
          
          <div className="relative z-10 cu-container h-full pt-[320px]">
            <div className="grid lg:grid-cols-2 gap-12 w-full">
              {/* Left Content */}
              <div className="text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">📡</span>
                  </div>
                  <div>
                    <div className="text-sm text-green-200">B.Tech Program</div>
                    <div className="text-xs text-green-300">4 Years • Full Time</div>
                  </div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Electronics & Communication Engineering
                </h1>
                
                <p className="text-lg text-green-100 mb-8 leading-relaxed">
                  Design the future of communication systems, from 5G networks to IoT devices, 
                  with comprehensive training in electronics and modern communication technologies.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {programHighlights.slice(0, 4).map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-green-100">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Right - Application Form */}
              <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md ml-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Select Academic Level</option>
                      <option>12th Grade</option>
                      <option>Diploma</option>
                      <option>Graduate</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
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
              <span className="text-gray-900 font-medium">B.TECH ECE</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="py-8 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="cu-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.placementRate}</div>
                <div className="text-green-100 text-sm">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.highestPackage}</div>
                <div className="text-green-100 text-sm">Highest Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.averagePackage}</div>
                <div className="text-green-100 text-sm">Average Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">400+</div>
                <div className="text-green-100 text-sm">Students Enrolled</div>
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
                          ? 'bg-green-600 text-white'
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
                          The B.Tech Electronics & Communication Engineering program focuses on the design and 
                          development of electronic systems and communication networks that form the backbone 
                          of modern technology.
                        </p>
                        <p className="text-gray-700 mb-6">
                          Students gain expertise in VLSI design, wireless communication, embedded systems, 
                          and emerging technologies like 5G and IoT.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>VLSI Design Engineer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>RF Engineer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Embedded Systems Engineer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Communication Systems Engineer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>IoT Developer</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Network Engineer</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Program Highlights</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {programHighlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <span className="text-gray-800 font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Other tab content similar to CSE but with ECE-specific content */}
                {activeTab === 'curriculum' && (
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Curriculum Structure</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {Object.entries(curriculum).map(([year, subjects]) => (
                        <div key={year} className="bg-white rounded-lg shadow-lg p-6">
                          <h3 className="text-xl font-bold text-green-600 mb-4">{year}</h3>
                          <ul className="space-y-2">
                            {subjects.map((subject, index) => (
                              <li key={index} className="text-gray-700 text-sm py-1 border-b border-gray-100 last:border-b-0">
                                {subject}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faculty' && (
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Expert Faculty</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {facultyMembers.map((faculty, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                          <Image
                            src={faculty.image}
                            alt={faculty.name}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto mb-4"
                          />
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{faculty.name}</h3>
                          <p className="text-green-600 font-semibold mb-2">{faculty.designation}</p>
                          <p className="text-gray-600 text-sm mb-2">{faculty.specialization}</p>
                          <p className="text-gray-500 text-xs">{faculty.experience}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'labs' && (
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Laboratories</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {labs.map((lab, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{lab.name}</h3>
                          <p className="text-gray-700 mb-4">{lab.description}</p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Equipment & Tools:</h4>
                            <p className="text-gray-600 text-sm">{lab.equipment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'placements' && (
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Placement Statistics</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">{placementStats.placementRate}</div>
                        <div className="text-gray-600">Placement Rate</div>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{placementStats.highestPackage}</div>
                        <div className="text-gray-600">Highest Package</div>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">{placementStats.averagePackage}</div>
                        <div className="text-gray-600">Average Package</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Top Recruiters</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {placementStats.topRecruiters.map((company, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-gray-700">
                            {company}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'admission' && (
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission Requirements</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>12th grade with Physics, Chemistry, Mathematics</li>
                          <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Minimum 60% aggregate marks</li>
                          <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Valid JEE Main/State CET score</li>
                          <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Age limit: 17-25 years</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Application Process</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Online Application</h4>
                              <p className="text-gray-600 text-sm">Fill the online application form</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">2</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Document Verification</h4>
                              <p className="text-gray-600 text-sm">Upload required documents</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">3</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Merit List</h4>
                              <p className="text-gray-600 text-sm">Check merit list and counseling</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">4</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Admission Confirmation</h4>
                              <p className="text-gray-600 text-sm">Fee payment and enrollment</p>
                            </div>
                          </div>
                        </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future of Communication?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join our Electronics & Communication Engineering program and become part of the 
              next generation of innovators in telecommunications and electronics.
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
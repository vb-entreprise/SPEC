"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function BPharmPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth scrolling for mobile */
        @media (max-width: 768px) {
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-pink-900/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
              <span className="text-2xl sm:text-3xl">💊</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Bachelor of Pharmacy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-red-100 mb-6 sm:mb-8 leading-relaxed px-4">
              4-Year Comprehensive Pharmaceutical Education Program
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 sm:py-8 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">4 Years</div>
              <div className="text-xs sm:text-sm text-red-100">Duration</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">60 Seats</div>
              <div className="text-xs sm:text-sm text-red-100">Intake</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">PCI Approved</div>
              <div className="text-xs sm:text-sm text-red-100">Recognition</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">85%</div>
              <div className="text-xs sm:text-sm text-red-100">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs sm:text-sm text-gray-600 overflow-x-auto">
            <a href="/" className="hover:text-blue-600 whitespace-nowrap">HOME</a>
            <span className="mx-1 sm:mx-2">/</span>
            <a href="/institutes" className="hover:text-blue-600 whitespace-nowrap">INSTITUTES</a>
            <span className="mx-1 sm:mx-2">/</span>
            <a href="/institutes/specpharmacy" className="hover:text-blue-600 whitespace-nowrap">SPEC PHARMACY</a>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-gray-900 font-medium whitespace-nowrap">B.PHARM</span>
          </div>
        </div>
      </div>

      {/* Content Sections with Mobile-Optimized Menu */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Horizontal Menu */}
          <div className="lg:hidden mb-6 sm:mb-8">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Program Information</h3>
              <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'curriculum', label: 'Curriculum' },
                  { id: 'admission', label: 'Admission' },
                  { id: 'fees', label: 'Fees' },
                  { id: 'career', label: 'Career' },
                  { id: 'facilities', label: 'Facilities' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Desktop Vertical Navigation Menu */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Program Information</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'curriculum', label: 'Curriculum' },
                    { id: 'admission', label: 'Admission' },
                    { id: 'fees', label: 'Fees Structure' },
                    { id: 'career', label: 'Career Prospects' },
                    { id: 'facilities', label: 'Facilities' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Bachelor of Pharmacy (B.Pharm)</h2>
                <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Program Overview</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    The Bachelor of Pharmacy (B.Pharm) is a comprehensive 4-year undergraduate program that provides 
                    students with extensive knowledge in pharmaceutical sciences, drug formulation, analysis, and 
                    pharmaceutical practice.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                    Our curriculum is designed to meet industry standards and prepare students for various roles in 
                    the pharmaceutical sector, including manufacturing, quality control, research and development, 
                    regulatory affairs, and clinical pharmacy.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">PCI (Pharmacy Council of India) Approved</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">Industry-Oriented Curriculum</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">State-of-the-Art Laboratories</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">Industrial Training & Internships</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                    alt="B.Pharm Students"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-red-600 text-white p-3 sm:p-4 rounded-lg shadow-lg">
                    <div className="text-lg sm:text-2xl font-bold">4 Years</div>
                    <div className="text-xs sm:text-sm">Duration</div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Program Highlights</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">🔬</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Research Focus</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Emphasis on pharmaceutical research and drug development methodologies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">🏭</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Industry Exposure</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Regular industry visits and internships with leading pharmaceutical companies</p>
                  </div>
                  <div className="text-center sm:col-span-2 lg:col-span-1">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">👨‍⚕️</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Clinical Training</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Hands-on clinical pharmacy training in hospital settings</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Curriculum Structure</h2>
                <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  Comprehensive 8-semester program covering all aspects of pharmaceutical sciences
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Year 1 */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">First Year</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 1</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Human Anatomy & Physiology</li>
                        <li>• Pharmaceutical Inorganic Chemistry</li>
                        <li>• Communication Skills</li>
                        <li>• Remedial Biology</li>
                        <li>• Remedial Mathematics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 2</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Human Anatomy & Physiology II</li>
                        <li>• Pharmaceutical Organic Chemistry</li>
                        <li>• Biochemistry</li>
                        <li>• Pathophysiology</li>
                        <li>• Computer Applications in Pharmacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Year 2 */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">Second Year</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 3</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Pharmaceutical Organic Chemistry II</li>
                        <li>• Physical Pharmaceutics I</li>
                        <li>• Pharmaceutical Microbiology</li>
                        <li>• Pharmaceutical Engineering</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 4</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Pharmaceutical Organic Chemistry III</li>
                        <li>• Medicinal Chemistry I</li>
                        <li>• Physical Pharmaceutics II</li>
                        <li>• Pharmacology I</li>
                        <li>• Pharmacognosy I</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Year 3 */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">Third Year</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 5</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Medicinal Chemistry II</li>
                        <li>• Industrial Pharmacy I</li>
                        <li>• Pharmacology II</li>
                        <li>• Pharmacognosy II</li>
                        <li>• Pharmaceutical Jurisprudence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 6</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Medicinal Chemistry III</li>
                        <li>• Industrial Pharmacy II</li>
                        <li>• Pharmacology III</li>
                        <li>• Herbal Drug Technology</li>
                        <li>• Biopharmaceutics & Pharmacokinetics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Year 4 */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">Fourth Year</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 7</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Instrumental Methods of Analysis</li>
                        <li>• Industrial Pharmacy III</li>
                        <li>• Pharmacy Practice</li>
                        <li>• Novel Drug Delivery System</li>
                        <li>• Pharmaceutical Biotechnology</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semester 8</h4>
                      <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                        <li>• Biostatistics & Research Methodology</li>
                        <li>• Social & Preventive Pharmacy</li>
                        <li>• Pharma Marketing & Management</li>
                        <li>• Pharmaceutical Regulatory Science</li>
                        <li>• Pharmacovigilance</li>
                        <li>• Project Work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Admission Tab */}
          {activeTab === 'admission' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Admission Requirements</h2>
                <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6">Eligibility Criteria</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Educational Qualification</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">12th Standard (HSC) with Physics, Chemistry, Mathematics/Biology</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Minimum Marks</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Minimum 50% aggregate marks (45% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Entrance Exam</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">GUJCET/NEET/JEE Main scores accepted</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Age Limit</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Maximum 25 years as on 31st December of admission year</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6">Application Process</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Online Application</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Fill the online application form on official website</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Document Upload</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Upload required documents and pay application fee</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Merit List</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Merit list based on entrance exam scores</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Counseling</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Attend counseling session for seat allotment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">5</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Admission</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Complete admission formalities and fee payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Dates */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6 text-center">Important Dates 2024-25</h3>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold text-red-600">June 1</div>
                    <div className="text-gray-700 text-sm sm:text-base">Application Start</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold text-red-600">July 15</div>
                    <div className="text-gray-700 text-sm sm:text-base">Application End</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg sm:col-span-3 lg:col-span-1">
                    <div className="text-lg sm:text-2xl font-bold text-red-600">August 1</div>
                    <div className="text-gray-700 text-sm sm:text-base">Classes Begin</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fees Tab */}
          {activeTab === 'fees' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Fee Structure</h2>
                <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-red-600 text-white p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-bold">Annual Fee Structure (Academic Year 2024-25)</h3>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[300px]">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Fee Component</th>
                          <th className="text-right py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Tuition Fee (Annual)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-semibold text-xs sm:text-sm">75,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Development Fee (One-time)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-semibold text-xs sm:text-sm">10,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Library Fee (Annual)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-semibold text-xs sm:text-sm">5,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Laboratory Fee (Annual)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-semibold text-xs sm:text-sm">15,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Examination Fee (Annual)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-semibold text-xs sm:text-sm">3,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">Caution Deposit (Refundable)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-semibold text-xs sm:text-sm">5,000</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-900 font-bold text-xs sm:text-sm">Total (First Year)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-red-600 text-sm sm:text-lg">1,13,000</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-900 font-bold text-xs sm:text-sm">Subsequent Years (Annual)</td>
                          <td className="py-3 sm:py-4 px-2 sm:px-4 text-right font-bold text-gray-900 text-sm sm:text-lg">98,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3 sm:mb-4">💰 Scholarships Available</h3>
                  <ul className="space-y-2 text-green-700 text-sm sm:text-base">
                    <li>• Merit-based scholarships up to 50%</li>
                    <li>• Government scholarships for eligible candidates</li>
                    <li>• Financial assistance for economically weaker sections</li>
                    <li>• Sports scholarships for outstanding athletes</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 sm:mb-4">💳 Payment Options</h3>
                  <ul className="space-y-2 text-blue-700 text-sm sm:text-base">
                    <li>• Installment payment facility available</li>
                    <li>• Online payment gateway</li>
                    <li>• Bank transfer and DD accepted</li>
                    <li>• Education loan assistance provided</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Career Tab */}
          {activeTab === 'career' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Career Prospects</h2>
                <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🏭</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Pharmaceutical Industry</h3>
                  <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                    <li>• Production Pharmacist</li>
                    <li>• Quality Control Analyst</li>
                    <li>• Quality Assurance Officer</li>
                    <li>• Research & Development</li>
                    <li>• Regulatory Affairs</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🏥</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Healthcare Sector</h3>
                  <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                    <li>• Hospital Pharmacist</li>
                    <li>• Clinical Pharmacist</li>
                    <li>• Community Pharmacist</li>
                    <li>• Drug Information Specialist</li>
                    <li>• Pharmacovigilance Officer</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🔬</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Research & Academia</h3>
                  <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                    <li>• Research Scientist</li>
                    <li>• Assistant Professor</li>
                    <li>• Clinical Research Associate</li>
                    <li>• Drug Safety Scientist</li>
                    <li>• Patent Analyst</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Government Sector</h3>
                  <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                    <li>• Drug Inspector</li>
                    <li>• Food & Drug Administration</li>
                    <li>• Central Drugs Laboratory</li>
                    <li>• Indian Pharmacopoeia Commission</li>
                    <li>• AIIMS/Government Hospitals</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">💼</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Business & Marketing</h3>
                  <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                    <li>• Medical Representative</li>
                    <li>• Product Manager</li>
                    <li>• Brand Manager</li>
                    <li>• Sales Manager</li>
                    <li>• Business Development</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🎓</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Higher Education</h3>
                  <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                    <li>• M.Pharm Programs</li>
                    <li>• MBA in Pharmaceutical Management</li>
                    <li>• Ph.D. in Pharmaceutical Sciences</li>
                    <li>• Pharm.D (Post B.Pharm)</li>
                    <li>• MS in Clinical Research</li>
                  </ul>
                </div>
              </div>

              {/* Salary Expectations */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6 text-center">Average Salary Ranges</h3>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold text-red-600">₹3-5 LPA</div>
                    <div className="text-gray-700 text-sm sm:text-base">Fresher Level</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold text-red-600">₹6-12 LPA</div>
                    <div className="text-gray-700 text-sm sm:text-base">3-5 Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg sm:col-span-3 lg:col-span-1">
                    <div className="text-lg sm:text-2xl font-bold text-red-600">₹15+ LPA</div>
                    <div className="text-gray-700 text-sm sm:text-base">Senior Level</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Facilities & Infrastructure</h2>
                <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl">🔬</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Advanced Laboratories</h3>
                      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">State-of-the-art pharmaceutical laboratories equipped with modern instruments and equipment.</p>
                      <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                        <li>• Pharmaceutics Laboratory</li>
                        <li>• Pharmaceutical Chemistry Lab</li>
                        <li>• Pharmacology Laboratory</li>
                        <li>• Pharmacognosy Laboratory</li>
                        <li>• Microbiology Laboratory</li>
                        <li>• Instrumental Analysis Lab</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Digital Library</h3>
                      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">Comprehensive library with extensive collection of pharmaceutical books and digital resources.</p>
                      <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                        <li>• 10,000+ Books & Journals</li>
                        <li>• Digital Database Access</li>
                        <li>• Research Paper Collection</li>
                        <li>• E-learning Resources</li>
                        <li>• Study Rooms</li>
                        <li>• Internet Facility</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Computer Lab</h3>
                      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">Modern computer laboratory with high-speed internet and pharmaceutical software.</p>
                      <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                        <li>• 60+ Computer Systems</li>
                        <li>• High-Speed Internet</li>
                        <li>• Pharmaceutical Software</li>
                        <li>• Online Learning Platforms</li>
                        <li>• Programming Tools</li>
                        <li>• Project Development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl">🏥</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Hospital Tie-ups</h3>
                      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">Partnerships with leading hospitals for clinical pharmacy training and internships.</p>
                      <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                        <li>• Clinical Training</li>
                        <li>• Patient Care Experience</li>
                        <li>• Ward Rounds</li>
                        <li>• Drug Information Center</li>
                        <li>• Pharmacovigilance Training</li>
                        <li>• Hospital Pharmacy Practice</li>
                      </ul>
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

      <Footer />
    </div>
  )
} 
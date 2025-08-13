"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Image from 'next/image';

export default function PharmDPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
              <span className="text-2xl sm:text-3xl">👨‍⚕️</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Doctor of Pharmacy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-4">
              6-Year Professional Clinical Pharmacy Program
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 sm:py-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">6 Years</div>
              <div className="text-xs sm:text-sm text-blue-100">Duration</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">40 Seats</div>
              <div className="text-xs sm:text-sm text-blue-100">Intake</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">PCI Approved</div>
              <div className="text-xs sm:text-sm text-blue-100">Recognition</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">95%</div>
              <div className="text-xs sm:text-sm text-blue-100">Placement Rate</div>
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
            <span className="text-gray-900 font-medium whitespace-nowrap">PHARM.D</span>
          </div>
        </div>
      </div>

      {/* Program Overview with Vertical Menu */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            
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
                          ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

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
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
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
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Doctor of Pharmacy (Pharm.D)</h2>
                    <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        The Doctor of Pharmacy (Pharm.D) is a 6-year professional doctoral program 
                        designed to prepare students for direct patient care responsibilities. This 
                        program focuses on clinical pharmacy practice and patient care.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Students gain comprehensive knowledge in pharmaceutical sciences, clinical 
                        pharmacy, therapeutics, and patient counseling. The program includes extensive 
                        clinical rotations in hospitals and healthcare settings.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Clinical pharmacy focus</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Patient care training</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Hospital rotations</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Direct doctorate degree</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-blue-600 mb-6">Program Highlights</h3>
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🏥</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Clinical Rotations</h4>
                          <p className="text-gray-600 text-sm">Extensive hands-on training in hospitals and clinical settings</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">👨‍⚕️</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Patient Care</h4>
                          <p className="text-gray-600 text-sm">Direct patient interaction and pharmaceutical care</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🎓</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Doctoral Degree</h4>
                          <p className="text-gray-600 text-sm">Professional doctorate qualification in pharmacy practice</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Curriculum Structure</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">6-Year Pharm.D Curriculum</h3>
                    <p className="text-gray-700 mb-6">Comprehensive clinical pharmacy education with extensive hospital rotations and patient care training.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Clinical Subjects</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Clinical Pharmacology</li>
                          <li>• Therapeutic Drug Monitoring</li>
                          <li>• Clinical Pharmacokinetics</li>
                          <li>• Hospital Pharmacy Practice</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Practical Training</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Hospital Rotations</li>
                          <li>• Patient Counseling</li>
                          <li>• Clinical Research</li>
                          <li>• Case Studies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other tabs with placeholder content */}
              {activeTab === 'admission' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Admission Process</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">Eligibility & Process</h3>
                    <p className="text-gray-700">12th Science (PCM/PCB) with minimum 50% marks. Admission through NEET/GUJCET scores.</p>
                  </div>
                </div>
              )}

              {activeTab === 'fees' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Fee Structure</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">Annual Fees</h3>
                    <p className="text-gray-700">Detailed fee structure for 6-year Pharm.D program with scholarship opportunities.</p>
                  </div>
                </div>
              )}

              {activeTab === 'career' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Prospects</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">Career Opportunities</h3>
                    <p className="text-gray-700">Clinical pharmacist, hospital pharmacist, pharmaceutical research, regulatory affairs, and patient care specialist roles.</p>
                  </div>
                </div>
              )}

              {activeTab === 'facilities' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Facilities</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">Infrastructure</h3>
                    <p className="text-gray-700">State-of-the-art laboratories, hospital partnerships, clinical training facilities, and research infrastructure.</p>
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
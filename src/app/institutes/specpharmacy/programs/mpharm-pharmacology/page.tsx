"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Image from 'next/image';

export default function MPharmPharmacologyPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-violet-900/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
              <span className="text-2xl sm:text-3xl">🧬</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              M.Pharm Pharmacology
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 sm:mb-8 leading-relaxed px-4">
              2-Year Advanced Drug Action & Toxicology Program
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 sm:py-8 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">2 Years</div>
              <div className="text-xs sm:text-sm text-purple-100">Duration</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">18 Seats</div>
              <div className="text-xs sm:text-sm text-purple-100">Intake</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">PCI Approved</div>
              <div className="text-xs sm:text-sm text-purple-100">Recognition</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold">88%</div>
              <div className="text-xs sm:text-sm text-purple-100">Placement Rate</div>
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
            <span className="text-gray-900 font-medium whitespace-nowrap">M.PHARM PHARMACOLOGY</span>
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
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
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
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
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
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Master of Pharmacy - Pharmacology</h2>
                    <div className="w-16 sm:w-24 h-1 bg-purple-600 mx-auto mb-6 sm:mb-8"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Master of Pharmacy in Pharmacology is an advanced 2-year program focusing on 
                        drug action, toxicology, and therapeutic applications. This specialization 
                        studies the mechanisms of drug action and their effects on biological systems.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Students gain deep understanding of drug mechanisms, toxicology, pharmacokinetics, 
                        clinical pharmacology, and research methodologies in drug development and safety evaluation.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Drug mechanism studies</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Toxicology & drug safety</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Clinical pharmacology</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">Research & development</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-purple-600 mb-6">Research Areas</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-purple-600 pl-4">
                          <h4 className="font-semibold text-gray-900">Drug Mechanisms</h4>
                          <p className="text-gray-600 text-sm">Molecular mechanisms of drug action</p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <h4 className="font-semibold text-gray-900">Toxicology</h4>
                          <p className="text-gray-600 text-sm">Drug safety and adverse effects</p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <h4 className="font-semibold text-gray-900">Clinical Trials</h4>
                          <p className="text-gray-600 text-sm">Human drug testing and evaluation</p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <h4 className="font-semibold text-gray-900">Neuropharmacology</h4>
                          <p className="text-gray-600 text-sm">CNS drugs and neurological disorders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other tabs */}
              {activeTab === 'curriculum' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Curriculum Structure</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">M.Pharm Pharmacology Curriculum</h3>
                    <p className="text-gray-700 mb-6">Advanced pharmacological research and drug safety evaluation curriculum.</p>
                  </div>
                </div>
              )}

              {activeTab === 'admission' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Admission Process</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">Eligibility & Process</h3>
                    <p className="text-gray-700">B.Pharm with minimum 55% marks. Admission through GPAT/University entrance exam.</p>
                  </div>
                </div>
              )}

              {activeTab === 'fees' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Fee Structure</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">Annual Fees</h3>
                    <p className="text-gray-700">Detailed fee structure for 2-year M.Pharm program with research assistantships available.</p>
                  </div>
                </div>
              )}

              {activeTab === 'career' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Prospects</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">Career Opportunities</h3>
                    <p className="text-gray-700">Pharmacologist, toxicologist, clinical research scientist, regulatory affairs specialist.</p>
                  </div>
                </div>
              )}

              {activeTab === 'facilities' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Facilities</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">Research Infrastructure</h3>
                    <p className="text-gray-700">Advanced pharmacology labs, animal house facility, and toxicology research equipment.</p>
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
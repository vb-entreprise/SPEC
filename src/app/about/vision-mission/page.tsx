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
      <section className="relative h-64 bg-gray-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=400&fit=crop"
            alt="SPEC Campus Background"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 cu-container h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision and Mission</h1>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold text-lg transition-colors">
              APPLY NOW
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
            <span className="text-gray-900 font-medium">VISION AND MISSION</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12 bg-white">
        <div className="cu-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="flex-1 lg:w-2/3">
              
              {/* Vision Section */}
              <section className="mb-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Vision</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To be globally recognised as a Centre of Excellence for Research, Innovation and Academic pursuits and disseminating knowledge by providing transformational learning to serve the society.
                    </p>
                  </div>
                  <div className="w-full md:w-80 h-64 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
                      alt="Vision Illustration"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Mission Section */}
              <section className="mb-16">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Mission</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Providing a conducive academic and ideal environment for Research, Innovation, Consultancy and Entrepreneurship relevant to the society.
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Offering programs & courses in consonance with National policies for nation building and nurturing human values to prepare students as responsible citizens.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Ensuring students delight by receiving their aspirations through blended learning, corporate mentoring, industrial relevance in curriculum, social inclusion, and the fulfillment of human values.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Creating a scientific, transparent and objective examination/evaluation systems to ensure an ideal assessment process.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Establishing strategic relationships with leading national and international corporations and universities for academic as well as research collaborations.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          Contributing for creation of healthy, vibrant and sustainable society by involving in Institutional Social Responsibility (ISR) activities like rural development, welfare of senior citizens, women empowerment, health care, environmental protection and restoration.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-80 h-64 relative order-1 md:order-2">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                      alt="Mission Illustration"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Quality Policy Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Quality Policy</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start mb-6">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        All-round quality is ensured through technologically-driven professional management of the Institution.
                      </p>
                    </div>

                    <div className="flex items-start mb-6">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        Tools of Critical Analysis, Creative Thinking & Innovative Application are made intrinsic elements for producing well-groomed professional leaders, possessing multifaceted personality, respect for ethical and social values, and the spirit of human resourcefulness.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start mb-6">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        Academic quality is ensured through regular upgradation of curriculum, teaching-learning model and experiential learning with industry participation, based on continuous critical self-appraisal.
                      </p>
                    </div>

                    <div className="flex items-start mb-6">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        Welfare and professional growth of the faculty & administrative staff are ensured along with opportunities for their self-development, promoting commitment and setting satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm border">
                {/* Profile Image */}
                <div className="relative h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-t-lg flex items-center justify-center">
                  <div className="absolute bottom-4 left-4">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face"
                      alt="Profile"
                      width={60}
                      height={60}
                      className="rounded-full border-4 border-white"
                    />
                  </div>
                  <div className="absolute bottom-2 right-4 text-white text-sm font-bold">
                    Chat with us<br />1800-SPEC-HELP
                  </div>
                </div>

                {/* About Us Section */}
                <div className="bg-blue-900 text-white p-4">
                  <h3 className="font-bold text-lg mb-4">About Us</h3>
                  
                  <nav className="space-y-2">
                    <a href="/about/overview" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Overview
                    </a>
                    <a href="/about/identity" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Our Identity
                    </a>
                    <a href="/about/vision-mission" className="block text-sm text-white font-semibold border-l-2 border-white pl-3 bg-blue-800/50">
                      • Vision and Mission
                    </a>
                    <a href="/about/leadership" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Leadership
                    </a>
                    <a href="/about/governance" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Governance
                    </a>
                    <a href="/about/recognition" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Recognition and Approvals
                    </a>
                    <a href="/about/awards" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Awards and Rankings
                    </a>
                    <a href="/about/responsibility" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Institutional Social Responsibility
                    </a>
                    <a href="/about/scholarships" className="block text-sm text-blue-200 hover:text-white border-l-2 border-transparent hover:border-white pl-3 transition-all">
                      • Scholarships
                    </a>
                  </nav>
                </div>

                {/* Related Links Section */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-3">Related Links</h4>
                  <nav className="space-y-2">
                    <a href="/our-institutes" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      • Our Institutes & Departments
                    </a>
                    <a href="/student-services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      • Student Services
                    </a>
                    <a href="/how-to-reach" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      • How to Reach Us?
                    </a>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 
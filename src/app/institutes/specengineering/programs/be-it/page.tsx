"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import ProgramHero from '@/components/ui/ProgramHero'

export default function BEITPage() {
  const [activeTab, setActiveTab] = useState('about-department')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const programHighlights = [
    "AICTE Approved & NBA Accredited",
    "Industry-Integrated Curriculum", 
    "100% Placement Assistance",
    "State-of-the-art IT Labs"
  ]

  const tabs = [
    { id: 'about-department', label: 'About Department', icon: '🏛️' },
    { id: 'faculty', label: 'Faculty', icon: '👨‍🏫' },
    { id: 'laboratory', label: 'Laboratory', icon: '🔬' },
    { id: 'syllabus', label: 'Syllabus', icon: '📚' },
    { id: 'department-news-events', label: 'News & Events', icon: '📰' },
    { id: 'research-development', label: 'Research & Development', icon: '🔬' },
    { id: 'student-achievement', label: 'Student Achievement', icon: '🏆' }
  ]

  const facultyMembers = [
    {
      id: 1,
      name: "Mr. Kaushalkumar Patel",
      image: "/images/faculty/engineering/it/IT_Kaushal Patel.jpg",
      qualification: "Ph.D. Pursuing M.E. (IT), BE (IT)",
      designation: "I/C HOD & Assistant Professor",
      department: "Information Technology",
      specialization: "Software Engineering, Database Systems"
    },
    {
      id: 2,
      name: "Mr. Nikul Patel", 
      image: "/images/faculty/engineering/it/faculty2.jpg",
      qualification: "ME (Computer), BE (IT)",
      designation: "Admin Head & Assistant Professor",
      department: "Information Technology",
      specialization: "Computer Networks, System Administration"
    },
    {
      id: 3,
      name: "Ms. Pooja Rathod",
      image: "/images/faculty/engineering/it/faculty3.jpg", 
      qualification: "Ph.D. Pursuing ,M.E. (CE), B.E. (CE)",
      designation: "Assistant Professor",
      department: "Information Technology",
      specialization: "Data Structures, Algorithms"
    }
  ]

  const labs = [
    {
      name: "Web & UI/UX Lab - 206",
      description: "Focused on Web Development and UI/UX Design. This specialized lab provides comprehensive training in modern web technologies and user experience design principles.",
      equipment: "Adobe XD, Figma, VS Code, React/Angular frameworks, Design software, High-resolution displays"
    },
    {
      name: "Software Engineering Lab - 208",
      description: "Used for Software Engineering, Software Project Management, and UI/UX development.",
      equipment: "StarUML, JIRA, Figma, VS Code, Project management tools, Collaboration platforms"
    },
    {
      name: "Networking & Cyber Security Lab - 223",
      description: "Multipurpose lab equipped for Computer Networks, Wireless Communication, and Cyber Security.",
      equipment: "Cisco routers/switches, Wireshark, Packet Tracer, NS2/NS3, Kali Linux, Metasploit"
    },
    {
      name: "SAP & IoT Lab - 224",
      description: "Dual-purpose lab for SAP ERP training and Internet of Things experimentation.",
      equipment: "SAP S/4HANA modules, Arduino, Raspberry Pi, NodeMCU, IoT sensor kits, AWS IoT, Firebase"
    },
    {
      name: "AI & ML Lab - 228",
      description: "Supports Artificial Intelligence, Machine Learning, and Applied ML research and development.",
      equipment: "Python with TensorFlow, Keras, OpenCV, Scikit-Learn, High-performance GPU systems, ML frameworks"
    }
  ]

  const curriculum = {
    "Semester 1 & 2": [
      "Student Induction Program",
      "Programming for Problem Solving", 
      "Basic Mechanical Engineering",
      "Universal Human Values",
      "Design Thinking",
      "Mathematics - II",
      "English for Technical Communication",
      "Engineering Graphics Design",
      "Physics",
      "Digital Fabrication Workshop"
    ],
    "Semester 3": [
      "Effective Technical Communication",
      "Probability & Statistics", 
      "Indian Constitution",
      "Design Engineering - I A",
      "Data Structures",
      "Database Management Systems",
      "Digital Fundamentals"
    ],
    "Semester 4": [
      "Design Engineering - I B",
      "Object Oriented Programming - I",
      "Computer Organization & Architecture", 
      "Discrete Mathematics",
      "Principles of Economics & Management",
      "Operating System & Virtualization"
    ],
    "Semester 5": [
      "Design Engineering - II A",
      "Contributor Personality Development Program",
      "Analysis & Design of Algorithms",
      "Professional Ethics", 
      "Computer Networks",
      "Cyber Security",
      "Web Development"
    ],
    "Semester 6": [
      "Design Engineering - II B",
      "Contributor Personality Development Program",
      "Software Engineering",
      "Cryptography & Network Security",
      "Artificial Intelligence",
      "Advanced Web Programming", 
      "Mobile Application Development"
    ],
    "Semester 7": [
      "Summer Internship",
      "Internet of Things",
      "WC - Wireless Communication",
      "Software Project Management",
      "Agile Development and UI/UX Design",
      "Computer Vision",
      "Applied Machine Learning"
    ],
    "Semester 8": [
      "Internship / Project"
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Modern Hero Section */}
      <ProgramHero
        icon="/images/icons/computer.svg"
        programType="B.E. Program"
        duration="4 Years • Full Time"
        title="Information Technology"
        description="Master the fundamentals of IT, software development, networking, and cybersecurity to build a successful career in technology."
        highlights={programHighlights}
        bgImage="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=800&fit=crop"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Tab Navigation */}
        <div className="lg:hidden mb-6">
          <div className="mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <span className="font-medium text-gray-900">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </span>
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full px-4 py-3 text-left border-b last:border-b-0 transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-blue-100'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop & Mobile Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-64 shrink-0">
            <div className="sticky top-8">
              <div className="flex flex-col border rounded-lg overflow-hidden bg-white shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-left border-b last:border-b-0 text-base transition-colors font-medium focus:outline-none ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm min-w-0">
            
            {/* About Department Tab */}
            {activeTab === 'about-department' && (
              <div className="w-full py-6 lg:py-16 px-4 sm:px-6">
                <div className="text-center mb-6 lg:mb-16">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4">About the Department</h2>
                  <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
                </div>

                <div className="mb-6 lg:mb-16">
                  <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-sm">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 mb-4 lg:mb-6">Department Overview</h3>
                    <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                      <p>
                        The Department of Information Technology, at the Institute of Sardar Patel College of Engineering, Bakrol, Anand, Gujarat came into existence in 2014 with a Vision "To produce Creators of Creative Technological Solutions" for the benefit of Engineering, Science and Technology and the Nation on a larger scale.
                      </p>
                      <p>
                        Since its inception, the Department of Information Technology has been strengthening its resources and providing state of the art facilities to foster the spirit of learning and development of professional skills.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-sm">
                    <div className="flex items-center mb-4 lg:mb-6">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">Vision</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Preparing graduates to be efficient problem solvers, researchers, innovators and entrepreneurs, and making them competent IT professionals.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-sm">
                    <div className="flex items-center mb-4 lg:mb-6">
                      <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">Mission</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Provide best infrastructure facilities to achieve excellence in the teaching-learning process and research.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Enhance the students' knowledge in the latest technologies by organizing and participating in technical programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Faculty Tab */}
            {activeTab === 'faculty' && (
              <div className="w-full py-6 lg:py-12 px-4 sm:px-6">
                <div className="text-center mb-6 lg:mb-12">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4">Our Faculty</h2>
                  <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-2"></div>
                  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                    Meet our experienced and dedicated faculty members
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {facultyMembers.map((faculty) => (
                    <div 
                      key={faculty.id}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="text-center mb-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {faculty.name}
                          </h3>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Qualification</div>
                            <div className="text-gray-800 font-medium text-sm leading-relaxed">
                              {faculty.qualification}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Designation</div>
                            <div className="text-gray-800 font-medium text-sm">
                              {faculty.designation}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Specialization</div>
                            <div className="text-gray-800 font-medium text-sm">
                              {faculty.specialization}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Laboratory Tab */}
            {activeTab === 'laboratory' && (
              <div className="w-full py-6 lg:py-12 px-4 sm:px-6">
                <div className="text-center mb-8 lg:mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Laboratory Facilities</h2>
                  <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                    State-of-the-art laboratories equipped with modern technology
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {labs.map((lab, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{lab.name}</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{lab.description}</p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Equipment:</h4>
                        <p className="text-sm text-gray-600">{lab.equipment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syllabus Tab */}
            {activeTab === 'syllabus' && (
              <div className="w-full py-6 lg:py-12 px-4 sm:px-6">
                <div className="text-center mb-8 lg:mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Curriculum Structure</h2>
                  <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive 4-year program designed to meet industry standards
                  </p>
                </div>
                
                <div className="space-y-6">
                  {Object.entries(curriculum).map(([semester, subjects]) => (
                    <div key={semester} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                        <h3 className="text-lg font-semibold">{semester}</h3>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {subjects.map((subject, idx) => (
                            <div key={idx} className="flex items-center p-2 bg-gray-50 rounded">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-gray-800">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs placeholder */}
            {(activeTab === 'department-news-events' || activeTab === 'research-development' || activeTab === 'student-achievement') && (
              <div className="w-full py-16 px-4 sm:px-6 text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                <p className="text-gray-600">This section is under development and will be available soon.</p>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 
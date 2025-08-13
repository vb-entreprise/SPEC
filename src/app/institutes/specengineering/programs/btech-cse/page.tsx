"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const programs = [
  {
    id: 'be-it',
    title: 'BE - Information Technology',
    path: '/institutes/specengineering/programs/be-it'
  },
  {
    id: 'be-ce',
    title: 'BE - Computer Engineering',
    path: '/institutes/specengineering/programs/be-ce'
  },
  {
    id: 'be-me',
    title: 'BE - Mechanical Engineering',
    path: '/institutes/specengineering/programs/be-me'
  },
  {
    id: 'be-ee',
    title: 'BE - Electrical Engineering',
    path: '/institutes/specengineering/programs/be-ee'
  },
  {
    id: 'be-civil',
    title: 'BE - Civil Engineering',
    path: '/institutes/specengineering/programs/be-civil'
  },
  {
    id: 'be-has',
    title: 'BE - Humanities & Applied Science and Admin',
    path: '/institutes/specengineering/programs/be-has'
  },
  {
    id: 'me-se',
    title: 'ME - Structural Engineering',
    path: '/institutes/specengineering/programs/me-se'
  },
  {
    id: 'be-cse',
    title: 'BE - Computer Science Engineering',
    path: '/institutes/specengineering/programs/be-cse'
  },
  {
    id: 'bvoc-sd',
    title: 'B.Voc - Software Development',
    path: '/institutes/specengineering/programs/bvoc-sd'
  },
  {
    id: 'be-ece',
    title: 'BE - Electronics and Communication Engineering',
    path: '/institutes/specengineering/programs/be-ece'
  },
  {
    id: 'wp-it',
    title: 'Working Professional - DtoD Information Technology',
    path: '/institutes/specengineering/programs/wp-it'
  },
  {
    id: 'wp-cse',
    title: 'Working Professional - DtoD Computer Science & Engineering',
    path: '/institutes/specengineering/programs/wp-cse'
  }
]

export default function BTechCSEPage() {
  const [activeTab, setActiveTab] = useState('programs')

  const programHighlights = [
    "AICTE Approved & NBA Accredited",
    "Industry-Integrated Curriculum",
    "100% Placement Assistance",
    "State-of-the-art AI & ML Labs",
    "International Collaborations",
    "Research Opportunities"
  ]

  const curriculum = {
    "Year 1": [
      "Programming Fundamentals",
      "Mathematics for Computing",
      "Digital Logic Design",
      "Computer Organization",
      "Physics & Chemistry",
      "English Communication"
    ],
    "Year 2": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Discrete Mathematics"
    ],
    "Year 3": [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Technologies",
      "Mobile App Development",
      "Cybersecurity"
    ],
    "Year 4": [
      "Major Project",
      "Industry Internship",
      "Cloud Computing",
      "Big Data Analytics",
      "IoT & Embedded Systems",
      "Elective Specializations"
    ]
  }

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. John Doe",
      image: "/images/faculty/engineering/cse/faculty1.jpg",
      qualification: "Ph.D. in Computer Science",
      designation: "Professor & Head",
      department: "Computer Science & Engineering"
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      image: "/images/faculty/engineering/cse/faculty2.jpg",
      qualification: "Ph.D. in Data Science",
      designation: "Associate Professor",
      department: "Computer Science & Engineering"
    },
    // Add more faculty members as needed
  ]

  const labs = [
    {
      name: "AI & Machine Learning Lab",
      description: "Advanced computing systems with GPU clusters for AI research",
      equipment: "NVIDIA GPUs, Python/R environments, TensorFlow, PyTorch"
    },
    {
      name: "Software Development Lab",
      description: "Modern development environment with latest IDEs and tools",
      equipment: "High-end workstations, Multiple OS environments, Cloud access"
    },
    {
      name: "Cybersecurity Lab",
      description: "Specialized setup for cybersecurity training and research",
      equipment: "Penetration testing tools, Network simulators, Security appliances"
    },
    {
      name: "Mobile App Development Lab",
      description: "Cross-platform mobile development environment",
      equipment: "Android Studio, iOS development tools, Testing devices"
    }
  ]

  const placementStats = {
    placementRate: "98.5%",
    highestPackage: "₹45 LPA",
    averagePackage: "₹8.5 LPA",
    topRecruiters: ["Google", "Microsoft", "Amazon", "IBM", "TCS", "Infosys", "Wipro", "Accenture"]
  }

  const tabs = [
    { id: 'programs', label: 'Programs' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'about-department', label: 'About Department' }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[57rem] overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=800&fit=crop"
              alt="Computer Science Laboratory"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
          
          <div className="relative z-10 cu-container h-full pt-[320px]">
            <div className="grid lg:grid-cols-2 gap-12 w-full">
              {/* Left Content */}
              <div className="text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">B.Tech Program</div>
                    <div className="text-xs text-blue-300">4 Years • Full Time</div>
                  </div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Computer Science & Engineering
                </h1>
                
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Master the fundamentals of computing, software development, and emerging technologies 
                  like AI, ML, and cybersecurity to build a successful career in technology.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {programHighlights.slice(0, 4).map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-blue-100">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select Academic Level</option>
                      <option>12th Grade</option>
                      <option>Diploma</option>
                      <option>Graduate</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Message (Optional)"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
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
              <span className="text-gray-900 font-medium">B.TECH CSE</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="py-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="cu-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.placementRate}</div>
                <div className="text-blue-100 text-sm">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.highestPackage}</div>
                <div className="text-blue-100 text-sm">Highest Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{placementStats.averagePackage}</div>
                <div className="text-blue-100 text-sm">Average Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-blue-100 text-sm">Students Enrolled</div>
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
                <div className="flex flex-col border rounded-lg overflow-hidden">
                  {[
                    'About Department',
                    'Faculty',
                    'Laboratory',
                    'Syllabus',
                    'Department News & Events',
                    'Research & Development',
                    'Student Achievement'
                  ].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase().replace(/\s+/g, '-'))}
                      className={`px-6 py-3 text-left border-b last:border-b-0 text-sm transition-colors ${
                        activeTab === tab.toLowerCase().replace(/\s+/g, '-')
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 bg-gray-50">
                {activeTab === 'about-department' && (
                  <div className="max-w-4xl">
                    <div className="bg-white rounded-lg p-8 shadow-sm border hover:shadow-md transition-all duration-300">
                      {/* Department Overview Card */}
                      <div className="group cursor-pointer mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          <p className="text-gray-800 leading-relaxed">
                            The Department of Computer Science & Engineering, at SPEC came into existence with a Vision "To produce Creators of Creative Technological Solutions" for the benefit of Engineering, Science and Technology and the Nation on a larger scale. It has always strived to fulfill its Mission to impart Value Based Education and promote Research and Development.
                          </p>
                        </div>
                      </div>

                      {/* Key Features Cards */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <p className="text-gray-800 leading-relaxed">
                            Since its inception, the Department of Computer Science & Engineering has been strengthening its resources and providing state of the art facilities to foster the spirit of learning and development of professional skills. The IT Department makes full utilization of its Laboratories in its attempt to put into practice theoretical concepts and getting the students industry ready.
                          </p>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <p className="text-gray-800 leading-relaxed">
                            It has opened avenues to promote Entrepreneurship among students and instill in them the concept of Corporate Social Responsibility. In its attempt to pursue excellence and explore greener pastures, the Department hosts a strong team of qualified and experienced Faculty Members who work in coordination with the budding engineers.
                          </p>
                        </div>
                      </div>

                      {/* Vision Section */}
                      <div className="mb-8 group">
                        <div className="flex items-center mb-4 cursor-pointer">
                          <h3 className="text-xl font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">Vision</h3>
                          <div className="flex-1 h-px bg-orange-200 ml-4 group-hover:bg-orange-300 transition-colors"></div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg transform transition-all duration-300 group-hover:shadow-lg">
                          <p className="text-gray-800 leading-relaxed">
                            Preparing graduates to be efficient problem solvers, researchers, innovators and entrepreneurs, and making them competent IT professionals.
                          </p>
                        </div>
                      </div>

                      {/* Mission Section */}
                      <div className="group">
                        <div className="flex items-center mb-4 cursor-pointer">
                          <h3 className="text-xl font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">Mission</h3>
                          <div className="flex-1 h-px bg-orange-200 ml-4 group-hover:bg-orange-300 transition-colors"></div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg transform transition-all duration-300 group-hover:shadow-lg">
                          <ul className="space-y-4">
                            {[
                              "Provide best infrastructure facilities to achieve excellence in the teaching-learning process and research.",
                              "Enhance the students' knowledge in the latest technologies by organizing and participating in technical programs.",
                              "Prepare the students and faculty to solve challenging real-world problems through strong research and development."
                            ].map((item, index) => (
                              <li key={index} className="flex items-start group/item hover:transform hover:translate-x-2 transition-all duration-300">
                                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 mr-3 group-hover/item:bg-orange-600">
                                  {index + 1}
                                </span>
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="max-w-6xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Curriculum Structure</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {Object.entries(curriculum).map(([year, subjects]) => (
                        <div key={year} className="bg-white rounded-lg shadow-lg p-6">
                          <h3 className="text-xl font-bold text-blue-600 mb-4">{year}</h3>
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
                  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {facultyMembers.map((faculty) => (
                        <div 
                          key={faculty.id}
                          className="bg-white rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300"
                        >
                          {/* Image Container with Gradient Border */}
                          <div className="relative w-48 h-48 mb-6">
                            {/* Gradient Border Circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1e3a8a] via-[#2563eb] to-[#f97316]"></div>
                            {/* White Space between Border and Image */}
                            <div className="absolute inset-1 rounded-full bg-white"></div>
                            {/* Faculty Image */}
                            <div className="absolute inset-2 rounded-full overflow-hidden">
                              <Image
                                src={faculty.image}
                                alt={faculty.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>

                          {/* Content Container */}
                          <div className="text-center w-full">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                              {faculty.name}
                            </h3>
                            
                            <div className="space-y-2">
                              <p className="text-gray-800 font-medium">
                                {faculty.qualification}
                              </p>
                              <p className="text-gray-700">
                                {faculty.designation}
                              </p>
                              <p className="text-gray-600">
                                {faculty.department}
                              </p>
                            </div>

                            <div className="mt-6">
                              <button 
                                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-sm hover:shadow-md"
                                onClick={() => window.location.href = `/faculty/${faculty.id}`}
                              >
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'labs' && (
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">State-of-the-Art Laboratories</h2>
                    
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
                        <div className="text-4xl font-bold text-blue-600 mb-2">{placementStats.placementRate}</div>
                        <div className="text-gray-600">Placement Rate</div>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">{placementStats.highestPackage}</div>
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
                          <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>12th grade with Physics, Chemistry, Mathematics</li>
                          <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Minimum 60% aggregate marks</li>
                          <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Valid JEE Main/State CET score</li>
                          <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Age limit: 17-25 years</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Application Process</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Online Application</h4>
                              <p className="text-gray-600 text-sm">Fill the online application form</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">2</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Document Verification</h4>
                              <p className="text-gray-600 text-sm">Upload required documents</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">3</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">Merit List</h4>
                              <p className="text-gray-600 text-sm">Check merit list and counseling</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
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

                {activeTab === 'programs' && (
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our comprehensive range of engineering programs designed to prepare you for success in the technology-driven world
                      </p>
                    </div>

                    <div className="grid gap-6 md:gap-8">
                      {programs.map((program) => (
                        <Link 
                          href={program.path}
                          key={program.id}
                          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 block"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{program.title}</h3>
                            <svg 
                              className="h-5 w-5 text-gray-400" 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                          </div>
                        </Link>
                      ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey in Computer Science?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of successful graduates who have built amazing careers in technology. 
              Apply now and secure your future in the digital world.
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
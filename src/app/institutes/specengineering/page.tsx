"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const programs = [
  {
    id: 'be-it',
    title: 'BE - Information Technology',
    description: 'Software Development, Database Management, Network Security',
    path: '/institutes/specengineering/programs/be-it',
    icon: '/images/icons/computer.svg'
  },
  {
    id: 'be-ce',
    title: 'BE - Computer Engineering',
    description: 'Computer Architecture, Software Engineering, Digital Systems',
    path: '/institutes/specengineering/programs/be-ce',
    icon: '/images/icons/computing.svg'
  },
  {
    id: 'be-me',
    title: 'BE - Mechanical Engineering',
    description: 'Thermodynamics, Manufacturing, Machine Design',
    path: '/institutes/specengineering/programs/be-me',
    icon: '/images/icons/mechanical.svg'
  },
  {
    id: 'be-ee',
    title: 'BE - Electrical Engineering',
    description: 'Power Systems, Control Systems, Electrical Machines',
    path: '/institutes/specengineering/programs/be-ee',
    icon: '/images/icons/electrical.svg'
  },
  {
    id: 'be-civil',
    title: 'BE - Civil Engineering',
    description: 'Structural Engineering, Construction, Environmental Engineering',
    path: '/institutes/specengineering/programs/be-civil',
    icon: '/images/icons/civil.svg'
  },
  {
    id: 'be-has',
    title: 'BE - Humanities & Applied Science and Admin',
    description: 'Applied Mathematics, Physics, Professional Communication',
    path: '/institutes/specengineering/programs/be-has',
    icon: '/images/icons/humanities.svg'
  },
  {
    id: 'me-se',
    title: 'ME - Structural Engineering',
    description: 'Advanced Structures, Earthquake Engineering, Design of Structures',
    path: '/institutes/specengineering/programs/me-se',
    icon: '/images/icons/civil.svg'
  },
  {
    id: 'be-cse',
    title: 'BE - Computer Science Engineering',
    description: 'Data Structures, Algorithms, Operating Systems',
    path: '/institutes/specengineering/programs/be-cse',
    icon: '/images/icons/computer.svg'
  },
  {
    id: 'bvoc-sd',
    title: 'B.Voc - Software Development',
    description: 'Programming, Web Development, Mobile App Development',
    path: '/institutes/specengineering/programs/bvoc-sd',
    icon: '/images/icons/software.svg'
  },
  {
    id: 'be-ece',
    title: 'BE - Electronics and Communication Engineering',
    description: 'Digital Electronics, Communication Systems, Signal Processing',
    path: '/institutes/specengineering/programs/be-ece',
    icon: '/images/icons/electronics.svg'
  },
  {
    id: 'wp-it',
    title: 'Working Professional - D2D Information Technology',
    description: 'Part-time program for IT professionals',
    path: '/institutes/specengineering/programs/wp-it',
    icon: '/images/icons/professional.svg'
  },
  {
    id: 'wp-cse',
    title: 'Working Professional - D2D Computer Science & Engineering',
    description: 'Part-time program for CS professionals',
    path: '/institutes/specengineering/programs/wp-cse',
    icon: '/images/icons/professional.svg'
  }
]

export default function EngineeringPage() {
  const specializations = [
    {
      id: 'cse',
      title: 'Computer Science & Engineering',
      description: 'Data Science, AI, Cybersecurity',
      icon: '/images/icons/computer.svg',
      path: '/institutes/specengineering/programs/btech-cse',
      labs: '8 Labs Available'
    },
    {
      id: 'ece',
      title: 'Electronics & Communication',
      description: 'VLSI, IoT, 5G Technology, Embedded Systems',
      icon: '/images/icons/electronics.svg',
      path: '/institutes/specengineering/programs/btech-ece',
      labs: '8 Labs Available'
    },
    {
      id: 'me',
      title: 'Mechanical Engineering',
      description: 'Robotics, Manufacturing, Thermal Engineering',
      icon: '/images/icons/mechanical.svg',
      path: '/institutes/specengineering/programs/btech-mechanical',
      labs: '10 Labs Available'
    },
    {
      id: 'civil',
      title: 'Civil Engineering',
      description: 'Smart Cities, Green Buildings, Infrastructure',
      icon: '/images/icons/civil.svg',
      path: '/institutes/specengineering/programs/btech-civil',
      labs: '6 Labs Available'
    },
    {
      id: 'chemical',
      title: 'Chemical Engineering',
      description: 'Process Design, Petrochemicals, Biotechnology',
      icon: '/images/icons/chemical.svg',
      path: '/institutes/specengineering/programs/btech-chemical',
      labs: '5 Labs Available'
    },
    {
      id: 'aerospace',
      title: 'Aerospace Engineering',
      description: 'Aircraft Design, Space Technology, Avionics',
      icon: '/images/icons/aerospace.svg',
      path: '/institutes/specengineering/programs/btech-aerospace',
      labs: '4 Labs Available'
    },
    {
      id: 'biotech',
      title: 'Biotechnology Engineering',
      description: 'Genetic Engineering, Bioprocessing, Pharmaceuticals',
      icon: '/images/icons/biotech.svg',
      path: '/institutes/specengineering/programs/btech-biotechnology',
      labs: '6 Labs Available'
    }
  ]

  const facilities = [
    {
      title: "Advanced Research Labs",
      description: "100+ state-of-the-art laboratories with cutting-edge equipment",
      icon: "🔬",
      features: ["AI/ML Lab", "Robotics Lab", "IoT Lab", "Clean Room Facility"]
    },
    {
      title: "Industry 4.0 Center",
      description: "Smart manufacturing and automation training facility",
      icon: "🏭",
      features: ["3D Printing", "CNC Machines", "Industrial Robots", "IoT Sensors"]
    },
    {
      title: "Innovation Hub",
      description: "Incubation center for student startups and entrepreneurship",
      icon: "💡",
      features: ["Funding Support", "Mentorship", "Patent Filing", "Market Access"]
    },
    {
      title: "High-Performance Computing",
      description: "Supercomputing facility for complex simulations and research",
      icon: "💾",
      features: ["GPU Clusters", "Cloud Computing", "Big Data Analytics", "Simulation Software"]
    }
  ]

  const achievements = [
    {
      title: "NIRF Ranking",
      value: "#15",
      description: "Among Top Engineering Colleges in India"
    },
    {
      title: "Patents Filed",
      value: "500+",
      description: "Student and Faculty Innovations"
    },
    {
      title: "Research Papers",
      value: "2000+",
      description: "Published in International Journals"
    },
    {
      title: "Industry Projects",
      value: "300+",
      description: "Live Projects with Top Companies"
    }
  ]

  const industryPartners = [
    "Microsoft", "Google", "Amazon", "Intel", "IBM", "TCS", "Infosys", "Wipro",
    "L&T", "BHEL", "ISRO", "DRDO", "Siemens", "General Electric", "Samsung", "LG"
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative h-[57rem] overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581093458791-9f3c3250e5db?w=1920&h=800&fit=crop"
              alt="Engineering Laboratory"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/70" />
          
          {/* Floating animation elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-3000"></div>
          </div>
          
          <div className="relative z-10 cu-container h-full flex flex-col items-center justify-center text-white text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/institutes/Engineering.png"
                  alt="Engineering Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                SPEC Engineering
              </h1>
              <p className="text-lg md:text-xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Shaping Tomorrow's Engineers and Innovators with Cutting-Edge Technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  APPLY NOW →
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  VIRTUAL TOUR
                </button>
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
              <span className="text-gray-900 font-medium">SPEC ENGINEERING</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <section className="py-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="cu-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {achievements.map((achievement, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                    {achievement.value}
                  </div>
                  <div className="text-sm md:text-base text-orange-100">{achievement.title}</div>
                  <div className="text-xs text-orange-200 mt-1">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading Engineering Education</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    SPEC Engineering stands at the forefront of engineering education and innovation. 
                    Our programs are designed to meet industry demands and prepare students for the challenges of tomorrow with comprehensive practical training and cutting-edge research.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">AICTE Approved Programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">NBA Accredited Courses</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Industry-Integrated Curriculum</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&h=400&fit=crop"
                    alt="Engineering Students"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm">Placement Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Programs Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Our Engineering Programs</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Choose from our comprehensive range of engineering programs designed to meet industry standards
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-8 group"
                >
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                    <Image
                      src={program.icon}
                      alt={program.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2 group-hover:text-orange-600 transition-colors">
                    {program.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center mb-6">
                    {program.description}
                  </p>
                  {/* View Details Link */}
                  <Link
                    href={program.path}
                    className="mt-auto text-orange-500 hover:text-white hover:bg-orange-500 px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 border border-orange-100 group-hover:shadow-md"
                  >
                    View Program Details
                    <span className="ml-1 align-middle">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Facilities Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">State-of-the-art infrastructure designed to foster innovation and practical learning</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">{facility.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600">{facility.title}</h3>
                      <p className="text-gray-600 mb-4">{facility.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="bg-orange-50 text-orange-800 px-3 py-1 rounded-md text-sm">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Partners Section */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Partners</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Strong partnerships with leading companies for internships, placements, and collaborative research</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
              {industryPartners.map((partner, index) => (
                <div key={index} className="bg-gray-100 hover:bg-orange-50 p-4 rounded-lg text-center transition-colors duration-300 hover:shadow-md">
                  <span className="text-gray-700 font-semibold text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="cu-container relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-orange-100 max-w-2xl mx-auto">Numbers that reflect our commitment to excellence in engineering education</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">3000+</div>
                <div className="text-orange-100 text-lg">Students Enrolled</div>
                <div className="text-orange-200 text-sm mt-1">Across All Programs</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-orange-100 text-lg">Expert Faculty</div>
                <div className="text-orange-200 text-sm mt-1">PhD & Industry Experience</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">98.5%</div>
                <div className="text-orange-100 text-lg">Placement Rate</div>
                <div className="text-orange-200 text-sm mt-1">Highest Package: ₹1.2 Crore</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-orange-100 text-lg">Industry Partners</div>
                <div className="text-orange-200 text-sm mt-1">Global Collaborations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1520637836862-4d197d17c35a?w=1920&h=600&fit=crop"
              alt="Engineering Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="cu-container text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Engineer the Future?</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              Join our world-class engineering programs and become part of the next generation of technology leaders. 
              Experience hands-on learning, cutting-edge research, and guaranteed industry placements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                Apply Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg">
                Download Brochure
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg">
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
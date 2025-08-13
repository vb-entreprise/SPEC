"use client"

import ProgramHero from '@/components/ui/ProgramHero'
import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import Image from 'next/image'

export default function BECEPage() {
  const [activeTab, setActiveTab] = useState('about-department')

  const programHighlights = [
    "AICTE Approved & NBA Accredited",
    "Industry-Integrated Curriculum",
    "100% Placement Assistance",
    "Modern Computing Labs"
  ]

  const curriculum = {
    "Year 1": [
      "Programming Fundamentals",
      "Mathematics for Computing",
      "Digital Logic Design",
      "Computer Organization",
      "Physics & Chemistry",
      "Engineering Graphics"
    ],
    "Year 2": [
      "Data Structures & Algorithms",
      "Computer Architecture",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering"
    ],
    "Year 3": [
      "System Programming",
      "Compiler Design",
      "Artificial Intelligence",
      "Web Technologies",
      "Mobile Computing",
      "Network Security"
    ],
    "Year 4": [
      "Major Project",
      "Industry Internship",
      "Cloud Computing",
      "Machine Learning",
      "Distributed Systems",
      "Elective Specializations"
    ]
  }

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      image: "/images/faculty/engineering/ce/faculty1.jpg",
      qualification: "Ph.D. in Computer Engineering",
      designation: "Professor & Head",
      department: "Computer Engineering"
    },
    {
      id: 2,
      name: "Dr. Anita Sharma",
      image: "/images/faculty/engineering/ce/faculty2.jpg",
      qualification: "Ph.D. in Computer Science",
      designation: "Associate Professor",
      department: "Computer Engineering"
    }
  ]

  const labs = [
    {
      name: "Computer Systems Lab",
      description: "Advanced computing systems with latest hardware and software",
      equipment: "High-end workstations, Multiple OS environments, Development tools"
    },
    {
      name: "Digital Systems Lab",
      description: "Digital electronics and microprocessor programming lab",
      equipment: "FPGA boards, Microcontrollers, Logic analyzers, Simulation software"
    },
    {
      name: "Networking Lab",
      description: "Computer networking and communication protocols lab",
      equipment: "Cisco routers, Network simulators, Protocol analyzers"
    }
  ]

  const placementStats = {
    placementRate: "96.8%",
    highestPackage: "₹42 LPA",
    averagePackage: "₹8.2 LPA",
    topRecruiters: ["Intel", "NVIDIA", "Qualcomm", "TCS", "Infosys", "Wipro", "L&T Technology", "Bosch"]
  }

  const tabs = [
    { id: 'about-department', label: 'About Department' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'laboratory', label: 'Laboratory' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'department-news-events', label: 'Department News & Events' },
    { id: 'research-development', label: 'Research & Development' },
    { id: 'student-achievement', label: 'Student Achievement' }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Modern Hero Section */}
      <ProgramHero
        icon="/images/icons/computing.svg"
        programType="B.Tech Program"
        duration="4 Years • Full Time"
        title="Computer Engineering"
        description="Gain expertise in computer architecture, software engineering, and digital systems to excel in the world of computing."
        highlights={programHighlights}
        bgImage="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=800&fit=crop"
      />

      {/* Vertical Tab Navigation and Content */}
      <div className="flex max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 gap-8">
        {/* Vertical Menu */}
        <div className="w-64 shrink-0">
          <div className="flex flex-col border rounded-lg overflow-hidden bg-white">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-left border-b last:border-b-0 text-base transition-colors font-medium focus:outline-none focus:bg-blue-50 focus:text-blue-700 ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm">
          {/* About Department Tab */}
          {activeTab === 'about-department' && (
            <div className="max-w-4xl mx-auto py-12 px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Department</h2>
              <p className="text-gray-700 mb-4">
                The Department of Computer Engineering focuses on the design and development of computer systems, both hardware and software. Our curriculum integrates computer science principles with engineering practices to prepare students for diverse technology careers.
              </p>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Vision</h3>
              <p className="text-gray-700 mb-4">
                To be a leading department in computer engineering education, fostering innovation in computing technologies and producing skilled engineers who contribute to technological advancement and societal development.
              </p>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Mission</h3>
              <p className="text-gray-700 mb-4">
                To provide comprehensive education in computer engineering through innovative teaching methods, hands-on learning, and industry collaboration, preparing students to meet the evolving challenges in technology.
              </p>
            </div>
          )}

          {/* Include all other tab sections similar to BE-IT page */}
          {/* Faculty, Laboratory, Syllabus, Department News & Events, Research & Development, Student Achievement tabs */}
          {/* [Content sections would be similar to BE-IT with appropriate modifications for Computer Engineering] */}
        </div>
      </div>
    </div>
  )
} 
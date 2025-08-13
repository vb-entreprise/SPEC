"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/Header"

interface Faculty {
  id: number
  name: string
  image: string
  qualification: string
  designation: string
  department: string
  email: string
  vidwanId: string
  vidwanProfile: string
  workExperience: {
    teaching: string
    research: string
    industrial: string
  }
  researchArea: string
  seminarsWorkshops: {
    national: number
    international: number
  }
  paperPublications: {
    national: number
    international: number
  }
  bookPublications: {
    national: string
    international: string
  }
  outreachExcellence: string[]
}

interface FacultyProfileClientProps {
  faculty: Faculty
  facultyData: { [key: number]: Faculty }
}

export const FacultyProfileClient: React.FC<FacultyProfileClientProps> = ({ faculty, facultyData }) => {
  const router = useRouter()

  const handleNavigation = (direction: 'prev' | 'next') => {
    const facultyIds = Object.keys(facultyData).map(Number)
    const currentIndex = facultyIds.indexOf(faculty.id)
    
    if (direction === 'prev' && currentIndex > 0) {
      router.push(`/institutes/specengineering/programs/faculty/${facultyIds[currentIndex - 1]}`)
    } else if (direction === 'next' && currentIndex < facultyIds.length - 1) {
      router.push(`/institutes/specengineering/programs/faculty/${facultyIds[currentIndex + 1]}`)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-light text-gray-900">Faculty Profile</h1>
              <div className="flex gap-3">
                <button 
                  onClick={() => router.back()}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => handleNavigation('prev')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
                >
                  Previous
                </button>
                <button 
                  onClick={() => handleNavigation('next')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Faculty Basic Info */}
            <div className="flex items-start gap-6 mb-8">
              <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 p-1">
                <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-gray-900 mb-2">{faculty.name}</h2>
                <div className="space-y-1 text-gray-700">
                  <p>{faculty.qualification}</p>
                  <p>{faculty.designation}</p>
                  <p>{faculty.department}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact & Basic Info */}
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Email Id:</span>
                  <span className="text-gray-900">{faculty.email}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Vidwan ID:</span>
                  <span className="text-gray-900">{faculty.vidwanId}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Vidwan Profile:</span>
                  <a 
                    href={faculty.vidwanProfile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    View Profile
                  </a>
                </div>

                {/* Work Experience */}
                <div className="py-2">
                  <span className="text-gray-600 font-medium block mb-2">Work Experience:</span>
                  <div className="space-y-1 text-sm">
                    <div><strong>Teaching:</strong> {faculty.workExperience.teaching}</div>
                    <div><strong>Research:</strong> {faculty.workExperience.research}</div>
                    <div><strong>Industrial:</strong> {faculty.workExperience.industrial}</div>
                  </div>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Area of Research Subject:</span>
                  <span className="text-gray-900">{faculty.researchArea}</span>
                </div>
              </div>

              {/* Publications & Activities */}
              <div className="space-y-4">
                <div className="py-2">
                  <span className="text-gray-600 font-medium block mb-2">Seminars/Workshops:</span>
                  <div className="flex justify-between text-sm">
                    <span><strong>National:</strong> {faculty.seminarsWorkshops.national}</span>
                    <span><strong>International:</strong> {faculty.seminarsWorkshops.international}</span>
                  </div>
                </div>

                <div className="py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium block mb-2">Paper Publication:</span>
                  <div className="flex justify-between text-sm">
                    <span><strong>National:</strong> {faculty.paperPublications.national}</span>
                    <span><strong>International:</strong> {faculty.paperPublications.international}</span>
                  </div>
                </div>

                <div className="py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium block mb-2">Book Publication:</span>
                  <div className="flex justify-between text-sm">
                    <span><strong>National:</strong> {faculty.bookPublications.national}</span>
                    <span><strong>International:</strong> {faculty.bookPublications.international}</span>
                  </div>
                </div>

                {/* Outreach Excellence */}
                <div className="py-2">
                  <span className="text-gray-600 font-medium block mb-3">Outreach Excellence:</span>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                    {faculty.outreachExcellence.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 
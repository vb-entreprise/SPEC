"use client"

import React from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const ContactPage = () => {
  const programs = [
    {
      category: "PHARMACY",
      programs: [
        { name: "B.Pharm", contact: "+91-757 483 1731" },
        { name: "M.Pharm (Pharmacology / Pharmaceutics / Quality Assurance)", contact: "+91-757 483 1731" },
        { name: "Pharm.D*", contact: "+91-757 483 1731" },
      ]
    },
    {
      category: "ENGINEERING",
      programs: [
        { name: "Bachelor of Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Computer Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Civil Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Computer Science & Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Electronics & Communication Engineering*", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "IT Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Mechanical Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Working Professional – IT / CSE", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Master of Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
      ]
    },
    {
      category: "MBA",
      programs: [
        { name: "MBA (Marketing / Finance / HRM / IT)", contact: "+91-757 483 1735" },
        { name: "IMBA (Integrated MBA)", contact: "+91-757 483 1735" },
        { name: "Working Professional – MBA", contact: "+91-757 483 1735" },
      ]
    },
    {
      category: "DIPLOMA & VOCATIONAL",
      programs: [
        { name: "Diploma Engineering*", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "Computer Engineering", contact: "+91-757 485 7901, +91-799 012 5153" },
        { name: "B.Voc. (Software Development)", contact: "+91-757 485 7901, +91-799 012 5153" },
      ]
    },
    {
      category: "COMMERCE & MANAGEMENT",
      programs: [
        { name: "BBA (General)", contact: "+91-757 483 1736, +91-799 019 2895" },
        { name: "BCA", contact: "+91-757 483 1736, +91-799 019 2895" },
        { name: "Working Professional – MBA", contact: "+91-757 483 1736, +91-799 019 2895" },
        { name: "B.Com. (English Medium)", contact: "+91-757 483 1733, +91-635 203 4272" },
        { name: "M.Com. (English Medium)", contact: "+91-757 483 1733, +91-635 203 4272" },
      ]
    },
    {
      category: "B.ED & SPIAS",
      programs: [
        { name: "B.Ed.", contact: "+91-757 483 1732" },
        { name: "B.Sc. (Microbiology / Biotechnology / Chemistry)", contact: "+91-757 483 1734" },
        { name: "M.Sc. (IT)", contact: "+91-757 483 1734" },
      ]
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white" style={{ paddingTop: '14rem', paddingBottom: '4rem' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sardar Patel Education Campus
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get in touch with us for admissions, inquiries, and more information about our academic programs
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Vidyanagar - Vadtal Road, Bakrol,<br />
                        Anand, Gujarat - 388 315.
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Phone (Trust Office)</h3>
                      <p className="text-gray-600">+91 798 488 8427</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">spec_campus@spec.edu.in</p>
                      <p className="text-gray-600">specmanagement@spec.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Location</h2>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Google Maps Integration</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Sardar Patel Education Campus, Anand
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://maps.google.com/?q=Sardar+Patel+Education+Campus+Anand" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View larger map
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Academic Programs */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Programs</h2>
                
                <div className="space-y-8">
                  {programs.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h3 className="text-lg font-bold text-blue-600 mb-4">{category.category}</h3>
                      <div className="space-y-3">
                        {category.programs.map((program, programIndex) => (
                          <div key={programIndex} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">{program.name}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:ml-4">
                              <p className="text-sm text-blue-600 font-medium">Contact: {program.contact}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Contact Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Pharmacy</p>
                <p className="text-sm text-gray-600">+91-757 483 1731</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Engineering</p>
                <p className="text-sm text-gray-600">+91-757 485 7901</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">MBA</p>
                <p className="text-sm text-gray-600">+91-757 483 1735</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Commerce</p>
                <p className="text-sm text-gray-600">+91-757 483 1736</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage 
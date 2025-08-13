"use client"

import React from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function ManagementPage() {
  const programs = [
    {
      title: "MBA",
      duration: "2 Years",
      description: "Master of Business Administration with diverse specializations"
    },
    {
      title: "BBA",
      duration: "3 Years", 
      description: "Bachelor of Business Administration with comprehensive business education"
    },
    {
      title: "PGDM",
      duration: "2 Years",
      description: "Post Graduate Diploma in Management"
    },
    {
      title: "Executive MBA",
      duration: "1-2 Years",
      description: "Executive MBA for working professionals"
    }
  ]

  const specializations = [
    "Marketing Management",
    "Financial Management", 
    "Human Resource Management",
    "Operations Management",
    "International Business",
    "Digital Marketing",
    "Business Analytics",
    "Entrepreneurship"
  ]

  const facilities = [
    {
      title: "Management Labs",
      description: "Modern computer labs with business software and simulation tools"
    },
    {
      title: "Case Study Rooms",
      description: "Interactive classrooms designed for case-based learning"
    },
    {
      title: "Corporate Partnerships",
      description: "Strong ties with leading corporations for internships and placements"
    },
    {
      title: "Incubation Center",
      description: "Support for student entrepreneurship and startup ventures"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[42rem] overflow-hidden -mt-[120px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=800&fit=crop"
              alt="Business Meeting"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-green-900/70" />
          
          <div className="relative z-10 cu-container h-full flex flex-col items-center text-white text-center pt-[320px]">
            <div className="max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/institutes/MBA.png"
                  alt="Management Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Management Studies
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Developing Tomorrow's Business Leaders
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                APPLY NOW →
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
              <a href="/institutes" className="hover:text-blue-600">INSTITUTES</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">MANAGEMENT STUDIES</span>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Institute of Management Studies</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Institute of Management Studies at SPEC is dedicated to developing exceptional business leaders 
                and managers who can drive organizational success in today's dynamic business environment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive programs combine theoretical knowledge with practical application, 
                preparing students to excel in various management roles across diverse industries.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-12 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-green-600 font-semibold mb-3">{program.duration}</p>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Management Specializations</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center hover:bg-green-100 transition-colors duration-300">
                  <h3 className="font-semibold text-gray-800">{spec}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-12 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-green-600 text-white">
          <div className="cu-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">800+</div>
                <div className="text-green-100">Students Enrolled</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">75+</div>
                <div className="text-green-100">Faculty Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">96%</div>
                <div className="text-green-100">Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-green-100">Corporate Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="cu-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Lead in Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our prestigious management programs and develop the skills to become a successful business leader.
            </p>
            <div className="space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
"use client"

import React from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function AppliedSciencesPage() {
  const programs = [
    {
      title: "B.Sc",
      duration: "3 Years",
      description: "Bachelor of Science in various scientific disciplines"
    },
    {
      title: "M.Sc",
      duration: "2 Years", 
      description: "Master of Science with advanced research opportunities"
    },
    {
      title: "B.Tech Biotechnology",
      duration: "4 Years",
      description: "Bachelor of Technology in Biotechnology"
    },
    {
      title: "Ph.D Science",
      duration: "3-5 Years",
      description: "Research doctorate in applied sciences"
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
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&h=800&fit=crop"
              alt="Science Laboratory"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-teal-900/70" />
          
          <div className="relative z-10 cu-container h-full flex flex-col items-center text-white text-center pt-[320px]">
            <div className="max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/institutes/Applied scienece.png"
                  alt="Applied Sciences Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Applied Sciences
              </h1>
              <p className="text-lg md:text-xl text-teal-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Advancing Scientific Knowledge and Innovation
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
              <span className="text-gray-900 font-medium">APPLIED SCIENCES</span>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <section className="py-12 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔬</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-teal-600 font-semibold mb-3">{program.duration}</p>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
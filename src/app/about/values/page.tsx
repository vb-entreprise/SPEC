"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function CoreValuesPage() {
  const coreValues = [
    {
      id: 1,
      title: "Human Dignity",
      points: ["Respecting", "Treating fairly and being inclusive"],
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Empathy",
      points: ["Exhibiting sensibility to others plight", "Exhibit Solidarity through action"],
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Humility",
      points: ["Modesty in success", "Openness to learn"],
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75-7.478a12.121 12.121 0 010-2.25m0 2.25a12.061 12.061 0 01-3.75 0m3.75 0a6.01 6.01 0 001.5.189m-1.5-.189a6.01 6.01 0 01-1.5.189m-3.75 7.478a12.06 12.06 0 014.5 0m-4.5 0a12.121 12.121 0 010-2.25m0 2.25a12.061 12.061 0 013.75 0m-3.75 0a6.01 6.01 0 01-1.5-.189m1.5.189a6.01 6.01 0 011.5-.189M12 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Giving",
      points: ["Contributing to society, nation & family", "Sharing knowledge to create a more enlightened & purposeful society"],
      bgColor: "bg-gradient-to-br from-red-600 to-red-700",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[31rem] bg-gradient-to-r from-gray-600 to-gray-800 -mt-[120px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=400&fit=crop')"
            }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-start items-center text-white text-center pt-[320px] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h1>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors">
              APPLY NOW →
            </button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-2">
          <div className="cu-container">
            <nav className="text-sm text-gray-600">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <span>HOME</span>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center">
                  <span>CORE-VALUES</span>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 font-medium">INDEX</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Content */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            {/* Page Title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The fundamental principles that guide our institution towards excellence and integrity
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {coreValues.map((value) => (
                <div
                  key={value.id}
                  className={`${value.bgColor} rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                >
                  {/* Subtle background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-5 rounded-full transform -translate-x-4 translate-y-4"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      {value.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      {value.title}
                    </h3>

                    {/* Points */}
                    <div className="space-y-3">
                      {value.points.map((point, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                          <p className="text-white/90 leading-relaxed font-light">{point}</p>
                        </div>
                      ))}
                    </div>
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
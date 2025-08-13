"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function RecognitionPage() {
  useEffect(() => {
    document.title = "Recognition & Rankings - SPEC Campus | Top Engineering College in Gujarat"
  }, [])
  const qsRankings = [
    {
      title: "QS ASIA UNIVERSITY RANKINGS BY SUBJECT 2024",
      description: "Ranked among top universities in Asia",
      year: "2024",
      color: "bg-orange-500"
    },
    {
      title: "OVERALL UNIVERSITY RANKINGS BY SUBJECT 2024", 
      description: "Excellence in multiple academic disciplines",
      year: "2024",
      color: "bg-orange-500"
    },
    {
      title: "QS WORLD UNIVERSITY RANKINGS BY SUBJECT 2024",
      description: "Global recognition in subject rankings", 
      year: "2024",
      color: "bg-orange-500"
    }
  ]

  const institutionRankings = [
    {
      title: "PLACEMENT RANKING",
      description: "Top ranking for student placements",
      rank: "1st",
      color: "bg-blue-600"
    },
    {
      title: "PLACEMENT PERFORMANCE",
      description: "Outstanding placement performance",
      rank: "Top 10",
      color: "bg-red-600"
    },
    {
      title: "QS I-GAUGE UNIVERSITY RANKINGS",
      description: "Leading position in QS rankings",
      rank: "1st",
      color: "bg-red-600"
    }
  ]

  const nirfRankings = [
    {
      title: "NIRF INDIA UNIVERSITY RANKINGS 2024",
      description: "National recognition by NIRF",
      rank: "Top 100",
      color: "bg-blue-700"
    },
    {
      title: "NIRF INDIA INNOVATION RANKINGS 2024", 
      description: "Innovation and research excellence",
      rank: "Top 50",
      color: "bg-blue-700"
    },
    {
      title: "NIRF INDIA PHARMACY RANKINGS 2024",
      description: "Leading pharmacy education",
      rank: "Top 25",
      color: "bg-blue-700"
    }
  ]

  const outlookRankings = [
    {
      title: "OUTLOOK INDIA UNIVERSITY RANKINGS 2024",
      description: "Premier university recognition",
      rank: "Top 100",
      color: "bg-red-700"
    },
    {
      title: "OUTLOOK BEST COLLEGES RANKINGS 2024",
      description: "Excellence in higher education",
      rank: "Top 50", 
      color: "bg-red-700"
    },
    {
      title: "OUTLOOK STATE UNIVERSITY RANKINGS",
      description: "Leading state university",
      rank: "1st",
      color: "bg-red-700"
    }
  ]

  const weekRankings = [
    {
      title: "THE WEEK HANSA RESEARCH BEST UNIVERSITIES 2024",
      description: "Top university recognition",
      rank: "Top 50",
      color: "bg-red-600"
    },
    {
      title: "THE WEEK BEST UNIVERSITY RANKINGS 2024",
      description: "Excellence in education",
      rank: "Top 100",
      color: "bg-red-600"
    }
  ]

  const todayRankings = [
    {
      title: "INDIA TODAY BEST COLLEGES RANKINGS 2024", 
      description: "Premier college recognition",
      rank: "Top 100",
      color: "bg-red-500"
    }
  ]

  const accreditations = [
    {
      title: "NAAC ACCREDITED WITH 'A+' GRADE",
      description: "Highest accreditation grade",
      grade: "A+",
      color: "bg-orange-600"
    }
  ]

  const qsGaugeRatings = [
    {
      title: "QS I-GAUGE DIAMOND RATING",
      description: "Diamond rating for excellence",
      rating: "Diamond",
      color: "bg-blue-600"
    },
    {
      title: "QS I-GAUGE PLATINUM RATING", 
      description: "Platinum rating recognition",
      rating: "Platinum",
      color: "bg-blue-600"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[42rem] bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden -mt-[120px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=400&fit=crop"
              alt="University Campus"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 cu-container h-full flex flex-col justify-start items-center text-white text-center pt-[320px] pb-8">
            <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold mb-4">
              ★★★★★
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        SPEC CAMPUS<br />
          <span className="text-yellow-400">ACHIEVES 5TH RANK</span><br />
          IN GTU ENGINEERING CATEGORY
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Recognized for excellence in education, research, and innovation. 
              Leading the way in higher education standards across India.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors">
              APPLY NOW →
            </button>
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
              <span className="text-gray-900 font-medium">RECOGNITION</span>
            </div>
          </div>
        </div>

        {/* QS Rankings Section */}
        <section className="py-12 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">QS RANKINGS</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {qsRankings.map((ranking, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-rotate-1 group cursor-pointer">
                  {/* Header Banner with Gradient */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-10 transform -skew-y-2 group-hover:skew-y-2 transition-transform duration-300"></div>
                    <span className="text-sm font-bold relative z-10 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      QS WORLD UNIVERSITY RANKINGS
                    </span>
                  </div>
                  
                  {/* Logo/Branding Area with Animation */}
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        QS
                      </div>
                      <span className="ml-3 text-xs font-bold text-gray-700 group-hover:text-orange-600 transition-colors duration-300">WORLD UNIVERSITY RANKINGS</span>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-orange-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-orange-300 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content with Enhanced Typography */}
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 opacity-20"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {ranking.year}
                        </div>
                        <svg className="w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 11H7v9a2 2 0 002 2h6a2 2 0 002-2v-9h-2m-2-4V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v3m4 0H9"/>
                        </svg>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-3 text-sm leading-tight group-hover:text-orange-800 transition-colors duration-300">
                        {ranking.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {ranking.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-800 text-sm font-semibold group-hover:translate-x-2 transition-all duration-300">
                          Click to Read More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="text-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300">🏆</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institution Rankings */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">INSTITUTION RANKINGS</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {institutionRankings.map((ranking, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:rotate-1 group cursor-pointer">
                  {/* Header Banner with Gradient */}
                  <div className={`bg-gradient-to-r ${ranking.color.includes('blue') ? 'from-blue-600 to-blue-700' : 'from-red-600 to-red-700'} text-white text-center py-3 px-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white opacity-10 transform skew-y-2 group-hover:-skew-y-2 transition-transform duration-300"></div>
                    <span className="text-sm font-bold relative z-10 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                      INSTITUTION RANKINGS
                    </span>
                  </div>
                  
                  {/* Logo/Branding Area */}
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b relative">
                    <div className="flex items-center justify-center">
                      <div className={`${ranking.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center`}>
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        {ranking.rank}
                      </div>
                      <span className={`ml-3 text-xs font-bold text-gray-700 group-hover:${ranking.color.includes('blue') ? 'text-blue-600' : 'text-red-600'} transition-colors duration-300`}>UNIVERSITY RANKINGS</span>
                    </div>
                    {/* Pulse animation */}
                    <div className={`absolute top-2 right-2 w-3 h-3 ${ranking.color.includes('blue') ? 'bg-blue-200' : 'bg-red-200'} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    <div className={`absolute top-0 right-0 w-20 h-20 ${ranking.color.includes('blue') ? 'bg-blue-50' : 'bg-red-50'} rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 opacity-20`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`${ranking.color.includes('blue') ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'} px-3 py-1 rounded-full text-xs font-semibold`}>
                          Rank {ranking.rank}
                        </div>
                        <svg className={`w-5 h-5 ${ranking.color.includes('blue') ? 'text-blue-500' : 'text-red-500'} opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      
                      <h3 className={`font-bold text-gray-900 mb-3 text-sm leading-tight group-hover:${ranking.color.includes('blue') ? 'text-blue-800' : 'text-red-800'} transition-colors duration-300`}>
                        {ranking.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {ranking.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <a href="#" className={`inline-flex items-center ${ranking.color.includes('blue') ? 'text-blue-600 hover:text-blue-800' : 'text-red-600 hover:text-red-800'} text-sm font-semibold group-hover:translate-x-2 transition-all duration-300`}>
                          Click to Read More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="text-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300">🎯</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NIRF Rankings */}
        <section className="py-12 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">NIRF RANKING</h2>
              <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {nirfRankings.map((ranking, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-rotate-1 group cursor-pointer">
                  {/* Header Banner with Indian Flag Colors */}
                  <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center py-3 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-10 transform -skew-y-2 group-hover:skew-y-2 transition-transform duration-300"></div>
                    <span className="text-sm font-bold relative z-10 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
                      </svg>
                      NIRF RANKINGS
                    </span>
                  </div>
                  
                  {/* Logo/Branding Area */}
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-blue-50 border-b relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 text-blue-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center border">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        NIRF
                      </div>
                      <span className="ml-3 text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">INDIA RANKINGS</span>
                    </div>
                    {/* Indian flag inspired decoration */}
                    <div className="absolute top-2 right-2 w-3 h-1 bg-orange-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3.5 right-2 w-3 h-1 bg-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 opacity-20"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {ranking.rank}
                        </div>
                        <svg className="w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-3 text-sm leading-tight group-hover:text-blue-800 transition-colors duration-300">
                        {ranking.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {ranking.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold group-hover:translate-x-2 transition-all duration-300">
                          Click to Read More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="text-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300">🇮🇳</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outlook Rankings */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">OUTLOOK RANKINGS</h2>
              <div className="w-24 h-1 bg-red-700 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {outlookRankings.map((ranking, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:rotate-1 group cursor-pointer">
                  {/* Header Banner */}
                  <div className="bg-gradient-to-r from-red-700 to-red-800 text-white text-center py-3 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-10 transform skew-y-2 group-hover:-skew-y-2 transition-transform duration-300"></div>
                    <span className="text-sm font-bold relative z-10 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      OUTLOOK RANKINGS
                    </span>
                  </div>
                  
                  {/* Logo/Branding Area */}
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-red-50 border-b relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-red-700 to-red-800 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                        OUTLOOK
                      </div>
                      <span className="ml-3 text-xs font-bold text-gray-700 group-hover:text-red-600 transition-colors duration-300">INDIA RANKINGS</span>
                    </div>
                    {/* Magazine-style decoration */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-red-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-300 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 opacity-20"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {ranking.rank}
                        </div>
                        <svg className="w-5 h-5 text-red-500 opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                        </svg>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-3 text-sm leading-tight group-hover:text-red-800 transition-colors duration-300">
                        {ranking.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {ranking.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-semibold group-hover:translate-x-2 transition-all duration-300">
                          Click to Read More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <div className="text-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300">📊</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Section with Multiple Rankings */}
        <section className="py-12 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold mb-4">
                ★★★★★
              </div>
              <h2 className="text-3xl font-bold mb-4">
                RANKS #1 AMONG TOP<br />
                PRIVATE INDIAN UNIVERSITIES IN<br />
                <span className="text-yellow-400">QS ASIA RANKINGS 2024</span>
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Continuing our tradition of excellence with top rankings across multiple prestigious rating agencies and publications.
              </p>
            </div>

            {/* The Week Rankings */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">THE WEEK RANKINGS</h3>
                <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {weekRankings.map((ranking, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                        {ranking.rank}
                      </div>
                    </div>
                    <h4 className="font-bold mb-3 text-sm leading-tight">
                      {ranking.title}
                    </h4>
                    <p className="text-blue-100 text-sm">
                      {ranking.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* India Today Rankings */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">INDIA TODAY RANKINGS</h3>
                <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                {todayRankings.map((ranking, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                        {ranking.rank}
                      </div>
                    </div>
                    <h4 className="font-bold mb-3 text-sm leading-tight">
                      {ranking.title}
                    </h4>
                    <p className="text-blue-100 text-sm">
                      {ranking.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* NAAC Accreditation & QS I-Gauge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* NAAC */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">NAAC ACCREDITATION</h3>
                  <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
                </div>
                {accreditations.map((acc, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                        {acc.grade}
                      </div>
                    </div>
                    <h4 className="font-bold mb-3 text-sm leading-tight">
                      {acc.title}
                    </h4>
                    <p className="text-blue-100 text-sm">
                      {acc.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* QS I-Gauge */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">QS I-GAUGE RATINGS</h3>
                  <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
                </div>
                <div className="space-y-4">
                  {qsGaugeRatings.map((rating, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          {rating.rating}
                        </div>
                      </div>
                      <h4 className="font-bold mb-3 text-sm leading-tight">
                        {rating.title}
                      </h4>
                      <p className="text-blue-100 text-sm">
                        {rating.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
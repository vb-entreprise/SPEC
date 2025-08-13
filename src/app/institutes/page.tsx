"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function InstitutesPage() {
  const institutes = [
    {
      title: "Sardar Patel College of Pharmacy",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      logo: "/images/institutes/Pharmacy.png",
      href: "/institutes/specpharmacy"
    },
    {
      title: "Sardar Patel College of Engineering and Technology", 
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3250e5db?w=400&h=300&fit=crop",
      logo: "/images/institutes/Engineering.png",
      href: "/institutes/specengineering"
    },
    {
      title: "Sardar Patel College of Administration & Management - MBA",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop", 
      logo: "/images/institutes/MBA.png",
      href: "/institutes/management"
    },
    {
      title: "Sardar Patel College of Administration & Management",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      logo: "/images/institutes/Admnistration and management.png",
      href: "/institutes/administration"
    },
    {
      title: "Sardar Patel Institute of Applied Science",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      logo: "/images/institutes/Applied scienece.png",
      href: "/institutes/applied-sciences"
    },
    {
      title: "Sardar Patel College of Commerce",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      logo: "/images/institutes/Commerce.png",
      href: "/institutes/commerce"
    },
    {
      title: "Sardar Patel College of Education",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      logo: "/images/institutes/B.Ed.png",
      href: "/institutes/education"
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
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=800&fit=crop"
              alt="University Campus"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 cu-container h-full flex flex-col items-center text-white text-center pt-[320px]">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Our Institutes
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover world-class education across diverse disciplines at Chandigarh University
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <span className="text-gray-900 font-medium">INSTITUTES</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best University in India</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Chandigarh University stands as a forward-thinking institution with a global outlook. Our diverse range of institutes offers world-class education across multiple disciplines, ensuring students receive comprehensive academic preparation for their chosen careers.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Each institute maintains the highest standards of academic excellence while fostering innovation, research, and practical learning. Our faculty comprises experienced professionals and researchers who bring both theoretical knowledge and industry experience to the classroom.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With state-of-the-art facilities, industry partnerships, and a commitment to student success, our institutes prepare graduates to excel in their chosen fields and contribute meaningfully to society.
              </p>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Institutes</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Institutes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {institutes.map((institute, index) => (
                <Link key={index} href={institute.href}>
                  <div className="flex flex-col items-center group cursor-pointer">
                    {/* Round logo card */}
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center p-4 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:border-blue-200">
                      <Image
                        src={institute.logo}
                        alt={`${institute.title} Logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Institute title */}
                    <h3 className="text-gray-800 font-bold text-lg mt-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {institute.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
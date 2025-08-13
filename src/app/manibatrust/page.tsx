"use client"

import React from "react"
import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function ManibaCharitableTrustPage() {
  const teamActivities = [
    {
      title: "Household Skills Training",
      description: "Sewing, stitching, embroidery, jewelry making, block printing linen, making envelopes, paper bags and much more.",
      icon: "🧵"
    },
    {
      title: "Computer Education",
      description: "Individuals with computer skills educate all the needy about the basic use of a computer.",
      icon: "💻"
    },
    {
      title: "Yoga & Self Defense",
      description: "Yoga experts and individuals with physical training skills teach yoga and self defense, especially to children and women.",
      icon: "🧘‍♀️"
    },
    {
      title: "Motivational Programs",
      description: "Motivational speakers help motivate and inspire women and seniors to become independent.",
      icon: "🎯"
    },
    {
      title: "Field Trips",
      description: "For children, we are organizing field trips to natural environments such as parks, lakes, rivers, mountains, zoos, bird watching, etc.",
      icon: "🌳"
    },
    {
      title: "Basic Needs Support",
      description: "Feeding homeless and providing them with basic needs including clothing, etc.",
      icon: "🤝"
    }
  ]

  const partners = [
    {
      name: "Homeless Empowerment International",
      logo: "🏠"
    },
    {
      name: "Ayurveda The True Cure",
      logo: "🌿"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[42rem] bg-gradient-to-r from-purple-800 to-indigo-900 overflow-hidden -mt-[120px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1920&h=400&fit=crop"
              alt="Maniba Charitable Trust"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 cu-container h-full flex flex-col justify-start items-center text-white text-center pt-[320px] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Maniba Charitable Trust</h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              A Registered Nonprofit Social Organization committed to raising public awareness, 
              providing better living conditions for orphaned and abandoned children, 
              empowering women and senior citizens to improve their lives.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold transition-colors">
              GET INVOLVED →
            </button>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="cu-container">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">HOME</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">MANIBA CHARITABLE TRUST</span>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">ABOUT US</h2>
                <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Maniba Charitable Trust is a Registered Nonprofit Social Organization. The goal of this organization is to raise public awareness, provide better living conditions for orphaned and abandoned children, empowering women and senior citizens to improve their lives.
                </p>
                
                <p className="mb-6">
                  The impact of poverty, illiteracy and homelessness is more so on children, especially of those families who are migrating to survive. These families struggle to care for their children in terms of nutrition and education so at times turn violent and abusive towards their children.
                </p>
                
                <p className="mb-6">
                  Majority of women in our society are still dependent on others and have no means to support themselves when need arises. Necessary skills to survive are difficult for them to achieve unless they find support from organization like Maniba.
                </p>
                
                <p className="mb-6">
                  Many senior citizens are very dependent on their children during their retired life. Some of the seniors are uncared for or abandoned and have no place to go. This is where Maniba Charitable Trust wants to provide help so that the seniors can live happy and purposeful lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR TEAM</h2>
              <h3 className="text-xl text-purple-600 font-semibold mb-2">ABOUT OUR TEAM</h3>
              <p className="text-lg text-gray-600 mb-6">Together We Achieve More</p>
              <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our Team: It's not about the strength of just one individual player, but the strength of the entire Team. Each player works as a part of the Team that achieves success. A few details of our Team efforts are described below:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Associates Partners Section */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ASSOCIATES PARTNER</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-8 text-white text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-bold mb-2">{index + 1}. {partner.name}</h3>
                  <p className="text-purple-100">Logo: {partner.logo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
          <div className="cu-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
              <p className="text-purple-100 mb-8 text-lg">
                Together we can create positive change in the lives of children, women, and senior citizens. 
                Your support can help us continue our mission of empowerment and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Donate Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
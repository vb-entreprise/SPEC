"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Bed, Users, Wifi, Utensils, Shield, Clock, MapPin, Phone, Mail, CheckCircle, Star, Building, Car } from "lucide-react"

export default function HostelPage() {
  const [selectedFacility, setSelectedFacility] = useState("")

  const hostelBlocks = [
    {
      name: "Boys Hostel Block A",
      capacity: "200 Students",
      rooms: "100 Rooms",
      type: "Double Sharing",
      amenities: ["AC Rooms", "Attached Bathroom", "Study Table", "Wardrobe"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Boys Hostel Block B",
      capacity: "150 Students",
      rooms: "75 Rooms",
      type: "Triple Sharing",
      amenities: ["Non-AC Rooms", "Common Bathroom", "Study Table", "Wardrobe"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Girls Hostel Block A",
      capacity: "180 Students",
      rooms: "90 Rooms",
      type: "Double Sharing",
      amenities: ["AC Rooms", "Attached Bathroom", "Study Table", "Wardrobe"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Girls Hostel Block B",
      capacity: "120 Students",
      rooms: "60 Rooms",
      type: "Triple Sharing",
      amenities: ["Non-AC Rooms", "Common Bathroom", "Study Table", "Wardrobe"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const facilities = [
    {
      name: "Dining Hall",
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
      description: "Modern dining facility serving nutritious meals",
      features: ["3 meals per day", "Vegetarian & Non-vegetarian options", "Clean & hygienic kitchen", "24/7 water facility"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop"
    },
    {
      name: "Wi-Fi Connectivity",
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      description: "High-speed internet access throughout the hostel",
      features: ["24/7 internet access", "High-speed connectivity", "Secure network", "Technical support"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      name: "Security",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      description: "24/7 security with CCTV surveillance",
      features: ["24/7 security guards", "CCTV surveillance", "Entry/exit monitoring", "Emergency response"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      name: "Medical Facility",
      icon: <Users className="w-8 h-8 text-red-600" />,
      description: "On-campus medical support and first aid",
      features: ["First aid facility", "Regular health checkups", "Emergency medical support", "Tie-up with nearby hospitals"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      name: "Transportation",
      icon: <Car className="w-8 h-8 text-purple-600" />,
      description: "Convenient transportation services",
      features: ["College bus service", "City connectivity", "Airport/railway pickup", "Local transport support"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      name: "Recreation",
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      description: "Recreation and entertainment facilities",
      features: ["Indoor games", "TV room", "Reading room", "Outdoor sports area"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    }
  ]

  const rules = [
    "Students must follow hostel timings strictly",
    "No unauthorized guests allowed in rooms",
    "Maintain cleanliness and hygiene",
    "No smoking or alcohol consumption",
    "Respect other students' privacy",
    "Follow electricity and water conservation",
    "Report any issues to hostel warden",
    "Attend mandatory hostel meetings"
  ]

  const fees = [
    {
      type: "AC Double Sharing",
      amount: "₹45,000/year",
      includes: ["3 meals per day", "Wi-Fi", "Laundry", "Cleaning service"]
    },
    {
      type: "Non-AC Double Sharing",
      amount: "₹35,000/year",
      includes: ["3 meals per day", "Wi-Fi", "Laundry", "Cleaning service"]
    },
    {
      type: "AC Triple Sharing",
      amount: "₹40,000/year",
      includes: ["3 meals per day", "Wi-Fi", "Laundry", "Cleaning service"]
    },
    {
      type: "Non-AC Triple Sharing",
      amount: "₹30,000/year",
      includes: ["3 meals per day", "Wi-Fi", "Laundry", "Cleaning service"]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[42rem] bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden -mt-[120px]">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 cu-container h-full flex flex-col justify-start items-center text-white text-center pt-[320px] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hostel Facilities</h1>
            <p className="text-xl text-orange-100 mb-6 max-w-3xl mx-auto">
              Comfortable, safe, and modern accommodation facilities providing a home away from home
              for students with all essential amenities and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply for Hostel
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="cu-container">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-orange-600">HOME</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">HOSTEL</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
                <p className="text-gray-600">Hostel Blocks</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">650+</h3>
                <p className="text-gray-600">Students Accommodated</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Bed className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">325</h3>
                <p className="text-gray-600">Total Rooms</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">Security</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hostel Blocks */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hostel Blocks</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Modern, well-maintained hostel blocks with separate facilities for boys and girls,
                offering comfortable accommodation with all essential amenities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hostelBlocks.map((block, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gradient-to-r from-gray-200 to-gray-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{block.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">{block.capacity}</div>
                        <div className="text-sm text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">{block.rooms}</div>
                        <div className="text-sm text-gray-600">Rooms</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {block.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Amenities:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {block.amenities.map((amenity, amenityIndex) => (
                          <div key={amenityIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            {amenity}
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

        {/* Facilities */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hostel Facilities</h2>
              <p className="text-gray-600">Comprehensive facilities ensuring comfortable student life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    {facility.icon}
                    <h3 className="text-lg font-bold text-gray-900 ml-3">{facility.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                  
                  <div className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fees Structure */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hostel Fees Structure</h2>
              <p className="text-gray-600">Transparent and affordable accommodation fees</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fees.map((fee, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{fee.type}</h3>
                  <div className="text-2xl font-bold text-orange-600 mb-4">{fee.amount}</div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Includes:</h4>
                    {fee.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules and Regulations */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Hostel Rules & Regulations</h2>
                <p className="text-gray-600">Guidelines for maintaining discipline and harmony</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {rules.slice(0, 4).map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {rules.slice(4, 8).map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Hostel Contact Information</h2>
                <p className="text-gray-600">Get in touch with hostel administration</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">
                    SPEC Campus<br />
                    Vidyanagar - Vadtal Road<br />
                    Bakrol, Anand, Gujarat
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+91 798 488 8427</p>
                  <p className="text-gray-600 text-sm">Hostel Warden</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">hostel@spec.edu.in</p>
                  <p className="text-gray-600 text-sm">24/7 Support</p>
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
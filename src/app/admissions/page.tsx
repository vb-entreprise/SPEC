"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Mail, Phone, MapPin, Calendar, GraduationCap, BookOpen, Award, X } from "lucide-react"

export default function AdmissionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    program: "",
    category: "",
    qualification: "",
    percentage: "",
    yearOfPassing: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your application! We'll contact you soon.")
    setIsModalOpen(false)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      program: "",
      category: "",
      qualification: "",
      percentage: "",
      yearOfPassing: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      message: ""
    })
  }

  const openModal = (programName: string, category: string) => {
    setSelectedProgram(programName)
    setFormData(prev => ({
      ...prev,
      program: programName,
      category: category
    }))
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProgram("")
  }

  const ugPrograms = [
    {
      name: "B.E. Computer Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with PCM",
      institute: "SPEC Engineering"
    },
    {
      name: "B.E. Information Technology",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with PCM",
      institute: "SPEC Engineering"
    },
    {
      name: "B.E. Civil Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with PCM",
      institute: "SPEC Engineering"
    },
    {
      name: "B.E. Mechanical Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with PCM",
      institute: "SPEC Engineering"
    },
    {
      name: "B.E. Electrical Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with PCM",
      institute: "SPEC Engineering"
    },
    {
      name: "B.Pharm",
      duration: "4 Years",
      seats: "100",
      eligibility: "10+2 with PCB",
      institute: "SPEC Pharmacy"
    },
    {
      name: "BBA (General & ISM)",
      duration: "3 Years",
      seats: "60",
      eligibility: "10+2 any stream",
      institute: "SPEC Management"
    },
    {
      name: "BCA",
      duration: "3 Years",
      seats: "60",
      eligibility: "10+2 any stream",
      institute: "SPEC Management"
    },
    {
      name: "B.Com.",
      duration: "3 Years",
      seats: "60",
      eligibility: "10+2 any stream",
      institute: "SPEC Commerce"
    },
    {
      name: "B.Ed.",
      duration: "2 Years",
      seats: "50",
      eligibility: "Graduation in any stream",
      institute: "SPEC Education"
    },
    {
      name: "B.Sc. (Microbiology/Biotechnology/Chemistry)",
      duration: "3 Years",
      seats: "40",
      eligibility: "10+2 with PCB",
      institute: "SPEC Applied Sciences"
    }
  ]

  const pgPrograms = [
    {
      name: "MBA (Finance/HRM/Marketing/IT)",
      duration: "2 Years",
      seats: "60",
      eligibility: "Graduation in any stream",
      institute: "SPEC Management"
    },
    {
      name: "M.Pharm (Pharmaceutics)",
      duration: "2 Years",
      seats: "18",
      eligibility: "B.Pharm",
      institute: "SPEC Pharmacy"
    },
    {
      name: "M.Pharm (Quality Assurance)",
      duration: "2 Years",
      seats: "18",
      eligibility: "B.Pharm",
      institute: "SPEC Pharmacy"
    },
    {
      name: "M.Pharm (Pharmacology)",
      duration: "2 Years",
      seats: "18",
      eligibility: "B.Pharm",
      institute: "SPEC Pharmacy"
    },
    {
      name: "M.E. (Structural Engineering)",
      duration: "2 Years",
      seats: "18",
      eligibility: "B.E. Civil Engineering",
      institute: "SPEC Engineering"
    },
    {
      name: "M.Com.",
      duration: "2 Years",
      seats: "30",
      eligibility: "B.Com. or equivalent",
      institute: "SPEC Commerce"
    },
    {
      name: "M.Sc. (Information Technology)",
      duration: "2 Years",
      seats: "20",
      eligibility: "B.Sc. IT/Computer Science",
      institute: "SPEC Applied Sciences"
    }
  ]

  const certificatePrograms = [
    {
      name: "Organic Farming",
      duration: "3 Months",
      seats: "30",
      eligibility: "10+2",
      institute: "SPEC Applied Sciences"
    },
    {
      name: "Python for Biologists",
      duration: "2 Months",
      seats: "25",
      eligibility: "10+2 with Biology",
      institute: "SPEC Applied Sciences"
    },
    {
      name: "Digital Marketing",
      duration: "3 Months",
      seats: "40",
      eligibility: "10+2",
      institute: "SPEC Management"
    },
    {
      name: "Cyber Security",
      duration: "4 Months",
      seats: "30",
      eligibility: "10+2",
      institute: "SPEC Engineering"
    },
    {
      name: "Hindu Studies",
      duration: "6 Months",
      seats: "50",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "Basics of Tally Prime",
      duration: "2 Months",
      seats: "35",
      eligibility: "10+2",
      institute: "SPEC Commerce"
    },
    {
      name: "Skill Development",
      duration: "3 Months",
      seats: "45",
      eligibility: "10+2",
      institute: "SPEC Management"
    },
    {
      name: "Stock Market Trading",
      duration: "2 Months",
      seats: "30",
      eligibility: "10+2",
      institute: "SPEC Management"
    },
    {
      name: "GST (Goods and Service Tax)",
      duration: "1 Month",
      seats: "40",
      eligibility: "10+2",
      institute: "SPEC Commerce"
    },
    {
      name: "CCC-Course on Computer Concepts",
      duration: "3 Months",
      seats: "50",
      eligibility: "10+2",
      institute: "SPEC Management"
    },
    {
      name: "Chartered Accountant Foundation Course",
      duration: "4 Months",
      seats: "25",
      eligibility: "10+2",
      institute: "SPEC Commerce"
    },
    {
      name: "English Elementary and Advance",
      duration: "6 Months",
      seats: "40",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "English Tense Specific",
      duration: "3 Months",
      seats: "35",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "English Elementary",
      duration: "4 Months",
      seats: "40",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "English Tense Specific Fastrack",
      duration: "2 Months",
      seats: "30",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "English Advanced A1",
      duration: "3 Months",
      seats: "25",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "English Advanced A2 (with Phonetics)",
      duration: "4 Months",
      seats: "25",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "French Elementary",
      duration: "6 Months",
      seats: "30",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "German Elementary",
      duration: "6 Months",
      seats: "25",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "Spanish Elementary",
      duration: "6 Months",
      seats: "25",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "French Elementary Fastrack",
      duration: "4 Months",
      seats: "25",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "French DLF A1",
      duration: "3 Months",
      seats: "20",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "French DLF A2",
      duration: "4 Months",
      seats: "20",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "Vocal (Singing) A1 & A2",
      duration: "6 Months",
      seats: "30",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "Classical (Singing) A1 & A2",
      duration: "6 Months",
      seats: "25",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "Kathak Elementary",
      duration: "8 Months",
      seats: "20",
      eligibility: "10+2",
      institute: "SPEC Education"
    },
    {
      name: "Bharatanatyam Elementary",
      duration: "8 Months",
      seats: "20",
      eligibility: "10+2",
      institute: "SPEC Education"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[42rem] bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden -mt-[120px]">
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="relative z-10 cu-container h-full flex flex-col justify-start items-center text-white text-center pt-[320px] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions Open</h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Join SPEC Campus and embark on a journey of excellence. Choose from our wide range of 
              undergraduate, postgraduate, and certificate programs designed for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Brochure
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
              <span className="text-gray-900 font-medium">ADMISSIONS</span>
            </div>
          </div>
        </div>

        {/* Quick Info Section */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Admission Deadline</h3>
                <p className="text-gray-600">Applications close on July 31, 2025</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Programs Available</h3>
                <p className="text-gray-600">50+ Programs across all disciplines</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Scholarships</h3>
                <p className="text-gray-600">Merit-based scholarships available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of programs designed to meet industry standards 
                and prepare you for successful careers.
              </p>
            </div>

            {/* UG Programs */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Undergraduate Programs</h3>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ugPrograms.map((program, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{program.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="font-semibold">Duration:</span> {program.duration}</p>
                      <p><span className="font-semibold">Seats:</span> {program.seats}</p>
                      <p><span className="font-semibold">Eligibility:</span> {program.eligibility}</p>
                      <p><span className="font-semibold">Institute:</span> {program.institute}</p>
                    </div>
                    <button 
                      onClick={() => openModal(program.name, "UG")}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* PG Programs */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Postgraduate Programs</h3>
                <div className="w-24 h-1 bg-green-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pgPrograms.map((program, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{program.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="font-semibold">Duration:</span> {program.duration}</p>
                      <p><span className="font-semibold">Seats:</span> {program.seats}</p>
                      <p><span className="font-semibold">Eligibility:</span> {program.eligibility}</p>
                      <p><span className="font-semibold">Institute:</span> {program.institute}</p>
                    </div>
                    <button 
                      onClick={() => openModal(program.name, "PG")}
                      className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Programs */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate Programs</h3>
                <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificatePrograms.map((program, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{program.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="font-semibold">Duration:</span> {program.duration}</p>
                      <p><span className="font-semibold">Seats:</span> {program.seats}</p>
                      <p><span className="font-semibold">Eligibility:</span> {program.eligibility}</p>
                      <p><span className="font-semibold">Institute:</span> {program.institute}</p>
                    </div>
                    <button 
                      onClick={() => openModal(program.name, "Certificate")}
                      className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  Have questions about admissions? Fill out the form below and we'll get back to you.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Admission Inquiry Form</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Program Category</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Category</option>
                          <option value="ug">Undergraduate Programs</option>
                          <option value="pg">Postgraduate Programs</option>
                          <option value="certificate">Certificate Programs</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Specific Program</label>
                        <input
                          type="text"
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          placeholder="e.g., B.E. Computer Engineering"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your interests and any questions you have..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Address</h4>
                          <p className="text-gray-600">
                            Vidyanagar - Vadtal Road, Bakrol,<br />
                            Anand, Gujarat - 388 315
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Phone</h4>
                          <p className="text-gray-600">+91 798 488 8427</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Email</h4>
                          <p className="text-gray-600">spec_campus@spec.edu.in</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Why Choose SPEC?</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Industry-aligned curriculum
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Experienced faculty
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Modern infrastructure
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Placement assistance
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Scholarship opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 sm:p-6 rounded-t-xl">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold">Application Form</h2>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base">Program: {selectedProgram}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 transition-colors ml-4"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Address Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={2}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Pincode *</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    Academic Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Highest Qualification *</label>
                      <input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., 12th Standard"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Percentage/CGPA *</label>
                      <input
                        type="text"
                        name="percentage"
                        value={formData.percentage}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., 85% or 8.5 CGPA"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Year of Passing *</label>
                      <input
                        type="number"
                        name="yearOfPassing"
                        value={formData.yearOfPassing}
                        onChange={handleInputChange}
                        required
                        min="2000"
                        max="2025"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                    Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Parent/Guardian Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Parent/Guardian Phone *</label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Parent/Guardian Email</label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                    Additional Information
                  </h3>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Additional Information</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any additional information or questions..."
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
} 
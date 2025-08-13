"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Award, GraduationCap, DollarSign, Users, Calendar, BookOpen, X, CheckCircle, Star } from "lucide-react"

export default function ScholarshipsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedScholarship, setSelectedScholarship] = useState("")
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
    currentProgram: "",
    currentYear: "",
    previousPercentage: "",
    familyIncome: "",
    scholarshipType: "",
    reason: "",
    documents: "",
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
    console.log("Scholarship application submitted:", formData)
    alert("Thank you for your scholarship application! We'll review and contact you soon.")
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
      currentProgram: "",
      currentYear: "",
      previousPercentage: "",
      familyIncome: "",
      scholarshipType: "",
      reason: "",
      documents: "",
      message: ""
    })
  }

  const openModal = (scholarshipName: string) => {
    setSelectedScholarship(scholarshipName)
    setFormData(prev => ({
      ...prev,
      scholarshipType: scholarshipName
    }))
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedScholarship("")
  }

  const scholarships = [
    {
      name: "Merit-Based Scholarship",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      description: "For students with outstanding academic performance",
      amount: "Up to 50% tuition fee waiver",
      eligibility: "Minimum 85% in previous qualification",
      duration: "Full program duration",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      name: "Need-Based Scholarship",
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      description: "For economically disadvantaged students",
      amount: "Up to 75% tuition fee waiver",
      eligibility: "Family income below ₹8 lakhs per annum",
      duration: "Full program duration",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      name: "Sports Scholarship",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      description: "For outstanding sports achievements",
      amount: "Up to 40% tuition fee waiver",
      eligibility: "State/National level sports achievements",
      duration: "Full program duration",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Girl Child Scholarship",
      icon: <Users className="w-8 h-8 text-pink-500" />,
      description: "Special scholarship for female students",
      amount: "Up to 30% tuition fee waiver",
      eligibility: "Female students with 75%+ marks",
      duration: "Full program duration",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      name: "First Generation Learner",
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      description: "For first-generation college students",
      amount: "Up to 35% tuition fee waiver",
      eligibility: "First in family to pursue higher education",
      duration: "Full program duration",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      name: "Academic Excellence",
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      description: "For consistent academic excellence",
      amount: "Up to 60% tuition fee waiver",
      eligibility: "Consistent 90%+ marks in academics",
      duration: "Full program duration",
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ]

  const benefits = [
    "Tuition fee waivers up to 75%",
    "Merit-based and need-based options",
    "Multiple scholarship categories",
    "Easy application process",
    "Transparent selection criteria",
    "Regular scholarship reviews",
    "Additional financial aid support",
    "Career counseling included"
  ]

  const requirements = [
    "Valid government ID proof",
    "Income certificate (for need-based)",
    "Academic transcripts",
    "Sports certificates (if applicable)",
    "Family income proof",
    "Domicile certificate",
    "Caste certificate (if applicable)",
    "Disability certificate (if applicable)"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[42rem] bg-gradient-to-r from-green-600 to-emerald-700 overflow-hidden -mt-[120px]">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 cu-container h-full flex flex-col justify-start items-center text-white text-center pt-[320px] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarships & Financial Aid</h1>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Making quality education accessible to all. Explore our comprehensive scholarship programs
              designed to support deserving students in their academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => openModal("General Scholarship")}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="cu-container">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-green-600">HOME</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">SCHOLARSHIPS</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">₹2.5 Cr+</h3>
                <p className="text-gray-600">Total Scholarships Awarded</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Students Benefited</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
                <p className="text-gray-600">Scholarship Categories</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <DollarSign className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">75%</h3>
                <p className="text-gray-600">Max Fee Waiver</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarship Programs */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Scholarships</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer a variety of scholarship programs to support students from different backgrounds
                and with different needs. Find the scholarship that best fits your profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 ${scholarship.borderColor}`}>
                  <div className="flex items-center mb-4">
                    {scholarship.icon}
                    <h3 className="text-lg font-bold text-gray-900 ml-3">{scholarship.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{scholarship.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                      <span className="font-semibold">{scholarship.amount}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{scholarship.eligibility}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 text-purple-600 mr-2" />
                      <span>{scholarship.duration}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(scholarship.name)}
                    className={`w-full bg-gradient-to-r ${scholarship.color} text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Apply for this Scholarship
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Requirements */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
              <p className="text-gray-600">Simple steps to apply for scholarships</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Scholarship</h3>
                <p className="text-gray-600 text-sm">Select the scholarship that best matches your profile and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fill Application</h3>
                <p className="text-gray-600 text-sm">Complete the online application form with all required details</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Documents</h3>
                <p className="text-gray-600 text-sm">Upload all necessary documents and certificates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Approved</h3>
                <p className="text-gray-600 text-sm">Receive confirmation and scholarship benefits</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scholarship Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 sm:p-6 rounded-t-xl">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold">Scholarship Application</h2>
                  <p className="text-green-100 mt-1 text-sm sm:text-base">Scholarship: {selectedScholarship}</p>
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
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      <label className="block text-xs font-medium text-gray-700 mb-1">Current Program *</label>
                      <input
                        type="text"
                        name="currentProgram"
                        value={formData.currentProgram}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., B.E. Computer Engineering"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Current Year *</label>
                      <select
                        name="currentYear"
                        value={formData.currentYear}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select Year</option>
                        <option value="1st">1st Year</option>
                        <option value="2nd">2nd Year</option>
                        <option value="3rd">3rd Year</option>
                        <option value="4th">4th Year</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Previous Percentage/CGPA *</label>
                      <input
                        type="text"
                        name="previousPercentage"
                        value={formData.previousPercentage}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., 85% or 8.5 CGPA"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Family Annual Income *</label>
                      <input
                        type="text"
                        name="familyIncome"
                        value={formData.familyIncome}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., ₹5,00,000"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Scholarship Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                    Scholarship Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Reason for Scholarship *</label>
                      <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        placeholder="Explain why you need this scholarship and how it will help you..."
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Documents to be Submitted</label>
                      <textarea
                        name="documents"
                        value={formData.documents}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="List the documents you will submit (Income certificate, marksheets, etc.)"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      ></textarea>
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
                      placeholder="Any additional information that might help your application..."
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-800 transition-all shadow-md"
                  >
                    Submit Scholarship Application
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
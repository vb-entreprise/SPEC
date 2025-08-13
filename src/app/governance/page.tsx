"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Users, Building, Award, FileText, Shield, TrendingUp, CheckCircle, Star } from "lucide-react"

export default function GovernancePage() {
  const governanceStructure = [
    {
      title: "Board of Governors",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "The highest governing body responsible for strategic decisions and institutional policies",
      members: [
        "Dr. Maniba Patel - Chairperson",
        "Prof. Dr. Dhaval Patel - Director",
        "Dr. Ramesh Patel - Secretary",
        "Dr. Suresh Patel - Treasurer",
        "Dr. Meera Patel - Member"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Academic Council",
      icon: <Building className="w-8 h-8 text-green-600" />,
      description: "Oversees academic policies, curriculum development, and quality assurance",
      members: [
        "Prof. Dr. Dhaval Patel - Chairman",
        "Dr. Amit Shah - Dean Academics",
        "Dr. Priya Sharma - Dean Research",
        "Dr. Rajesh Kumar - Dean Student Affairs",
        "Prof. Dr. Sunita Patel - Member Secretary"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Executive Committee",
      icon: <Award className="w-8 h-8 text-purple-600" />,
      description: "Implements policies and manages day-to-day administrative operations",
      members: [
        "Prof. Dr. Dhaval Patel - Director",
        "Dr. Amit Shah - Deputy Director",
        "Dr. Priya Sharma - Academic Head",
        "Dr. Rajesh Kumar - Administrative Head",
        "Dr. Meera Patel - Finance Head"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Quality Assurance Cell",
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      description: "Ensures quality standards and continuous improvement in all aspects",
      members: [
        "Dr. Priya Sharma - Coordinator",
        "Dr. Rajesh Kumar - Deputy Coordinator",
        "Prof. Dr. Sunita Patel - Member",
        "Dr. Amit Shah - Member",
        "Dr. Meera Patel - Member"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ]

  const policies = [
    {
      title: "Academic Policies",
      description: "Comprehensive guidelines for academic excellence and student development",
      features: [
        "Credit-based curriculum system",
        "Continuous evaluation methods",
        "Industry-academia collaboration",
        "Research and innovation focus"
      ]
    },
    {
      title: "Administrative Policies",
      description: "Transparent and efficient administrative procedures and guidelines",
      features: [
        "Transparent admission process",
        "Merit-based selection criteria",
        "Equal opportunity policies",
        "Grievance redressal system"
      ]
    },
    {
      title: "Financial Policies",
      description: "Sound financial management and transparent fee structure",
      features: [
        "Transparent fee structure",
        "Scholarship and financial aid",
        "Regular financial audits",
        "Investment in infrastructure"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Continuous quality improvement and accreditation standards",
      features: [
        "NAAC accreditation standards",
        "Regular quality audits",
        "Faculty development programs",
        "Infrastructure enhancement"
      ]
    }
  ]

  const achievements = [
    {
      title: "NAAC Accreditation",
      value: "A+ Grade",
      description: "National Assessment and Accreditation Council",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "ISO Certification",
      value: "ISO 9001:2015",
      description: "Quality Management System",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: "Years of Excellence",
      value: "25+ Years",
      description: "Serving quality education",
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Student Success",
      value: "95%+",
      description: "Placement rate",
      icon: <Award className="w-6 h-6 text-purple-500" />
    }
  ]

  const committees = [
    {
      name: "Anti-Ragging Committee",
      purpose: "Prevents and addresses ragging incidents",
      members: "5 members including student representatives"
    },
    {
      name: "Women's Grievance Cell",
      purpose: "Addresses women-specific issues and concerns",
      members: "4 members with female majority"
    },
    {
      name: "SC/ST Cell",
      purpose: "Ensures welfare of SC/ST students",
      members: "3 members including SC/ST representatives"
    },
    {
      name: "Disciplinary Committee",
      purpose: "Maintains discipline and code of conduct",
      members: "6 members including faculty and students"
    },
    {
      name: "Library Committee",
      purpose: "Manages library resources and services",
      members: "4 members including librarian"
    },
    {
      name: "Sports Committee",
      purpose: "Promotes sports and physical activities",
      members: "5 members including sports coordinator"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Institutional Governance</h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Transparent, accountable, and effective governance structure ensuring quality education
              and institutional excellence at SPEC Campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Policies
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Handbook
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
              <span className="text-gray-900 font-medium">GOVERNANCE</span>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <section className="py-12 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Institutional Achievements</h2>
              <p className="text-gray-600">Recognition of our commitment to excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.value}</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governance Structure</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our multi-layered governance structure ensures transparency, accountability, and effective
                decision-making at every level of the institution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {governanceStructure.map((structure, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {structure.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{structure.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{structure.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Key Members:</h4>
                    <ul className="space-y-2">
                      {structure.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policies and Guidelines */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Policies & Guidelines</h2>
              <p className="text-gray-600">Comprehensive policies ensuring institutional excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                  <p className="text-gray-600 mb-4">{policy.description}</p>
                  
                  <div className="space-y-2">
                    {policy.features.map((feature, featureIndex) => (
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

        {/* Committees */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Institutional Committees</h2>
              <p className="text-gray-600">Specialized committees ensuring comprehensive institutional management</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.map((committee, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{committee.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{committee.purpose}</p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Members:</span> {committee.members}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Principles */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Governance Principles</h2>
                <p className="text-gray-600">Core principles guiding our institutional governance</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                      <p className="text-gray-600 text-sm">Open and transparent decision-making processes with clear communication to all stakeholders.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Accountability</h3>
                      <p className="text-gray-600 text-sm">Clear responsibility and answerability for all decisions and actions taken by the institution.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusivity</h3>
                      <p className="text-gray-600 text-sm">Inclusive governance involving diverse stakeholders in decision-making processes.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                      <p className="text-gray-600 text-sm">Commitment to maintaining high standards of academic and administrative excellence.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
                      <p className="text-gray-600 text-sm">Adherence to all statutory requirements, regulations, and quality standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                      <p className="text-gray-600 text-sm">Encouraging innovative approaches in governance and institutional development.</p>
                    </div>
                  </div>
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
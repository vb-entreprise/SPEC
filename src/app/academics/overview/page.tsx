"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award, 
  Globe, 
  Lightbulb, 
  Target, 
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Calendar,
  FileText,
  BookMarked,
  Zap,
  Shield
} from "lucide-react"

export default function AcademicsOverviewPage() {
  const academicStats = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      value: "19+",
      label: "Academic Programs",
      description: "Undergraduate & Postgraduate"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      value: "300+",
      label: "Expert Faculty",
      description: "Industry & Academic Experience"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      value: "2",
      label: "NAAC Accredited",
      description: "Quality Assurance"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      value: "300+",
      label: "Industry MOUs",
      description: "Global Partnerships"
    }
  ]

  const institutes = [
    {
      name: "SPEC Engineering",
      programs: ["B.E. Civil", "B.E. Mechanical", "B.E. Electrical", "B.E. IT", "B.Tech CSE", "B.Tech ECE", "B.Tech Mechanical"],
      color: "from-orange-500 to-red-600",
      icon: "⚙️"
    },
    {
      name: "SPEC Pharmacy",
      programs: ["B.Pharm", "M.Pharm Pharmaceutics", "M.Pharm Pharmacology", "M.Pharm QA", "Pharm.D"],
      color: "from-blue-600 to-indigo-600",
      icon: "💊"
    },
    {
      name: "Institute of Management",
      programs: ["MBA", "BBA"],
      color: "from-green-500 to-emerald-600",
      icon: "📊"
    },
    {
      name: "Institute of Commerce",
      programs: ["B.Com", "M.Com"],
      color: "from-purple-500 to-violet-600",
      icon: "💰"
    },
    {
      name: "Institute of Applied Sciences",
      programs: ["B.Sc", "M.Sc"],
      color: "from-pink-500 to-rose-600",
      icon: "🔬"
    },
    {
      name: "Institute of Education",
      programs: ["B.Ed"],
      color: "from-teal-500 to-cyan-600",
      icon: "📚"
    },
    {
      name: "Institute of Administration",
      programs: ["BBA", "MBA"],
      color: "from-indigo-500 to-blue-600",
      icon: "🏛️"
    }
  ]

  const academicFeatures = [
    {
      icon: <BookMarked className="w-6 h-6 text-blue-600" />,
      title: "Flexible Choice Based Credit System",
      description: "Students can choose from 70+ electives and customize their learning path according to their interests and career goals."
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: "Advanced Technologies & Integration",
      description: "State-of-the-art laboratories and technology integration across all programs for hands-on learning."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Project-based & Experiential Learning",
      description: "Real-world projects, industry collaborations, and practical training to enhance employability skills."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Quality Assurance & Accreditation",
      description: "NAAC accredited institutes with continuous quality improvement and international standards."
    }
  ]

  const teachingPractices = [
    {
      title: "Interactive Learning",
      description: "Blend of traditional and modern teaching methodologies including flipped classrooms, case studies, and group discussions.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Industry Integration",
      description: "Regular industry visits, guest lectures from professionals, and live projects with corporate partners.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Technology-Enhanced",
      description: "Smart classrooms, e-learning platforms, and digital tools to enhance the learning experience.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Research-Oriented",
      description: "Encouragement of research activities, publication opportunities, and participation in conferences.",
      icon: <Lightbulb className="w-5 h-5" />
    }
  ]

  const evaluationSystem = [
    {
      phase: "Continuous Assessment",
      weightage: "40%",
      components: ["Assignments", "Projects", "Presentations", "Class Participation"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      phase: "Mid-Semester Examination",
      weightage: "20%",
      components: ["Theory Papers", "Practical Tests", "Viva Voce"],
      color: "bg-green-100 text-green-800"
    },
    {
      phase: "End-Semester Examination",
      weightage: "40%",
      components: ["Comprehensive Theory", "Practical Examination", "Project Evaluation"],
      color: "bg-purple-100 text-purple-800"
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
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Discover our comprehensive academic framework designed to nurture talent, 
              foster innovation, and prepare students for successful careers in a dynamic world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Programs
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
              <span className="text-gray-900 font-medium">ACADEMICS OVERVIEW</span>
            </div>
          </div>
        </div>

        {/* Academic Statistics */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Excellence at a Glance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to academic excellence is reflected in our comprehensive programs, 
                experienced faculty, and industry partnerships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {academicStats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutes Overview */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Academic Institutes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Seven specialized institutes offering diverse programs across multiple disciplines 
                with industry-aligned curriculum and modern facilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutes.map((institute, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-32 bg-gradient-to-r ${institute.color} flex items-center justify-center`}>
                    <span className="text-4xl">{institute.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{institute.name}</h3>
                    <div className="space-y-2">
                      {institute.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Features */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Distinctive Academic Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our academic framework is designed to provide students with a competitive edge 
                through innovative learning approaches and industry integration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {academicFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Practices */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Teaching Practices</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our faculty employs modern pedagogical approaches to ensure effective learning 
                and skill development among students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teachingPractices.map((practice, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {practice.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{practice.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation System */}
        <section className="py-16 bg-white">
          <div className="cu-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Evaluation System</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our multi-dimensional evaluation approach ensures holistic assessment of student 
                performance and continuous improvement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {evaluationSystem.map((phase, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${phase.color}`}>
                    {phase.weightage}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                  <div className="space-y-2">
                    {phase.components.map((component, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {component}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="cu-container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Academic Journey?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join SPEC Campus and experience world-class education with industry-ready skills 
              and global opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
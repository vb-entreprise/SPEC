import { Header } from "@/components/layout/Header"
import Link from "next/link"
import { BookOpen, Dumbbell, Bus, MessageSquare, FileText, Users, Link2, FileCheck, User, FileSpreadsheet, UsersRound } from "lucide-react"

export default function StudentServicesPage() {
  const menuItems = [
    {
      title: "Academic Programs",
      description: "Explore our comprehensive range of academic programs and courses.",
      icon: BookOpen,
      link: "/student-services/academic-programs",
      color: "bg-blue-500"
    },
    {
      title: "GYM Facility",
      description: "State-of-the-art gymnasium facilities for students' physical fitness.",
      icon: Dumbbell,
      link: "/student-services/gym-facility",
      color: "bg-red-500"
    },
    {
      title: "Transportation & Hostel Facility",
      description: "Information about campus transportation and accommodation options.",
      icon: Bus,
      link: "/student-services/transportation-hostel",
      color: "bg-green-500"
    },
    {
      title: "Skill Development Cell (SPEC TALKS)",
      description: "Enhance your skills through our specialized development programs.",
      icon: Users,
      link: "/spec-talk",
      color: "bg-purple-500"
    },
    {
      title: "Examination Result",
      description: "Access your examination results and academic performance records.",
      icon: FileCheck,
      link: "/student-services/examination-result",
      color: "bg-yellow-500"
    },
    {
      title: "Campus Life @SPEC",
      description: "Experience the vibrant campus life and student activities at SPEC.",
      icon: Users,
      link: "/student-services/campus-life",
      color: "bg-pink-500"
    },
    {
      title: "Connect with Management",
      description: "Direct communication channel with the institution's management.",
      icon: MessageSquare,
      link: "/student-services/connect-management",
      color: "bg-indigo-500"
    },
    {
      title: "Circular",
      description: "Stay updated with the latest announcements and circulars.",
      icon: FileSpreadsheet,
      link: "/student-services/circular",
      color: "bg-teal-500"
    },
    {
      title: "SPECIAN TEAM",
      description: "Meet our dedicated team of professionals and staff members.",
      icon: UsersRound,
      link: "/student-services/specian-team",
      color: "bg-orange-500"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-28">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Services</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Access all student-related services and facilities in one place
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cu-container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.link}
                  className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
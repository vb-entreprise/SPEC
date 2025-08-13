import { Header } from "@/components/layout/Header"
import Image from "next/image"
import Link from "next/link"
import { FaIndustry, FaUsers, FaPrayingHands, FaRunning, FaGraduationCap, FaCalendarAlt, FaNewspaper } from "react-icons/fa"

export default function CampusLifePage() {
  const activities = [
    {
      title: "Industrial Visits",
      description: "Regular industry exposure through organized visits to leading companies and manufacturing units.",
      icon: FaIndustry,
      image: "/images/campus-life/industrial-visit.jpg"
    },
    {
      title: "NSS/NCC",
      description: "Develop leadership and social service skills through National Service Scheme and National Cadet Corps programs.",
      icon: FaUsers,
      image: "/images/campus-life/nss-ncc.jpg"
    },
    {
      title: "Cultural Celebrations",
      description: "Vibrant cultural events celebrating festivals and traditions throughout the academic year.",
      icon: FaUsers,
      image: "/images/campus-life/cultural.jpg"
    },
    {
      title: "Campus Events",
      description: "Regular campus-wide celebrations, competitions, and technical festivals.",
      icon: FaCalendarAlt,
      image: "/images/campus-life/campus-events.jpg"
    },
    {
      title: "Internships",
      description: "Industry-aligned internship opportunities for practical experience and skill development.",
      icon: FaGraduationCap,
      image: "/images/campus-life/internship.jpg"
    },
    {
      title: "Yoga & Wellness",
      description: "Regular yoga sessions and wellness activities for physical and mental well-being.",
      icon: FaPrayingHands,
      image: "/images/campus-life/yoga.jpg"
    },
    {
      title: "Sports",
      description: "State-of-the-art sports facilities and regular tournaments for all-round development.",
      icon: FaRunning,
      image: "/images/campus-life/sports.jpg"
    }
  ]

  const stayConnected = [
    {
      title: "Events Calendar",
      description: "Stay updated with upcoming events, workshops, and activities",
      icon: FaCalendarAlt,
      link: "/events-calendar"
    },
    {
      title: "Campus News",
      description: "Latest updates, achievements, and announcements from SPEC",
      icon: FaNewspaper,
      link: "/campus-news"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-500 to-orange-700 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-28">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Campus Life</h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Experience a vibrant and enriching student life at SPEC with diverse activities and opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-16 bg-white">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Campus Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <activity.icon className="h-6 w-6 text-orange-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
                    </div>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay Connected Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Stay Connected</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {stayConnected.map((item, index) => (
                <Link 
                  href={item.link} 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 flex items-start hover:shadow-md transition-shadow duration-300"
                >
                  <item.icon className="h-8 w-8 text-orange-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Student Life Quote */}
        <section className="py-16 bg-orange-50">
          <div className="cu-container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Life at SPEC
              </h2>
              <p className="text-lg text-gray-700 italic">
                "Our campus life is designed to nurture not just academic excellence, but also personal growth, 
                leadership qualities, and lifelong friendships. Join us in creating memorable experiences and 
                building a foundation for your future success."
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
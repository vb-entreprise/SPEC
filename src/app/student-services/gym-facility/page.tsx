import { Header } from "@/components/layout/Header"
import Image from "next/image"
import Link from "next/link"

export default function GymFacilityPage() {
  const safetyRules = [
    "Food, Gum, Beverages and Glass items are prohibited.",
    "Use of facilities and equipment is it your own risk.",
    "Use equipment properly and follow directions carefully.",
    "Do not lean on the equipments. Keep your hands away from any moving parts.",
    "No food or drinks (except water). No Smoking.",
    "Children under 18 must be accompanied by an adult.",
    "Proper fitness attire is required. No boots, street shoes, sandlas or bare feet.",
    "Please return all equipment to its place and wipe down machines after use.",
    "Anyone found defacing or damaging Gym court or equipment is subject to disciplinary action and will be held financially responsible."
  ]

  const gymTiming = {
    morning: "07:00 to 9:00 AM",
    evening: "04:00 to 06:00 PM"
  }

  const gymImages = [
    {
      src: "/images/gym/1.jpg",
      alt: "SPEC Gym & Sports Complex Entrance"
    },
    {
      src: "/images/gym/2.jpg",
      alt: "Weights and Dumbbells Area"
    },
    {
      src: "/images/gym/3.jpg",
      alt: "Student using Bench Press"
    },
    {
      src: "/images/gym/4.jpg",
      alt: "Cardio Equipment Area"
    },
    {
      src: "/images/gym/5.jpg",
      alt: "Additional Cardio Equipment"
    },
    {
      src: "/images/gym/6.jpg",
      alt: "Students Training Area"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 to-red-800 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-28">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GYM Facility</h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                State-of-the-art gymnasium facilities for students' physical fitness
              </p>
            </div>
          </div>
        </section>

        <div className="cu-container px-4 py-8">
          {/* Coordinator Message Section */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Coordinator Message</h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-48 flex-shrink-0">
                <Image
                  src="/images/gym/coordinator.jpg"
                  alt="Mr. Paresh Yadav - Physical Instructor"
                  width={192}
                  height={256}
                  className="rounded-lg"
                />
                <div className="mt-3">
                  <h3 className="font-semibold text-blue-800">Mr. Paresh Yadav</h3>
                  <p className="text-sm text-gray-600">(Physical Instructor)</p>
                </div>
              </div>
              <div className="flex-1">
                <blockquote className="text-blue-800 italic mb-4">
                  "To keep the body in good health is a duty.... otherwise we shall not be able to keep our mind strong and clear."
                </blockquote>
                <blockquote className="text-blue-800 italic">
                  "You are going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isnt parallel it how heavy you lift, its parallel to how hard you work."
                </blockquote>
              </div>
            </div>
          </section>

          {/* Safety Rules Section */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">GYM Safety Rules</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {safetyRules.map((rule, index) => (
                <li key={index} className="text-gray-700">{rule}</li>
              ))}
            </ol>
          </section>

          {/* Gym Timing Section */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">GYM Time</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Morning:</span> {gymTiming.morning}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Evening:</span> {gymTiming.evening}
              </p>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gymImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Registration Form Link */}
          <section className="text-center">
            <p className="text-gray-700">
              GYM Registration Form: {" "}
              <Link 
                href="/downloads/gym-registration-form.pdf" 
                className="text-blue-600 hover:underline font-medium"
              >
                Download
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
} 
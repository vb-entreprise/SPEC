import { Header } from "@/components/layout/Header"
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaTwitter, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa"

export default function ConnectManagementPage() {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/spec.tft/",
      icon: FaFacebook,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/spec_campus/",
      icon: FaInstagram,
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCJhl_dvCdewkZ_g9Q-Jh8hA",
      icon: FaYoutube,
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/spec-campus-1361a4144/",
      icon: FaLinkedin,
      color: "bg-blue-700 hover:bg-blue-800"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/spec_tft",
      icon: FaTwitter,
      color: "bg-sky-500 hover:bg-sky-600"
    }
  ]

  const programs = {
    pg: [
      "M.Pharm",
      "MBA",
      "M.E.",
      "M.Com.",
      "M.Sc. (IT)",
      "Working Professionals(IT/CSE)",
      "iMBA*"
    ],
    ug: [
      "B.Pharm",
      "Pharm.D",
      "B.E.",
      "B.Ed.",
      "B.Sc.",
      "BCA",
      "BBA",
      "B.Com",
      "ECE"
    ],
    d2d: [
      "Comp.",
      "IT",
      "Civil",
      "Mech.",
      "EC.",
      "CSE"
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-28">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect with Management</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Direct communication channel between SPEC Management and students
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="cu-container px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                SPEC Management Body develops a direct dialogue with the students studying in constituent colleges of SPEC at regular intervals 
                in order to take feedback and suggestions from students about various academic and other activities. This is the window 
                through which SPEC Management Body addresses students' opinions and solves their problems, if any. This direct communication 
                channel has been developed with a view to strengthen decision making at Campus level.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                SPEC Campus located at Vallabh Vidyanagar-Vadtal Road, Bakrol, Anand, Gujarat and is Managed by Tirupati Foundation Trust. 
                SPEC is known for offering unique learning opportunities through variety of programs.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Academic Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">PG Programs</h3>
                <ul className="space-y-2">
                  {programs.pg.map((program, index) => (
                    <li key={index} className="text-gray-700">{program}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">UG Programs</h3>
                <ul className="space-y-2">
                  {programs.ug.map((program, index) => (
                    <li key={index} className="text-gray-700">{program}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">D2D Programs</h3>
                <ul className="space-y-2">
                  {programs.d2d.map((program, index) => (
                    <li key={index} className="text-gray-700">{program}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 bg-white">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Connect With Us</h2>
            
            {/* Social Media Links */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white rounded-lg p-4 flex flex-col items-center justify-center transition duration-300`}
                  >
                    <social.icon className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <FaWhatsapp className="h-5 w-5 text-green-500 mr-3" />
                    WhatsApp: 079848 88427
                  </p>
                  <p className="flex items-center text-gray-700">
                    <FaEnvelope className="h-5 w-5 text-blue-500 mr-3" />
                    Email: tfrust@hotmail.com
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect Form</h3>
                <a 
                  href="https://forms.gle/5w1qeVzajKSRP5Ar5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Fill out our connect form
                  <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
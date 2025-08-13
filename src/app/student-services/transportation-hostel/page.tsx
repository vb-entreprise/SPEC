import { Header } from "@/components/layout/Header"
import Image from "next/image"
import Link from "next/link"

export default function TransportationHostelPage() {
  const hostels = [
    { name: "Manmandir Hostel", link: "MOU" },
    { name: "R. S. Girls Hostel", link: "MOU" },
    { name: "Sweet Home Girls Hostel", link: "MOU" },
    { name: "Students PG Hostel" },
    { name: "Shivay Palace Hostels", link: "MOU" },
    { name: "Maa Hostel", link: "MOU" },
    { name: "Narayan Swaroop Girls Hostel", link: "MOU" },
    { name: "Satukratu PG and Hostel", link: "MOU" },
    { name: "Laxminarayan Girls Hostel", link: "MOU" },
    { name: "Satukrtu Boys Hostel" },
    { name: "UBS Boys Hostel" },
    { name: "Shivay Girls and Boys Hostel", link: "MOU" },
    { name: "Shri Lohana Jalaram Vidhyarth Hostel", link: "MOU" }
  ]

  const sunitaTravels = {
    contacts: [
      { name: "Jagdish Dixit", phone: "9426561722" },
      { name: "Rakesh Dixit", phone: "9724190723" }
    ],
    address: "65, Tarun Nagar, B.h Induchacha House, Chhani Jakat Naka, Vadodara"
  }

  const busImages = [
    { src: "/images/transport/bus1.jpg", alt: "SPEC College Bus" },
    { src: "/images/transport/bus2.jpg", alt: "College Transportation" },
    { src: "/images/transport/bus3.jpg", alt: "Student Transport Service" },
    { src: "/images/transport/vtcos.jpg", alt: "VTCOS Time Table" }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-28">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transportation & Hostel</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Convenient transportation and comfortable accommodation facilities for students
              </p>
            </div>
          </div>
        </section>

        <div className="cu-container px-4 py-8">
          {/* Transportation Section */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Transportation Facilities</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The students coming to campus have majorly all-facilities that include transportation and hostel facilities. The campus has a VTCOS Bus stand mediating the buses and other transport vehicles along with specifically allotted spot by the GSRTC to provide and promote convenient transportation to shuttle from various parts of the region and helps them conveniently commute to the campus. SPEC has 1-bus and few motors available by 24*7 to facilitate students' various industrial visits.
              </p>
              
              {/* Bus Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {busImages.slice(0, 3).map((image, index) => (
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
            </div>
          </section>

          {/* Hostel Section */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Hostel Facilities</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                For students avoiding long distance travel and avail hostel facilities, SPEC provides safely communicated hostel facilities with the partnered agencies that abides by the university hostel facility regulations that provide a home-like environment as well as access to all necessary services.
              </p>
              <p className="text-gray-700">
                At present, the campus is linked to the following hostel houses for the accommodation facilities, with a specific advantage in the yearly package for the SPEC campus students:
              </p>
              <ul className="list-decimal pl-5 space-y-2">
                {hostels.map((hostel, index) => (
                  <li key={index} className="text-gray-700">
                    {hostel.name}
                    {hostel.link && (
                      <span className="ml-2 text-blue-600">- {hostel.link}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Travel Information Section */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Travel Information for Vadodara Students</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Students traveling from Vadodara can conveniently reach our college via the Sunita Travels bus service. For any queries or assistance related to your journey, please contact Sunita Travels directly.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Sunita Travels Contact Details:</h3>
                {sunitaTravels.contacts.map((contact, index) => (
                  <p key={index} className="text-gray-700">
                    {contact.name} : {contact.phone}
                  </p>
                ))}
                <p className="mt-2 text-gray-700">
                  <strong>Address:</strong> {sunitaTravels.address}
                </p>
                <p className="mt-2 text-gray-600 italic">
                  Feel free to reach out to them for information on bus schedules, ticket bookings, and any other travel-related inquiries.
                </p>
              </div>
            </div>
          </section>

          {/* VTCOS Time Table */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">VTCOS Time Table</h2>
            <div className="flex justify-center">
              <Image
                src="/images/transport/vtcos.jpg"
                alt="VTCOS Bus Time Table"
                width={600}
                height={800}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 
import { Header } from "@/components/layout/Header"
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa"
import { format, parse } from "date-fns"

interface Circular {
  title: string;
  date: string | null;
  endDate?: string;
  link: string;
}

export default function CircularPage() {
  const circulars: Circular[] = [
    {
      title: "Dharohar 2025",
      date: "07-03-2025",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "International Women's Day",
      date: "08-03-2025",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Annual Sports Meet 2025",
      date: "29-02-2025",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Regarding presence in Sardar Patel Pothi Yatra",
      date: null,
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "76th Republic Day",
      date: "26-01-2025",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Alumni Meet - 2025",
      date: "20-12-2024",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "SPEC GARBOTSAV - 2024",
      date: "28-09-2024",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Ganesh Mahotsav - 2024",
      date: "07-09-2024",
      endDate: "11-09-2024",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "NAND-UTSAV",
      date: "24-08-2024",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Celebration of 78th Independence day",
      date: "15-08-2024",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "21 June International Yoga Day Celebration 2024",
      date: "21-06-2024",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: 'The Annual Day Celebration Of the SPEC "Dharohar"',
      date: null,
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Celebration of 75th Republic Day",
      date: "26-01-2024",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Kite Festival - 2024",
      date: null,
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "SPEC Alumni Meet 2023-24",
      date: null,
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "SPEC Garbotsav - 2023",
      date: null,
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Ganesh Mahotsav Celebration - 2023",
      date: null,
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "Celebration of 77th Independence day",
      date: "15-08-2023",
      link: "#" // Replace with actual Google Drive link
    },
    {
      title: "21 June International Yoga Day Celebration at Spec",
      date: "21-06-2023",
      link: "#" // Replace with actual Google Drive link
    }
  ]

  const formatDisplayDate = (date: string, endDate?: string): string => {
    if (!date) return ""
    try {
      const [day, month, year] = date.split("-").map(Number)
      const parsedDate = new Date(year, month - 1, day)
      const formattedDate = format(parsedDate, "dd MMM yyyy")
      
      if (endDate) {
        const [endDay, endMonth, endYear] = endDate.split("-").map(Number)
        const parsedEndDate = new Date(endYear, endMonth - 1, endDay)
        const formattedEndDate = format(parsedEndDate, "dd MMM yyyy")
        return `${formattedDate} to ${formattedEndDate}`
      }
      
      return formattedDate
    } catch (error) {
      return date
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 to-green-800 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-28">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Circulars & Announcements</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Stay updated with the latest announcements, events, and celebrations at SPEC
              </p>
            </div>
          </div>
        </section>

        {/* Circulars List */}
        <section className="py-16">
          <div className="cu-container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {circulars.map((circular, index) => (
                    <a
                      key={index}
                      href={circular.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 hover:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600">
                            {circular.title}
                            <FaExternalLinkAlt className="inline-block ml-2 h-4 w-4 text-gray-400" />
                          </h3>
                          {circular.date && (
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <FaCalendarAlt className="mr-2 h-4 w-4 text-gray-400" />
                              {formatDisplayDate(circular.date, circular.endDate)}
                            </p>
                          )}
                        </div>
                        <div className="ml-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            View Details
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="pb-16">
          <div className="cu-container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Click on any circular to view the complete details and related documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
import { Header } from "@/components/layout/Header"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function ExaminationResultPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-28">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Examination Results</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Access your examination results from Gujarat Technological University and Sardar Patel University
              </p>
            </div>
          </div>
        </section>

        <div className="cu-container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GTU Results Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Gujarat Technological University</h2>
                  <p className="text-gray-600 mb-6">
                    Access your GTU examination results through the official GTU results portal.
                  </p>
                </div>
                <img 
                  src="/images/logos/gtu-logo.png" 
                  alt="GTU Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Important Notes:</h3>
                  <ul className="list-disc list-inside text-purple-800 space-y-1">
                    <li>Keep your enrollment number ready</li>
                    <li>Results are typically declared within 45 days of examination</li>
                    <li>Download and save your result PDF for future reference</li>
                  </ul>
                </div>
                <a 
                  href="https://www.gturesults.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-150 ease-in-out"
                >
                  Access GTU Results
                  <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* SPU Results Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sardar Patel University</h2>
                  <p className="text-gray-600 mb-6">
                    View your SPU examination results through the official university portal.
                  </p>
                </div>
                <img 
                  src="/images/logos/spu-logo.png" 
                  alt="SPU Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Important Information:</h3>
                  <ul className="list-disc list-inside text-purple-800 space-y-1">
                    <li>Results are available semester-wise</li>
                    <li>Login with your student credentials</li>
                    <li>Check notifications for result declaration dates</li>
                  </ul>
                </div>
                <a 
                  href="https://www.spuvvn.edu/students_corner/results/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-150 ease-in-out"
                >
                  Access SPU Results
                  <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-600">
              The examination results published on the respective university portals are for immediate information to the examinees. 
              The results displayed are subject to verification by the respective universities. In case of any inadvertent error, 
              the result as declared by the university will be final and binding.
            </p>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600">
              If you face any issues accessing your results, please contact the examination department or reach out to your respective university&apos;s support team.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 
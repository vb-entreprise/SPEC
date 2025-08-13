import Image from "next/image"
import { Header } from "@/components/layout/Header"

export default function SpecTalkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="flex items-center gap-8 pt-28">
              <Image
                src="/spec-talks-logo.png"
                alt="SPEC Talks Logo"
                width={120}
                height={120}
                className="rounded-lg"
              />
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">SPEC Talks</h1>
                <p className="text-xl text-blue-100">
                  A public-speaking platform for the teaching and non-teaching staff of colleges and institutions 
                  managed by Sardar Patel Education Campus, Tirupati Foundation Trust, Bakrol.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Did Sardar Patel Education Campus set up Skills Development Cell?
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                As we know education reform, like other forms of social change, is a process. The world around us is changing fast in every sector as competition has increased in the 21st century. This advancement is both a result of the constant change and upgrading which, in turn, requires constant change and upgrading in everything around. For, it is in the law of nature to change. History takes note of the fact that the way we educate our young learners has evolved in India through Vedic times to the present knowledge era. This process has been gradual though steady over time. Our perceptions about the purpose of education have changed.
              </p>
              <p>
                A person aiming for a promising future, irrespective of sector, needs to equip him/herself with communicative language ability, critical thinking, problem solving skills etc. The way we educate our youth needs to change from the compulsion of rote learning to analysis and interpretation.
              </p>
              <p>
                With this emerging need of skills training among young learners of the nation, SPEC has founded Skills Development Cell with an aim to train students of constituent colleges of SPEC in various employability skills and make them industry-ready. Training in employability skills would help students earn healthy employment and make them able to be self-employed as well.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-16">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Objectives</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                To identify and manage changes to bridge the gap between present education system and requirements of globalized employment from prospective employees
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                To locate hidden potential of students and train them in various skills
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                To provide platform to students' creative and ideas
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                To address the needs of students, opinions of teachers and requirements of employers and other stakeholders
              </li>
            </ul>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              The course on Employability Skills offers training in 12 different modules
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Communication Skills",
                "Public Speaking Skills",
                "Entrepreneurship Skills",
                "Drafting of a Job Application Letter, Resume, CV, Group Discussion and Interview Facing Skills",
                "Minor Research Project Work",
                "Work Ethics and Workplace Etiquettes",
                "Learning from the Losers and the Achievers",
                "Non-Verbal Communication Skills",
                "Emotional Intelligence",
                "Business Terms and Thinking Concepts",
                "Online Certificate Courses",
                "Creative Art"
              ].map((module, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-semibold mb-2">Module-{index + 1}</div>
                  <div className="text-gray-700">{module}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills Development Cell – Team Members</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border px-4 py-2 text-left">Sr. No.</th>
                    <th className="border px-4 py-2 text-left">NAME</th>
                    <th className="border px-4 py-2 text-left">Post</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Dr. Kalpesh Gohil (SPCAM)</td>
                    <td className="border px-4 py-2">Coordinator</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Dr. Mehul Patel (SPCAM)</td>
                    <td className="border px-4 py-2">Member</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Dr. Julie Patel (SPCAM)</td>
                    <td className="border px-4 py-2">Member</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">Mr. Prem Sharma (SPCAM-MBA)</td>
                    <td className="border px-4 py-2">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sessions Section */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Activities performed under the aegis of Skills Development Cell</h2>
            <p className="text-gray-700 mb-8">
              SPEC Talks has been functioning under the aegis of SKILLS DEVELOPMENT CELL of SPEC since 28 April 2022. 
              SPEC Talks session is organized on every Thursday at 3:00 PM. A speaker is required to complete his/her 
              presentation in 30 minutes which is followed by Q&A and Feedback Session which lasts for 15 minutes, maximum.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border px-4 py-2 text-left">Session</th>
                    <th className="border px-4 py-2 text-center">Flyer</th>
                    <th className="border px-4 py-2 text-center">Press Note</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      session: "Twentieth session was conducted by Ms. Foram Patel, Campus Coordinator, Sardar Patel Education Campus, Bakrol",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Nineteenth session was conducted by Adv. Mayur Khunti, Mediator & Representative, A Registered Charitable Trust, Anand",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Eighteenth session was conducted by Dr. Manoj Patel, Principal, Anand Arts College, Anand",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Seventeenth session was conducted by Dr. Paulomi Vyas, Professor, Sardar Patel College of Engineering, SPEC",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Sixteenth session was conducted by Shri Loveaman Shukla, Senior Manager & Branch Head, Federal Bank Ltd., Anand",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Fifteenth session was conducted by Dr. Vishvajit Thakar, Principal, Sardar Patel College of Engineering, SPEC",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Fourteenth session was conducted by Dr. R. D. Modi, Principal, C. P. Patel & F. H. Shah Commerce College, Anand",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Thirteenth session was conducted by Dr. Arti Patel, Assistant Professor in Accountancy, Sardar Patel College of Education, SPEC",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Twelfth session was conducted by Dr. Ashokbhai P Solanki, Madaninish Shikshak, Nagar Prathmik Shala No. 8, Mavalipura, Anand",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Eleventh session was conducted by Dr. Ashish Vora, Assistant Professor in Economics, Sardar Patel College of Administration & Management, SPEC",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Tenth session was conducted by Mr. Jay Patel, Assistant Professor, Sardar Patel College of Engineering, SPEC",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Ninth session was conducted by Mr. Jaineel Dharod, Assistant Professor, Anand Pharmacy College, Anand",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Eighth session was conducted by Dr. Prabhat Kasra, Principal, Sardar Patel College of Education, SPEC",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Seventh session was conducted by Dr. Sunil Kumar Karna, HoD, B M Patel Cardiac Centre, Shree Krishna Hospital, Karamsad",
                      schedule: "Schedule",
                      pressNote: "-"
                    },
                    {
                      session: "Sixth session was conducted by Dr. Sunil Trivedi, Assistant Professor, Sardar Patel College of Administration and Management, SPEC",
                      schedule: "Schedule",
                      pressNote: "Pratah Kaal"
                    },
                    {
                      session: "Fifth session was conducted by Dr. Upama Trivedi, Associate Professor, Sardar Patel College of Pharmacy, SPEC",
                      schedule: "Schedule",
                      pressNote: "Pratah Kaal"
                    },
                    {
                      session: "Fourth session was conducted by Dr. Suyog Upasani, Associate Professor, Sardar Patel College of Administration and Management, SPEC",
                      schedule: "Schedule",
                      pressNote: "Pratah Kaal"
                    },
                    {
                      session: "Third session was conducted by Dr. Vishal Patidar, Director, Sardar Patel College of Administration and Management (MBA), SPEC",
                      schedule: "Schedule",
                      pressNote: "Pratah Kaal"
                    },
                    {
                      session: "Second session was conducted by Dr. Mehul Patel, I/C Principal, Sardar Institute of Applied Sciences, SPEC",
                      schedule: "Schedule",
                      pressNote: "Pratah Kaal"
                    },
                    {
                      session: "First session was conducted by Dr. Kalpesh V Gohil, Assistant Professor in English, Sardar Patel College of Administration and Management, SPEC",
                      schedule: "Schedule",
                      pressNote: "Pratah Kaal"
                    }
                  ].map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="border px-4 py-3">{item.session}</td>
                      <td className="border px-4 py-3 text-center">
                        <a href="#" className="text-blue-600 hover:underline">{item.schedule}</a>
                      </td>
                      <td className="border px-4 py-3 text-center">{item.pressNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
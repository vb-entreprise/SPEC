import { Header } from "@/components/layout/Header"
import Image from "next/image"

export default function SpecianTeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-purple-900 py-28">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 cu-container px-4">
            <div className="text-center pt-10">
              <div className="flex justify-center gap-8 mb-8">
                <Image
                  src="/images/specian/logo-left.png"
                  alt="SPECIAN Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">SPECIAN REGISTRATION</h1>
                  <p className="text-xl text-purple-100">(STUDENT REGISTRATION COUNCIL-SRC)</p>
                </div>
                <Image
                  src="/images/specian/logo-right.png"
                  alt="SPECIAN Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About SRC-SPECIAN */}
        <section className="py-16 bg-white">
          <div className="cu-container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">About SRC-SPECIAN</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    SRC is the off-spring of SPEC, a Statutory Body for the SRC (Students Representative Council), titled as SPECIAN that was launched in January of 2020 and active since then.
                  </p>
                  <p>
                    A students' representative council represents student interests in the overall benefit and wellbeing of the colleges and campus, and functions as the Council including specified functions (roles and responsibilities) for activities like co-curricular, extra-curricular activities, promotions, security, environment safety and infrastructural concerns and sports on the campus.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">Vision</h2>
                <p className="text-gray-600">
                  SPECIAN (SRC) aims to develop and provide a platform for a variety of students' holistic and professional development activities and opportunities, including events, clubs, series, workshops, trainings and co-curricular and extra-curricular activities to round out their skill-sets and gain new knowledge.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">Mission (Objective)</h2>
                <p className="text-gray-600">
                  SPECIAN (SRC) serves an objective of helping students to pursue their hobbies and interests while bringing people together and building a better life for themselves and others through various clubs and events during their campus life at SPEC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500">Advantages of being a SPECIAN</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 italic mb-4">
                  Joining a student club is an excellent way to gain experience, develop skills and make connections with other students who share your interests and passions.
                </p>
                <p className="text-gray-600 italic mb-6">
                  It is more than just a place where children of various age groups spend time with each other, learning and honing their talents. A good school club can help students: Receive insights from their peers, seniors, club advisers, and teachers. Gain fresh perspectives about various ideas and skills.
                </p>
                <div className="grid gap-6">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">1. Gain valuable experience</h3>
                    <p>Joining a student club allows you to work on group projects, plan events and participate in campus activities. By taking on leadership roles within a club, you will have the opportunity to develop your leadership, teamwork and communication skills.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">2. Build your resume</h3>
                    <p>Your club experiences are an excellent resume builder! Being part of a student club can demonstrate to future employers that you have initiative, leadership skills and a passion for a specific field or industry.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">3. Sharpen your skills</h3>
                    <p>Student clubs often provide members with a variety of professional development opportunities, including workshops, trainings and conferences. These activities are a great way to round out your skill set and gain new knowledge.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">4. Serve your community</h3>
                    <p>Many student clubs at the national and International School engage in volunteer and community service activities. Not only does this provide a sense of purpose and fulfillment, it can also demonstrate your commitment to social responsibility to future employers.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">5. Explore new career interests</h3>
                    <p>The study is all about new experiences! By joining a club related to a specific industry or field, you can learn more about different career paths and gain a deeper understanding of what those careers entail.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">6. Invest in your personal growth</h3>
                    <p>Who doesn't want to make new friends and have fun? Club membership is a great way to make meaningful connections with new people on campus, step outside of your comfort zone and discover your passions, interests and strengths.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formation */}
        <section className="py-16 bg-white">
          <div className="cu-container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500">Formation</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  As a club member one knows about one's self, one's interests and one's goals. Students can unravel their strengths like multitasking, organization skills, team Building skills, leadership skills and service mindedness. They can also add skills to their repertoire. The clubs also help in pursuing an old hobby. Networking opportunities being major benefit Club members develop bond among themselves which help in growing their careers. It will help in showcasing one's domain interest, balance between work and hobbies. Activities organized/participated as a club member looks good on the resume.
                </p>
                <p className="mb-4 font-semibold">The Clubs that will works under the same aegis of SPECIAN (SRC) with different sub-categories are:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900">Leadership & Knowledge</h3>
                    <ul className="mt-2 space-y-2">
                      <li>GenZ Leaders Club</li>
                      <li>Quiz and knowledge Club</li>
                      <li>Operations Club</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900">Arts & Culture</h3>
                    <ul className="mt-2 space-y-2">
                      <li>Photography and Media Club</li>
                      <li>Cultural Events Club</li>
                      <li>Creative Zone Club</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900">Community & Development</h3>
                    <ul className="mt-2 space-y-2">
                      <li>Social and Community Club</li>
                      <li>HR and Marketing Club</li>
                      <li>Sponsors and Development Club</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900">Special Interest</h3>
                    <ul className="mt-2 space-y-2">
                      <li>Nature Club</li>
                      <li>Bookaholics and Literature Club</li>
                      <li>Content Writers' Club</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIAN Team Structure */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-purple-500 max-w-4xl mx-auto">SPECIAN Team</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <h3 className="text-xl font-bold text-center py-4 bg-purple-50 border-b">SPECIAN 2023-24</h3>
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Finance", "Shyam Godhani"],
                      ["Event Mangement", "Tirth Patel / Himanshu Parmar"],
                      ["Social Media", "Rakesh Chauhan"],
                      ["Sound System", "Nand Patel / Harendra Rajput"],
                      ["Cultural", "Jay Patel/ Yash Panchal"],
                      ["Discipline", "Kirtan Patel"],
                      ["Stage", "Om Patel"],
                      ["Hospitality", "Mangroliya Smit"]
                    ].map(([position, name], index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{position}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <h3 className="text-xl font-bold text-center py-4 bg-purple-50 border-b">SPECIAN 2024-25</h3>
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Finance", "Dhruv Kalani"],
                      ["Event Mangement", "Dharshil Bharwad"],
                      ["Social Media", "Vanrajsinh Parmar"],
                      ["Sound System", "Akhilesh Pandey"],
                      ["Cultural", "Bushra Patel"],
                      ["Discipline", "Viren Parmar"],
                      ["Stage", "Jaydev Patel/Aniket Parmar"],
                      ["Hospitality", "Kumudini Khatri"]
                    ].map(([position, name], index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{position}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIAN Head */}
        <section className="py-16 bg-white">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-purple-500 max-w-4xl mx-auto">SPECIAN Head</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Shyam Godhani",
                  role: "SPECIAN - Chairman",
                  image: "/images/specian/team/2023/shyam.jpg"
                },
                {
                  name: "Bhavya Patel",
                  role: "SPECIAN - Secretary",
                  image: "/images/specian/team/2023/bhavya.jpg"
                },
                {
                  name: "Dharmik Patel",
                  role: "SPECIAN - Chairman",
                  image: "/images/specian/team/2023/dharmik.jpg"
                },
                {
                  name: "Pranav Patel",
                  role: "SPECIAN - Vice Chairman",
                  image: "/images/specian/team/2023/pranav.jpg"
                },
                {
                  name: "Sakshi Hindocha",
                  role: "SPECIAN - WDC Head",
                  image: "/images/specian/team/2023/sakshi.jpg"
                },
                {
                  name: "Harsh Gondaliya",
                  role: "SPECIAN - Secretary",
                  image: "/images/specian/team/2023/harsh.jpg"
                },
                {
                  name: "Shubham kannojiya",
                  role: "SPECIAN - Vice Secretary",
                  image: "/images/specian/team/2023/shubham.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center bg-purple-50">
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="cu-container px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-purple-500 max-w-4xl mx-auto">Gallery</h2>
            <div className="space-y-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-900">2023-24</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="relative h-64 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src={`/images/specian/gallery/2023-24/${num}.jpg`}
                        alt={`Gallery image ${num}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-900">2024-25</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="relative h-64 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src={`/images/specian/gallery/2024-25/${num}.jpg`}
                        alt={`Gallery image ${num}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
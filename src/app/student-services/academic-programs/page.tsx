import { Header } from "@/components/layout/Header"
import Image from "next/image"

type Program = {
  name: string
  branches?: string[]
  university: string
}

type CertificateCourse = {
  name: string
  managedBy: string
  duration: string
  fee: string
  teachingMode: string
  eligibleCriteria: string
  batchSize?: string
  outline: string
  contactPerson?: string
  contactNumber?: string
  registrationLink?: string
  frequency?: string
  coursesCategory?: string[]
  courseCredit?: string
  brochureImage: string
  moreDetails?: {
    link?: string
    video?: string
    inquiryForm?: string
  }
}

export default function AcademicProgramsPage() {
  const undergraduatePrograms: Program[] = [
    {
      name: "Bachelor of Pharmacy",
      university: "Gujarat Technological University (Ahmedabad)"
    },
    {
      name: "Bachelor of Engineering",
      branches: [
        "Civil Engineering",
        "Computer Engineering",
        "Information Technology",
        "Mechanical Engineering",
        "Electrical Engineering"
      ],
      university: "Gujarat Technological University (Ahmedabad)"
    },
    {
      name: "Bachelor of Computer Applications",
      university: "Sardar Patel University (Vallabh Vidhyanagar)"
    },
    {
      name: "Bachelor of Business Administration (General)",
      university: "Sardar Patel University (Vallabh Vidhyanagar)"
    },
    {
      name: "Bachelor of Commerce (Hons)",
      university: "Sardar Patel University (Vallabh Vidhyanagar)"
    }
  ]

  const postgraduatePrograms: Program[] = [
    {
      name: "Master of Pharmacy",
      branches: [
        "Pharmaceutics",
        "Pharmaceutical Technology",
        "Pharmaceutical Quality Assurance"
      ],
      university: "Gujarat Technological University (Ahmedabad)"
    },
    {
      name: "Master of Engineering",
      branches: [
        "Structural Engineering",
        "CAD/CAM",
        "Power Electronics"
      ],
      university: "Gujarat Technological University (Ahmedabad)"
    },
    {
      name: "Master of Business Administration",
      university: "Gujarat Technological University (Ahmedabad)"
    }
  ]

  const certificateCourses: CertificateCourse[] = [
    {
      name: "Tally Computerized Accounting",
      managedBy: "Sardar Patel College of Commerce",
      duration: "30 hours (2 hours/day)",
      fee: "INR Rs. 5,000/- per head",
      teachingMode: "Offline/ Computer Lab",
      eligibleCriteria: "Anyone (12th Pass)",
      batchSize: "Minimum 20 students",
      outline: "Aim to Equip students with practical skills and knowledge in accounting, financial management, and taxation using Tally Prime.",
      contactPerson: "Ms. Shweta Patel",
      contactNumber: "+91 97230 57581",
      registrationLink: "https://forms.gle/rTKbEX5ScGbhG53PA",
      brochureImage: "/images/brochures/tally-course.jpg"
    },
    {
      name: "Basics of Stock Market",
      managedBy: "Sardar Patel College of Commerce",
      duration: "30 hours (2 hours/day)",
      fee: "INR Rs. 5000/- per head",
      teachingMode: "Offline",
      eligibleCriteria: "Anyone (12th Pass)",
      batchSize: "Minimum 20 students",
      outline: "Equip Students with Comprehensive Knowledge and Practical Skills in stock market analysis.",
      contactPerson: "Dr. Mehul Mistry",
      contactNumber: "+91 9714061272",
      registrationLink: "https://forms.gle/rTKbEX5ScGbhG53PA",
      brochureImage: "/images/brochures/stock-market.jpg"
    },
    {
      name: "CHARTERED ACCOUNTANT FOUNDATION COURSE",
      managedBy: "Sardar Patel College of Commerce",
      duration: "90 hours (4 hours/day)",
      fee: "INR Rs. 30,000/- per head",
      teachingMode: "Offline",
      eligibleCriteria: "12th Pass(Commerce)",
      batchSize: "Minimum 15 students",
      outline: "Equip Students with Comprehensive Knowledge, Technical Skills, and Professional CompetenceTo prepare students for a successful career in accounting, auditing, taxation, and financial management, whileinstilling ethical values and professional standards.",
      contactPerson: "Dr. Mehul Mistry",
      contactNumber: "+91 9714061272",
      registrationLink: "https://forms.gle/rTKbEX5ScGbhG53PA",
      brochureImage: "/images/brochures/chartered-accountant-foundation-course.jpg"
    },
    {
      name: "GST (GOODS AND SERVICE TAX)",
      managedBy: "Sardar Patel College of Commerce",
      duration: "30 hours (2 hours/day)",
      fee: "INR Rs. 4000/- per head",
      teachingMode: "Offline",
      eligibleCriteria: "Anyone (12th Pass)",
      batchSize: "Minimum 20 students",
      outline: "Equip students with comprehensive knowledge and practical skills in GST, enabling them to understand,apply, and comply with GST laws and regulations, and enhancing their employability and career prospects in the industry.",
      contactPerson: "Dr. Dhaval Sharma",
      contactNumber: "+91 9925535701",
      registrationLink: "https://forms.gle/rTKbEX5ScGbhG53PA",
      brochureImage: "/images/brochures/gst.jpg"
    },
    {
      name: "Certificate Course in Foreign Languages",
      managedBy: "Sardar Patel Education Campus",
      duration: "72 hours (2 hours/day)",
      fee: "INR Rs. 6500/- per head",
      teachingMode: "Online",
      eligibleCriteria: "Anyone",
      batchSize: "Minimum 5 Maximum 20",
      frequency: "3-days/Week",
      coursesCategory: ["French", "German", "Spanish", "Chinese", "English"],
      moreDetails: {
        link: "https://shorturl.ac/foreignlanguagecourses",
        video: "https://www.youtube.com/watch?v=3dXtADVT3wE",
        inquiryForm: "https://shorturl.ac/specforeignlanguagecourseinquiry"
      },
      contactNumber: "+91 79848 88427",
      outline: "Learn foreign languages with expert instructors in an interactive online environment.",
      brochureImage: "/images/brochures/certificate-course-in-foreign-languages.jpg"
    },
    {
      name: "Certificate Course in Music and Dance",
      managedBy: "Sardar Patel Education Campus",
      duration: "3 Months (2 hours/day)",
      fee: "INR Rs. 2500/- per head",
      frequency: "3-days/Week",
      teachingMode: "Offline",
      eligibleCriteria: "Anyone",
      batchSize: "Minimum 5 Maximum 20",
      coursesCategory: [
        "Singing: Vocal & Classical (A1 & A2)",
        "Dancing: Kathak & Bharatanatyam, & FreeStyle(Elementary)"
      ],
      moreDetails: {
        link: "https://shorturl.re/specmusicdanceacademy"
      },
      contactPerson: "Dr.Snehlata Ghatol",
      contactNumber: "+91 97633 01982",
      outline: "Comprehensive training in classical and contemporary music and dance forms.",
      brochureImage: "/images/brochures/certificate-course-in-music-and-dance.jpg"
    },
    {
      name: "Organic Farming Certificate Course",
      managedBy: "Sardar Patel Institute of Applied Science, Bakrol",
      duration: "32 hours (2 Months)",
      fee: "INR Rs. 1500/- per head",
      teachingMode: "Offline",
      courseCredit: "4 Credit",
      eligibleCriteria: "Anyone",
      outline: "Can helpful in the field of Agriculture, Own business and manufacture vermi compost",
      contactPerson: "Ms. Hetal J Modi",
      contactNumber: "+91 75675 26266",
      brochureImage: "/images/brochures/organic-farming-certificate-course.jpg"
    },
    {
      name: "Python For Biologist",
      managedBy: "Sardar Patel Institute of Applied Science",
      duration: "2.5 Months (40 hours)",
      fee: "INR Rs. 5000/- per head",
      courseCredit: "4 Credit",
      teachingMode: "Offline",
      eligibleCriteria: "Life Science Students",
      outline: "This skill is further useful in Data Science, Machine Learning, and Artificial Intelligence. This Course will teach you how to write algorithms to solve complex biological problems. To take advantage of working in the highly valued Bio-IT industry which uses Data Science, AI and Machine Learning.",
      contactPerson: "Ms. Hetal J Modi",
      contactNumber: "+91 75675 26266",
      brochureImage: "/images/brochures/python-for-biologist.jpg"
    },
    {
      name: "Cyber Security",
      managedBy: "Sardar Patel College of Administration and Management",
      duration: "3 Months (50 hours)",
      fee: "INR Rs. 6500/- per head (NON- SPEC Students Fees INR Rs. 9000/-)",
      courseCredit: "4 Credit",
      teachingMode: "Offline",
      eligibleCriteria: "12th Pass any Stream",
      outline: "This certificate course will make students aware about cyber fraud Detections and bring awarenessabout online and digital work.",
      contactPerson: "Dr. Sunil B. Trivedi",
      contactNumber: "+91 9662368874",
      brochureImage: "/images/brochures/cyber-security.jpg"
    },
    {
      name: "Digital Marketing",
      managedBy: "Sardar Patel College of Administration and Management",
      duration: "3 Months (50 hours)",
      fee: "INR Rs. 5500/- per head (NON- SPEC Students Fees INR Rs. 7500/-)",
      courseCredit: "2 Credit",
      teachingMode: "Offline",
      eligibleCriteria: "12th Pass any Stream",
      outline: "A digital marketing course empowers students with the skills to effectively promote brands online,reach target audiences, and drive business growth in the digital age.",
      contactPerson: "Dr. Sunil B. Trivedi",
      contactNumber: "+91 9662368874",
      brochureImage: "/images/brochures/digital-marketing.jpg"
    },
    {
      name: "Hindu Studies",
      managedBy: "Sardar Patel College of Administration and Management",
      duration: "2 semester (100 hours)",
      fee: "INR Rs. 2500/- per head (NON- SPEC Students Fees INR Rs. 2500/-)",
      courseCredit: "4 Credit",
      teachingMode: "Offline",
      eligibleCriteria: "12th Pass any Stream",
      outline: "The Hindu studies course embodies a rich heritage of science, philosophy, and holistic practices that offer timeless insights for sustainable living and innovation",
      contactPerson: "Dr. Sunil B. Trivedi",
      contactNumber: "+91 9662368874",
      brochureImage: "/images/brochures/hindu-studies.jpg"
    },
    {
      name: "CCC-Course on Computer Concepts",
      managedBy: "Sardar Patel College of Education",
      duration: "3 Months (80 hours)",
      fee: "INR Rs. 2000/- per head",
      courseCredit: "4 Credit",
      teachingMode: "Offline",
      eligibleCriteria: "10th Pass any Stream",
      outline: "The CCC (Course on Computer Concepts) program provides foundational knowledge of computers, digital literacy, and essential IT tools, empowering individuals to navigate the modern digital world with confidence and competence.",
      contactPerson: "Dr. Arti Patel",
      contactNumber: "+91 97270 27775",
      brochureImage: "/images/brochures/ccc-course-on-computer-concepts.jpg"
    },
    {
      name: "SKILL DEVELOPMENT",
      managedBy: "Sardar Patel College of Education",
      duration: "40 hours",
      fee: "Free",
      courseCredit: "0 Credit",
      teachingMode: "Offline",
      eligibleCriteria: "Female",
      outline: "The Skill Development course is designed to equip individuals with practical,industry-relevant abilities—ranging from technical expertise to communication and problem-solving—fosteringpersonal growth,employability, and entrepreneurial potential in a dynamic workforce.",
      contactPerson: "Dr. Arti Patel",
      contactNumber: "+91 97270 27775",
      brochureImage: "/images/brochures/skill-development.jpg"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Academic Programs</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Explore our comprehensive range of programs, courses, and certifications
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cu-container px-4">
            {/* Undergraduate Programs Table */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-800 mb-8">Undergraduate Programs</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {/* GTU Programs */}
                    <tr>
                      <td className="border p-4 align-top" rowSpan={2} style={{ width: '33%' }}>
                        Gujarat Technological University<br/>(Ahmedabad)
                      </td>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Pharmacy</div>
                        <div className="text-sm text-gray-600">4-Year Program (8 Semesters)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Bachelor of Pharmacy</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Engineering</div>
                        <div className="text-sm text-gray-600">4-Year Program (8 Semesters)</div>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Civil Engineering</li>
                          <li>Computer Engineering</li>
                          <li>Computer Science & Engineering</li>
                          <li>Electronics and Communication Engineering*</li>
                          <li>Information Technology</li>
                          <li>Mechanical Engineering</li>
                        </ul>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Bachelor of Engineering</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Diploma to Degree</div>
                        <div className="text-sm text-gray-600">3-Year Program (6 Semesters)</div>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Civil Engineering</li>
                          <li>Computer Engineering</li>
                          <li>Computer Science & Engineering</li>
                          <li>Electrical Engineering</li>
                          <li>Information Technology</li>
                          <li>Mechanical Engineering</li>
                          <li>IT Engg & CSE (Working Professional)*</li>
                        </ul>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Bachelor of Engineering</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Vocation</div>
                        <div className="text-sm text-gray-600">3-Year Program (6 Semesters)</div>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Software Development</li>
                        </ul>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Bachelor of Vocation</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Diploma Engineering*</div>
                        <div className="text-sm text-gray-600">3-Year Program (6 Semesters)</div>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Computer Engineering</li>
                          <li>Information Technology</li>
                        </ul>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Diploma (GTU)</div>
                      </td>
                    </tr>

                    {/* SPU Programs */}
                    <tr>
                      <td className="border p-4 align-top" rowSpan={7} style={{ width: '33%' }}>
                        Sardar Patel University<br/>(Vallabh Vidhyanagar)
                      </td>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Commerce</div>
                        <div className="text-sm text-gray-600">4-Year Program (8 Semesters)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">B.Com</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Business Administration (General)</div>
                        <div className="text-sm text-gray-600">4-Year Program (8 Semesters)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">BBA</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Business Administration (ISM)</div>
                        <div className="text-sm text-gray-600">4-Year Program (8 Semesters)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">BBA</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Computer Application</div>
                        <div className="text-sm text-gray-600">4-Year Program (8 Semesters)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">BCA</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Science</div>
                        <div className="text-sm text-gray-600">4-Year Program (8 Semesters)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">B.Sc</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Bachelor of Education</div>
                        <div className="text-sm text-gray-600">2-Year Program (4 Semesters)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">B.Ed</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Postgraduate Programs Table */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-800 mb-8">Post Graduate Programs</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {/* GTU Programs */}
                    <tr>
                      <td className="border p-4 align-top" rowSpan={3} style={{ width: '33%' }}>
                        Gujarat Technological University<br/>(Ahmedabad)
                      </td>
                      <td className="border p-4">
                        <div className="font-semibold">Master of Business Administration</div>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Master of Business Administration</li>
                          <li>Integrated Master in Business Administration*</li>
                          <li>Master in Business Administration (Working Professional)*</li>
                        </ul>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">MBA</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Master of Pharmacy</div>
                        <div className="text-sm text-gray-600">2-Year Program (4 Semesters)</div>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Pharmacology</li>
                          <li>Pharmaceutics</li>
                          <li>Quality Assurance</li>
                        </ul>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Master of Pharmacy</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Master of Engineering</div>
                        <ul className="list-disc ml-4 mt-2 text-sm">
                          <li>Civil (Structural) Engineering</li>
                        </ul>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Master of Engineering</div>
                      </td>
                    </tr>

                    {/* SPU Programs */}
                    <tr>
                      <td className="border p-4 align-top" rowSpan={2} style={{ width: '33%' }}>
                        Sardar Patel University<br/>(Vallabh Vidhyanagar)
                      </td>
                      <td className="border p-4">
                        <div className="font-semibold">Master of Science (Information Technology)</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Student Corner</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4">
                        <div className="font-semibold">Master of Commerce</div>
                      </td>
                      <td className="border p-4">
                        <div className="text-sm">Student Corner</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Certificate Courses */}
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-8">Certificate Courses</h2>
              {certificateCourses.map((course, index) => (
                <div key={index} className="mb-12 flex gap-8 items-start">
                  <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{course.name}</h3>
                    <div className="space-y-3 text-gray-600">
                      <p><span className="font-medium">Managed by:</span> {course.managedBy}</p>
                      <p><span className="font-medium">Duration:</span> {course.duration}</p>
                      <p><span className="font-medium">Fee:</span> {course.fee}</p>
                      <p><span className="font-medium">Teaching Mode:</span> {course.teachingMode}</p>
                      <p><span className="font-medium">Eligible Criteria:</span> {course.eligibleCriteria}</p>
                      {course.batchSize && (
                        <p><span className="font-medium">Batch Size:</span> {course.batchSize}</p>
                      )}
                      {course.outline && (
                        <div>
                          <span className="font-medium">Course Outline:</span>
                          <p className="mt-1">{course.outline}</p>
                        </div>
                      )}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {course.contactPerson && (
                          <p><span className="font-medium">Contact Person:</span> {course.contactPerson}</p>
                        )}
                        {course.contactNumber && (
                          <p><span className="font-medium">Contact:</span> {course.contactNumber}</p>
                        )}
                        {course.registrationLink && (
                          <p>
                            <span className="font-medium">Registration:</span>{" "}
                            <a href={course.registrationLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                              Register Here
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-64">
                    <Image
                      src={course.brochureImage}
                      alt={`${course.name} Brochure`}
                      width={256}
                      height={362}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 text-center text-gray-600">
              <p>* Subject to Approval From AICTE.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
import React from "react"
import { FacultyProfileClient } from "@/components/FacultyProfileClient"

// Faculty data - this would normally come from a database
const facultyData = {
  1: {
    id: 1,
    name: "Mr. Kaushalkumar Patel",
    image: "/images/faculty/engineering/it/IT_Kaushal Patel.jpg",
    qualification: "Ph.D. Pursuing M.E. (IT), BE (IT)",
    designation: "I/C HOD & Assistant Professor",
    department: "Information Technology",
    email: "kaushalpatel.it@spec.edu.in",
    vidwanId: "437037",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437037",
    workExperience: {
      teaching: "12 Years",
      research: "02 Months",
      industrial: "-"
    },
    researchArea: "Network Security",
    seminarsWorkshops: {
      national: 15,
      international: 5
    },
    paperPublications: {
      national: 3,
      international: 12
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "Attended many technical events and also organize at institute level some technical event like Conference,Seminar and Workshop.",
      "Involve in culture activity and worked as Joint Secretary in NTIJ-Zonal Youth Festival of GTU."
    ]
  },
  2: {
    id: 2,
    name: "Mr. Nikul Patel",
    image: "/images/faculty/engineering/it/faculty2.jpg",
    qualification: "ME (Computer), BE (IT)",
    designation: "Admin Head & Assistant Professor",
    department: "Information Technology",
    email: "nikulpatel.it@spec.edu.in",
    vidwanId: "437038",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437038",
    workExperience: {
      teaching: "13 Years",
      research: "-",
      industrial: "-"
    },
    researchArea: "Cloud Computing",
    seminarsWorkshops: {
      national: 9,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 2
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "Administrative coordination and academic program management.",
      "Expert in cloud computing technologies and system administration."
    ]
  },
  3: {
    id: 3,
    name: "Ms. Pooja Rathod",
    image: "/images/faculty/engineering/it/faculty3.jpg",
    qualification: "Ph.D. Pursuing M.E. (CE), B.E. (CE)",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "poojarathod.it@spec.edu.in",
    vidwanId: "453008",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/453008",
    workExperience: {
      teaching: "05 Years 05 Months",
      research: "-",
      industrial: "-"
    },
    researchArea: "Cloud Computing, Machine Learning",
    seminarsWorkshops: {
      national: 3,
      international: 2
    },
    paperPublications: {
      national: 0,
      international: 4
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "Recived Best Faculty Award - 2024 at Sardar Patel College of Engineering"
    ]
  },
  4: {
    id: 4,
    name: "Mrs. Poonam Sahibani",
    image: "/images/faculty/engineering/it/faculty4.jpg",
    qualification: "M.E. (CE), B.E. (IT)",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "poonamsahibani.it@spec.edu.in",
    vidwanId: "437750",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437750",
    workExperience: {
      teaching: "03 year 08 Months",
      research: "-",
      industrial: "-"
    },
    researchArea: "Data Mining",
    seminarsWorkshops: {
      national: 2,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 4
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "Expert in data mining techniques and applications.",
      "Active in research and academic development activities."
    ]
  },
  5: {
    id: 5,
    name: "Ms. Toral Patel",
    image: "/images/faculty/engineering/it/faculty5.jpg",
    qualification: "M.Tech(Computer), B.E.(Computer)",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "toralpatel.it@spec.edu.in",
    vidwanId: "437174",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437174",
    workExperience: {
      teaching: "02 Year",
      research: "-",
      industrial: "06 Months"
    },
    researchArea: "Image Processing, Data Designing",
    seminarsWorkshops: {
      national: 0,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 1
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  6: {
    id: 6,
    name: "Ms. Vaishali Parmar",
    image: "/images/faculty/engineering/it/faculty6.jpg",
    qualification: "M.E.(Computer), B.E.(Computer)",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "vaishaliparmar.it@spec.edu.in",
    vidwanId: "437287",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437287",
    workExperience: {
      teaching: "02 Year",
      research: "-",
      industrial: "-"
    },
    researchArea: "Cloud Computing",
    seminarsWorkshops: {
      national: 0,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 0
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  7: {
    id: 7,
    name: "Ms.Priyanka Gondaliya",
    image: "/images/faculty/engineering/it/faculty7.jpg",
    qualification: "M.tech( information communication),B.E.(I.T.)",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "priyankagondaliya@spec.edu.in",
    vidwanId: "552329",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/myprofile",
    workExperience: {
      teaching: "15.05 Year",
      research: "-",
      industrial: "-"
    },
    researchArea: "cognitive adaptive MAC layer protocol (Networking )",
    seminarsWorkshops: {
      national: 4,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 2
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  8: {
    id: 8,
    name: "Miss.Priyanka Makwana",
    image: "/images/faculty/engineering/it/faculty8.jpg",
    qualification: "Phd (Pursing)",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "priyankamakwana.it@spec.edu.in",
    vidwanId: "437044",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437044",
    workExperience: {
      teaching: "07 Years 5 Months",
      research: "-",
      industrial: "-"
    },
    researchArea: "Security with MI and IoT",
    seminarsWorkshops: {
      national: 1,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 1
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  9: {
    id: 9,
    name: "Mr. Miral Darji",
    image: "/images/faculty/engineering/it/faculty9.jpg",
    qualification: "M.Sc. M.Phil (Mathematics)",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "miraldarji.gen@spec.edu.in",
    vidwanId: "437045",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437045",
    workExperience: {
      teaching: "08 Years",
      research: "-",
      industrial: "-"
    },
    researchArea: "-",
    seminarsWorkshops: {
      national: 2,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 0
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "Awarded Gold Medal in M.Sc. named 'Dev Pushpa' from Sardar Patel University."
    ]
  },
  10: {
    id: 10,
    name: "Ms. Janhavi Gajjar",
    image: "/images/faculty/engineering/it/faculty10.jpg",
    qualification: "B.E (IT)",
    designation: "Teaching Assistant",
    department: "Information Technology",
    email: "janhavigajjar.it@spec.edu.in",
    vidwanId: "437046",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437046",
    workExperience: {
      teaching: "02",
      research: "-",
      industrial: "1.2 Years"
    },
    researchArea: "-",
    seminarsWorkshops: {
      national: 0,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 0
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  11: {
    id: 11,
    name: "Mr. Umesh Raval",
    image: "/images/faculty/engineering/it/faculty11.jpg",
    qualification: "Certified Course-ITI (Computer Hardware Networking)",
    designation: "Lab Assistant",
    department: "Information Technology",
    email: "umeshraval.it@spec.edu.in",
    vidwanId: "437047",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437047",
    workExperience: {
      teaching: "-",
      research: "-",
      industrial: "05"
    },
    researchArea: "-",
    seminarsWorkshops: {
      national: 0,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 0
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  12: {
    id: 12,
    name: "Mr. Jignesh Palkar",
    image: "/images/faculty/engineering/it/faculty12.jpg",
    qualification: "B.E.A.(ISM)",
    designation: "Lab Assistant",
    department: "Information Technology",
    email: "jigneshpalkar.it@spec.edu.in",
    vidwanId: "437048",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437048",
    workExperience: {
      teaching: "07 Years",
      research: "-",
      industrial: "01 Year"
    },
    researchArea: "-",
    seminarsWorkshops: {
      national: 1,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 0
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  13: {
    id: 13,
    name: "Mr. Milan Macwan",
    image: "/images/faculty/engineering/it/faculty13.jpg",
    qualification: "D.E (IT)",
    designation: "Lab Assistant",
    department: "Information Technology",
    email: "milanmacwan.it@spec.edu.in",
    vidwanId: "437049",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437049",
    workExperience: {
      teaching: "-",
      research: "-",
      industrial: "-"
    },
    researchArea: "-",
    seminarsWorkshops: {
      national: 0,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 0
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  },
  14: {
    id: 14,
    name: "Pavankumar Shashikant Bhatt",
    image: "/images/faculty/engineering/it/faculty14.jpg",
    qualification: "BCA",
    designation: "Lab Assistant",
    department: "Information Technology",
    email: "pavanbhatt.it@spec.edu.in",
    vidwanId: "437050",
    vidwanProfile: "https://vidwan.inflibnet.ac.in/profile/437050",
    workExperience: {
      teaching: "-",
      research: "-",
      industrial: "10 Year"
    },
    researchArea: "-",
    seminarsWorkshops: {
      national: 0,
      international: 0
    },
    paperPublications: {
      national: 0,
      international: 0
    },
    bookPublications: {
      national: "-",
      international: "-"
    },
    outreachExcellence: [
      "-"
    ]
  }
}

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  // Generate static params for all faculty IDs
  const facultyIds = Object.keys(facultyData).map(id => ({
    id: id
  }))
  
  return facultyIds
}

export default function FacultyProfilePage({ params }: { params: { id: string } }) {
  const facultyId = parseInt(params.id)
  const faculty = facultyData[facultyId as keyof typeof facultyData]

  if (!faculty) {
    return <div>Faculty not found</div>
  }

  return <FacultyProfileClient faculty={faculty} facultyData={facultyData} />
} 
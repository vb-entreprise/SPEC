"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

/**
 * @author VB Entreprise
 * @description Header component for the application that includes:
 * - Top announcement bar
 * - Secondary navigation bar with social links
 * - Main header with logo and primary navigation
 * - Mobile responsive menu
 */
export const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const closeTimeout = useRef<NodeJS.Timeout>()
  const [isClosing, setIsClosing] = useState(false)

  const handleMenuToggle = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  const handleMenuEnter = (menuName: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
    setIsClosing(false)
    setActiveMenu(menuName)
  }

  const handleMenuLeave = () => {
    setIsClosing(true)
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null)
      setIsClosing(false)
    }, 300) // Animation duration
  }

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Conference announcements
  const announcements = [
    {
      title: "1st International Conference on Building Urban Infrastructure with Leading Design Innovations (BUILD- 2025)",
      date: "March 15-17, 2025",
      venue: "SPEC Campus",
      action: "Register Now",
      link: "/build-2025"
    },
    {
      title: "Advanced Credit Program - Special Registration Open",
      date: "Deadline: January 31, 2025",
      venue: "All Institutes",
      action: "Apply Today",
      link: "/credit-program"
    },
    {
      title: "Tech Fest 2025 - Innovation Showcase",
      date: "February 20-22, 2025",
      venue: "SPEC Campus",
      action: "Participate",
      link: "/tech-fest-2025"
    }
  ]

  // Auto-rotate announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [announcements.length])

  // Menu Data Structure with proper typing
  type MenuLink = {
    name: string
    href: string
  }

  type MenuSection = {
    title: string
    links?: MenuLink[]
    companies?: string[]
    description?: string
    stats?: Array<{ number: string; label: string }>
  }

  type MegaMenu = {
    sections: MenuSection[]
    image?: {
      type: string
      title: string
      subtitle?: string
      features?: Array<{ icon: string; title: string }>
      cta?: string
      buttonText?: string
      stats?: Array<{ number: string; label: string; subtext?: string; unit?: string }>
      destinations?: string[]
    }
  }

  type MegaMenus = {
    [key: string]: MegaMenu
  }

  const megaMenus: MegaMenus = {
    "About": {
      sections: [
        {
          title: "WHO WE ARE",
          links: [
            { name: "Overview", href: "/about/overview" },
            { name: "Vision & Mission", href: "/about/vision-mission" },
            { name: "Leadership", href: "/about/leadership" },
            { name: "Core Values", href: "/about/values" },
            { name: "Recognition & Approvals", href: "/about/recognition" },
            { name: "Maniba Charitable Trust", href: "/manibatrust" },
            { name: "SPEC Dynamics", href: "/about/spec-dynamics" }
          ]
        },
        {
          title: "RELATED LINKS",
          links: [
            { name: "Institutes & Departments", href: "/institutes" },
            { name: "Admissions", href: "/admissions" },
            { name: "Scholarships", href: "/scholarships" },
            { name: "Governance", href: "/governance" },
            { name: "Hostel Facility", href: "/hostel" },
            { name: "Student Services", href: "/student-services" },
            { name: "Contact Us", href: "/contact" }
          ]
        }
      ],
      image: {
        type: "university-promotion",
        title: "SPEC Campus",
        subtitle: "Best Educational Institution in Gujarat",
        features: [
          { icon: "🤝", title: "Human Dignity" },
          { icon: "❤️", title: "Empathy" },
          { icon: "🙏", title: "Humility" },
          { icon: "🎁", title: "Giving" }
        ]
      }
    },
    "Programs": {
      sections: [
        {
          title: "REGULAR PROGRAMS",
          links: [
            { name: "MBA (Finance/ HRM/ Marketing/ IT)", href: "/institutes/management/programs/mba" },
            { name: "Working Professional – MBA", href: "/institutes/management/programs/working-mba" },
            { name: "IMBA (Integrated MBA)", href: "/institutes/management/programs/imba" },
            { name: "B.E. (Computer Engineering)", href: "/institutes/specengineering/programs/be-ce" },
            { name: "B.E. (Information & Technology)", href: "/institutes/specengineering/programs/be-it" },
            { name: "B.E. (Computer Science and Engineering)", href: "/institutes/specengineering/programs/be-cse" },
            { name: "B.E. (Mechanical Engineering)", href: "/institutes/specengineering/programs/be-me" },
            { name: "B.E. (Civil Engineering)", href: "/institutes/specengineering/programs/be-civil" },
            { name: "B.E. (Electrical Engineering)", href: "/institutes/specengineering/programs/be-ee" },
            { name: "M.E. (Structural Engineering)", href: "/institutes/specengineering/programs/me-structural" },
            { name: "B.Voc. (Software Development)", href: "/institutes/specengineering/programs/bvoc-software" },
            { name: "Working Professionals (IT/CSE)", href: "/institutes/specengineering/programs/working-professionals" },
            { name: "Diploma (Computer/IT)", href: "/institutes/specengineering/programs/diploma" },
            { name: "B.Pharm", href: "/institutes/specpharmacy/programs/bpharm" },
            { name: "M.Pharm (Pharmaceutics/Quality Assurance/Pharmacology)", href: "/institutes/specpharmacy/programs/mpharm-pharmaceutics" },
            { name: "Pharm.D.", href: "/institutes/specpharmacy/programs/pharmd" },
            { name: "B.B.A. (General & ISM)", href: "/institutes/management/programs/bba-general" },
            { name: "B.C.A. (Computer Application)", href: "/institutes/management/programs/bca" },
            { name: "B.Com.", href: "/institutes/commerce/programs/bcom" },
            { name: "M.Com.", href: "/institutes/commerce/programs/mcom" },
            { name: "B.Sc. (Microbiology/Biotechnology/Chemistry)", href: "/institutes/applied-sciences/programs/bsc" },
            { name: "M.Sc. (Information Technology)", href: "/institutes/applied-sciences/programs/msc-it" },
            { name: "B.Ed. (Bachelor of Education)", href: "/institutes/education/programs/bed" }
          ]
        },
        {
          title: "CERTIFICATE COURSES",
          links: [
            { name: "Organic Farming", href: "/programs/certificate/organic-farming" },
            { name: "Python for Biologists", href: "/programs/certificate/python-for-biologists" },
            { name: "Digital Marketing", href: "/programs/certificate/digital-marketing" },
            { name: "Cyber Security", href: "/programs/certificate/cyber-security" },
            { name: "Hindu Studies", href: "/programs/certificate/hindu-studies" },
            { name: "Basics of Tally Prime", href: "/programs/certificate/tally-prime" },
            { name: "Skill Development", href: "/programs/certificate/skill-development" },
            { name: "Stock Market Trading", href: "/programs/certificate/stock-market-trading" },
            { name: "GST (Goods and Service Tax)", href: "/programs/certificate/gst" },
            { name: "CCC-Course on Computer Concepts", href: "/programs/certificate/ccc" },
            { name: "Chartered Accountant Foundation Course", href: "/programs/certificate/ca-foundation" },
            { name: "English Elementary and Advance", href: "/programs/certificate/english-elementary-advance" },
            { name: "English Tense Specific", href: "/programs/certificate/english-tense-specific" },
            { name: "English Elementary", href: "/programs/certificate/english-elementary" },
            { name: "English Tense Specific Fastrack", href: "/programs/certificate/english-tense-fastrack" },
            { name: "English Advanced A1", href: "/programs/certificate/english-advanced-a1" },
            { name: "English Advanced A2 (with Phonetics)", href: "/programs/certificate/english-advanced-a2" },
            { name: "French Elementary", href: "/programs/certificate/french-elementary" },
            { name: "German Elementary", href: "/programs/certificate/german-elementary" },
            { name: "Spanish Elementary", href: "/programs/certificate/spanish-elementary" },
            { name: "French Elementary Fastrack", href: "/programs/certificate/french-elementary-fastrack" },
            { name: "French DLF A1", href: "/programs/certificate/french-dlf-a1" },
            { name: "French DLF A2", href: "/programs/certificate/french-dlf-a2" },
            { name: "Vocal (Singing) A1 & A2", href: "/programs/certificate/vocal-singing" },
            { name: "Classical (Singing) A1 & A2", href: "/programs/certificate/classical-singing" },
            { name: "Kathak Elementary", href: "/programs/certificate/kathak-elementary" },
            { name: "Bharatanatyam Elementary", href: "/programs/certificate/bharatanatyam-elementary" }
          ]
        }
      ],
      image: {
        type: "programs-grid",
        title: "Academic Excellence",
        features: [
          { icon: "🎓", title: "Flexible Choice Based Credit System" },
          { icon: "📚", title: "70+ Electives" },
          { icon: "🔬", title: "Advanced Technologies & Integration" },
          { icon: "📝", title: "Project based & Experiential Learning" }
        ]
      }
    },
    "Academics": {
      sections: [
        {
          title: "ACADEMICS",
          links: [
            { name: "Academics Overview", href: "/academics/overview" },
            { name: "Institutes", href: "/institutes" },
            { name: "Program (Courses)", href: "/academics/programs" },
            { name: "Academic Calendar", href: "/academics/calendar" },
            { name: "List of Holidays", href: "/academics/holidays" },
            { name: "Teaching Practices", href: "/academics/teaching" },
            { name: "System of Evaluation", href: "/academics/evaluation" }
          ]
        },
        {
          title: "SPECIAL FEATURES",
          links: [
            { name: "Flexible Choice Based Credit System", href: "/academics/credit-system" },
            { name: "70+ Electives", href: "/academics/electives" },
            { name: "Advanced Technologies & Integration", href: "/academics/technologies" },
            { name: "Project based & Experiential Learning", href: "/academics/experiential" }
          ]
        }
      ],
      image: {
        type: "academic-features",
        title: "Academic Excellence",
        features: [
          { icon: "🎓", title: "Flexible Choice Based Credit System" },
          { icon: "📚", title: "70+ Electives" },
          { icon: "🔬", title: "Advanced Technologies & Integration" },
          { icon: "📝", title: "Project based & Experiential Learning" }
        ]
      }
    },
    "Admissions": {
      sections: [
        {
          title: "JOB ORIENTED PROGRAMS",
          links: [
            { name: "After 12th", href: "/admissions/after-12th" },
            { name: "After Graduation", href: "/admissions/after-graduation" },
            { name: "Leet Programs", href: "/admissions/leet" },
            { name: "Specialized Programs", href: "/admissions/specialized" },
            { name: "Integrated Programs", href: "/admissions/integrated" },
            { name: "After Post Graduation", href: "/admissions/post-graduation" },
                                { name: "SPEC Advantages", href: "/admissions/advantages" },
            { name: "ABET Engineering Accreditation", href: "/admissions/abet" }
          ]
        },
        {
          title: "ADMISSION",
          links: [
            { name: "Overview", href: "/admissions/overview" },
            { name: "Course Fee", href: "/admissions/fees" },
            { name: "How to Apply?", href: "/admissions/apply" },
            { name: "Admission Criteria", href: "/admissions/criteria" },
            { name: "SPEC Scholarship", href: "/admissions/scholarship" },
            { name: "Education Loan", href: "/admissions/loan" },
            { name: "Hostel Fee", href: "/admissions/hostel-fee" },
            { name: "National Admissions", href: "/admissions/national" },
            { name: "International Admissions", href: "/admissions/international" },
            { name: "Admission Offices", href: "/admissions/offices" },
            { name: "Visit the Campus", href: "/admissions/visit" }
          ]
        }
      ],
      image: {
        type: "admissions-cta",
        title: "Apply Today For",
        subtitle: "SPEC CAMPUS PROGRAMS",
        cta: "Registration Ends Date (Phase - I): 9th May 2024",
        buttonText: "APPLY NOW"
      }
    },
    "Campus Life": {
      sections: [
        {
          title: "CAMPUS EVENTS & ACTIVITIES",
          links: [
            { name: "Overview", href: "/campus/overview" },
            { name: "Convocations", href: "/campus/convocations" },
            { name: "Live-in-Concerts", href: "/campus/live-concerts" },
            { name: "Tech Invent & Events", href: "/campus/tech-events" },
            { name: "Cultural & Cosmopolitan", href: "/campus/cultural" },
            { name: "Evoke & Youth Summits", href: "/campus/evoke-summits" },
            { name: "Sports & Adventure", href: "/campus/sports" }
          ]
        },
        {
          title: "HIGHLIGHTS & CONFERENCES",
          links: [
            { name: "Glorious Stars at SPEC", href: "/campus/glorious-stars" },
            { name: "Latest News", href: "/campus/news" },
            { name: "Bollywood Celebrities", href: "/campus/bollywood" },
            { name: "Prominent Visitors", href: "/campus/visitors" },
            { name: "CU-RHYTHMS International Folklore Festival", href: "/campus/rhythms-festival" },
            { name: "National & International Conferences", href: "/campus/conferences" }
          ]
        }
      ],
      image: {
        type: "campus-life",
        title: "Unlock your Career Goals",
        features: [
          { icon: "🎓", title: "Scholarships" },
          { icon: "💰", title: "Education Loan" },
          { icon: "📝", title: "SPEC Admission" }
        ]
      }
    },
    "Placements": {
      sections: [
        {
          title: "PLACEMENTS",
          links: [
            { name: "About Placements", href: "/placements/about" },
            { name: "Placement Tracker", href: "/placements/tracker" },
            { name: "Department of Career Planning & Development", href: "/placements/department" },
            { name: "Joint Placement Programme", href: "/placements/joint" },
            { name: "Best Engineering Placement", href: "/placements/engineering" },
            { name: "Best Management Placement", href: "/placements/management" },
            { name: "Best Hotel Management Placement", href: "/placements/hotel" },
            { name: "Best Pharma Sciences Placement", href: "/placements/pharma" },
            { name: "Best Physics Placement", href: "/placements/physics" },
            { name: "Best TCS Placement", href: "/placements/tcs" },
            { name: "Placement Day", href: "/placements/day" },
            { name: "Our Leading Recruiters", href: "/placements/recruiters" }
          ]
        },
        {
          title: "TOP RECRUITERS",
          description: "Most sought after Destination of blue-chip companies",
          companies: ["Google", "Amazon", "Microsoft", "Mahindra"]
        }
      ],
      image: {
        type: "placement-stats",
        title: "University with",
        subtitle: "Best Placements",
        stats: [
          { number: "9000+", label: "PLACEMENTS", subtext: "Offered in Batch 2024-25" },
          { number: "1.7", unit: "CR", label: "INTERNATIONAL", subtext: "Highest Package Offered" },
          { number: "54.75", unit: "LPA", label: "NATIONAL", subtext: "Highest Package Offered" }
        ]
      }
    },
    "Research & Innovation": {
      sections: [
        {
          title: "RESEARCH & INNOVATION",
          links: [
            { name: "BRDC Foundation", href: "/research/brdc-foundation" },
            { name: "SIC (SPEC Innovation Cell)", href: "/research/spec-innovation-cell" },
            { name: "Centre of Excellence(Engineering)", href: "/research/centre-excellence-engineering" },
            { name: "FLC - Foreign Language Cell", href: "/research/foreign-language-cell" },
            { name: "SMADA (SPEC Music and Dance Academy)", href: "/research/spec-music-dance-academy" }
          ]
        },
        {
          title: "CENTERS & INITIATIVES",
          links: [
            { name: "Shikhar Club", href: "/research/shikhar-club" },
            { name: "IRRC - International Relations and Research Cell", href: "/research/international-relations-research-cell" },
            { name: "MOU", href: "/research/mou" },
            { name: "R & D Center", href: "/research/rd-center" }
          ]
        }
      ],
      image: {
        type: "research-innovation",
        title: "Our Intellectual Pursuits",
        stats: [
          { number: "14700+", label: "Research Publications" },
          { number: "4300+", label: "Patents Filed" },
          { number: "30", label: "Industry Sponsored Advisory Labs" },
          { number: "200", label: "Departmental Research Groups" }
        ]
      }
    }
  }

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0b578a] py-1' : 'bg-transparent py-1'
    }`}>
      <div className="relative z-10">
        {/* Top Secondary Bar with Integrated Conference Slider */}
        <div className={`text-white py-1 px-4 bg-transparent transition-all duration-300 ${
          scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}>
          <div className="cu-container flex justify-between items-center">
            {/* Left Links */}
            <div className="flex gap-4 text-sm">
              <Link href="/whatsapp.php" className="flex items-center">
                <span>Whatsapp</span>
              </Link>
              <Link href="tel:8033094409" className="flex items-center">
                <span>Call Us</span>
              </Link>
              <Link href="/maps/" className="flex items-center">
                <span>360°</span>
              </Link>
            </div>

            {/* Conference Announcement Slider - Center */}
            <div className="flex-1 mx-2 md:mx-8 bg-transparent rounded-full overflow-hidden">
              <div className="relative h-8 flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-center relative overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out"
                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                      {announcements.map((announcement, index) => (
                        <div key={index} className="w-full flex-shrink-0 flex items-center justify-center gap-1 md:gap-3 text-center px-2 md:px-4">
                          <div className="flex items-center gap-1 md:gap-2">
                            <span className="text-yellow-300 text-xs md:text-sm">🎉</span>
                            <span className="font-bold text-xs md:text-xs text-white">
                              {/* Mobile: Show shortened title */}
                              <span className="block md:hidden">
                                {announcement.title.length > 40 
                                  ? `${announcement.title.substring(0, 40)}...` 
                                  : announcement.title}
                              </span>
                              {/* Desktop: Show full or longer title */}
                              <span className="hidden md:block">
                                {announcement.title.length > 80 
                                  ? `${announcement.title.substring(0, 80)}...` 
                                  : announcement.title}
                              </span>
                            </span>
                          </div>
                          {/* Hide date on mobile, show on larger screens */}
                          <div className="hidden lg:flex items-center gap-2 text-xs">
                            <span className="bg-white/20 px-2 py-1 rounded text-xs text-white">
                              📅 {announcement.date}
                            </span>
                          </div>
                          <Link 
                            href={announcement.link}
                            className="bg-yellow-400 text-black px-1.5 md:px-2 py-1 rounded-full text-xs font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap"
                          >
                            {/* Shorter action text on mobile */}
                            <span className="block md:hidden">
                              {announcement.action === "Register Now" ? "Register" : 
                               announcement.action === "Apply Today" ? "Apply" :
                               announcement.action === "Participate" ? "Join" : announcement.action}
                            </span>
                            <span className="hidden md:block">
                              {announcement.action}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Manual Navigation Dots - Responsive */}
                <div className="absolute right-1 md:right-2 flex gap-0.5 md:gap-1">
                  {announcements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-yellow-400' : 'bg-white/50'
                      }`}
                      aria-label={`Go to announcement ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Link href="https://www.facebook.com/specvbentreprise" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </Link>
                              <Link href="https://www.twitter.com/specvbenterprise" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </Link>
                              <Link href="https://www.linkedin.com/company/specvbenterprise" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </Link>
                              <Link href="https://www.instagram.com/specvbenterprise" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
                              <Link href="https://www.youtube.com/channel/UCSpecVBEnterprise" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </Link>
                              <Link href="https://www.threads.net/@specvbenterprise" aria-label="Threads">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.59 11.99c-.2.06-.42.1-.65.1a1.56 1.56 0 0 1-.61-.06 1.48 1.48 0 0 1-1.05-1.19 2.59 2.59 0 0 1-.02-.45V6.67c0-.13 0-.25.01-.38a3.76 3.76 0 0 1 .78-2.07A4.78 4.78 0 0 1 20.9 2.89c.52-.12 1.05-.18 1.58-.18h.48v2.79h-.24c-.65 0-1.29.07-1.86.36a2.07 2.07 0 0 0-1.1 1.3v.05a5.13 5.13 0 0 0-.06.7v.94c0 .15.04.29.12.42.08.12.2.21.34.27.27.11.57.09.85.09h.55a10.45 10.45 0 0 0 1.74-.14l.8 2.08c-.75.23-1.54.37-2.33.42h-.51c-.4-.02-.79-.06-1.17-.11Zm-7.43.11a7.15 7.15 0 0 1-1.97-.27 5.17 5.17 0 0 1-1.61-.76 3.11 3.11 0 0 1-1.28-2.07c-.06-.6-.05-1.2-.05-1.79 0-.97.14-1.52.34-2.07a3.77 3.77 0 0 1 3.41-2.42c.39-.04.78-.04 1.16 0a5.8 5.8 0 0 1 2.6.74c.65.41 1.1.85 1.42 1.52a4.12 4.12 0 0 1 .54 2V9.1c0 .6-.05 1.05-.14 1.53a3.62 3.62 0 0 1-1.08 1.86c-.51.45-1.05.7-1.7.9a6.87 6.87 0 0 1-1.64.23c0-.37 0 .37 0 0Zm.55-2.4c.65 0 1.3-.35 1.63-.65.32-.3.32-.65.32-1.3s0-1.25-.33-1.55a2.34 2.34 0 0 0-1.62-.65c-.65 0-1.3.35-1.62.65-.33.3-.33.65-.33 1.55 0 .65 0 1 .33 1.3.32.3.97.65 1.62.65Zm-5.93 4.95a5.67 5.67 0 0 1-1.08-.3 3.48 3.48 0 0 1-1.1-.62A3.55 3.55 0 0 1 3 10.83c-.04-1.87.02-3.8.2-5.68l2.77.3c-.12 1.59-.18 3.2-.16 4.8 0 .32.06.75.38.95a1.7 1.7 0 0 0 .95.24c.31 0 .56 0 .86-.03.32-.04.63-.1.95-.17l.8 2.58c-.8.25-1.64.38-2.47.42ZM20.98 21.5a9.1 9.1 0 0 1-2.17-1.3c-1.7-1.3-2.97-3.01-3.69-5.01a18.43 18.43 0 0 1-.47-1.62h3.03c.08.3.18.6.29.89a7.46 7.46 0 0 0 1.76 2.89c.63.63 1.38 1.14 2.2 1.53a7.64 7.64 0 0 0 1.47.55A12.52 12.52 0 0 1 20.98 21.5ZM2.79 19.43a10.82 10.82 0 0 1 5.65-2.08c.72-.06 1.45-.06 2.17.01.61.06 1.22.18 1.81.37l-.8 2.5c-.47-.16-.95-.28-1.44-.34a9.09 9.09 0 0 0-1.74 0c-.59.05-1.16.2-1.7.43-.26.11-.5.24-.74.39a12.07 12.07 0 0 1-3.21-1.29Z"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`relative transition-all duration-300 ${
          scrolled ? 'py-1' : 'py-2 md:py-1'
        } border-b border-white/10`}>
          <div className="cu-container flex items-center justify-between relative z-10 px-4 md:px-6">
            <Link href="/" className="z-10 flex-shrink-0">
              <Image
                src="/Logo.png"
                alt="SPEC Institutes Logo"
                width={400}
                height={130}
                className={`w-auto transition-all duration-300 ${
                  scrolled 
                    ? 'h-[50px] sm:h-[60px] md:h-[70px]' 
                    : 'h-[60px] sm:h-[70px] md:h-[80px]'
                }`}
                priority
              />
            </Link>

            {/* Primary Navigation - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 justify-start ml-8 lg:ml-20">
              <div className="hidden lg:flex gap-4 xl:gap-8 text-white">
                <Link href="/student-services/libraries.php" className="nav-link py-1 text-sm xl:text-base hover:text-[#fbb03b] transition-colors">
                  Library
                </Link>
                <Link href="/student-services/" className="nav-link py-1 text-sm xl:text-base hover:text-[#fbb03b] transition-colors">
                  Student Services
                </Link>
                <Link href="/jobs/" className="nav-link py-1 text-sm xl:text-base hover:text-[#fbb03b] transition-colors">
                  Career
                </Link>
                <Link href="/spec-talk/" className="nav-link py-1 text-sm xl:text-base hover:text-[#fbb03b] transition-colors">
                  SPEC Talk
                </Link>
                <Link href="/contact" className="nav-link py-1 text-sm xl:text-base hover:text-[#fbb03b] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4">
                <Link href="tel:+1800121288800" className="hidden lg:flex items-center gap-2 text-white">
                  <Image
                    src="https://www.cuchd.in/includes/assets/images/header-footer/phone-icon.webp"
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs">Admission Helpline</span>
                    <span className="text-sm font-semibold">1800121288800</span>
                  </div>
                </Link>

                <button aria-label="Search" className="hidden md:block text-white hover:text-[#fbb03b] transition-colors">
                  <span className="text-sm">Search</span>
                </button>
              </div>
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white overflow-y-auto">
                  <div className="flex flex-col gap-4 mt-6">
                    {/* Primary Navigation Items */}
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-bold text-[#0b578a] mb-3">Quick Links</h3>
                      <Link href="/student-services/libraries.php" className="flex items-center px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                        Library
                      </Link>
                      <Link href="/student-services/" className="flex items-center px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                        Student Services
                      </Link>
                      <Link href="/jobs/" className="flex items-center px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                        Career
                      </Link>
                      <Link href="/spec-talk/" className="flex items-center px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                        SPEC Talk
                      </Link>
                      <Link href="/contact" className="flex items-center px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                        Contact Us
                      </Link>
                    </div>

                    {/* Secondary Navigation Items */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#0b578a] mb-3">Explore</h3>
                      
                      {/* About */}
                      <div className="border-b border-gray-100 pb-3">
                        <Link href="/about/overview" className="flex items-center justify-between px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                          About
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                        <div className="ml-4 space-y-1">
                          <Link href="/about/overview" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Overview</Link>
                          <Link href="/about/vision-mission" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Vision & Mission</Link>
                          <Link href="/about/leadership" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Leadership</Link>
                        </div>
                      </div>

                      {/* Programs */}
                      <div className="border-b border-gray-100 pb-3">
                        <Link href="/programs/engineering" className="flex items-center justify-between px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                          Programs
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                        <div className="ml-4 space-y-1">
                          <Link href="/programs/engineering" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Engineering</Link>
                          <Link href="/programs/management" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Management</Link>
                          <Link href="/programs/computing" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Computing</Link>
                          <Link href="/programs/architecture" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Architecture</Link>
                        </div>
                      </div>

                      {/* Academics */}
                      <div className="border-b border-gray-100 pb-3">
                        <Link href="/academics/overview" className="flex items-center justify-between px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                          Academics
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                        <div className="ml-4 space-y-1">
                          <Link href="/academics/overview" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Overview</Link>
                          <Link href="/institutes" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Institutes</Link>
                          <Link href="/academics/programs" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Courses</Link>
                        </div>
                      </div>

                      {/* Admissions */}
                      <div className="border-b border-gray-100 pb-3">
                        <Link href="/admissions/overview" className="flex items-center justify-between px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                          Admissions
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                        <div className="ml-4 space-y-1">
                          <Link href="/admissions/apply" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">How to Apply</Link>
                          <Link href="/admissions/fees" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Course Fees</Link>
                          <Link href="/admissions/scholarship" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Scholarships</Link>
                        </div>
                      </div>

                      {/* Campus Life */}
                      <div className="border-b border-gray-100 pb-3">
                        <Link href="/campus/overview" className="flex items-center justify-between px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                          Campus Life
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                        <div className="ml-4 space-y-1">
                          <Link href="/campus/cultural" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Cultural Events</Link>
                          <Link href="/campus/sports" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Sports</Link>
                          <Link href="/campus/tech-events" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Tech Events</Link>
                        </div>
                      </div>

                      {/* Placements */}
                      <div className="border-b border-gray-100 pb-3">
                        <Link href="/placements/about" className="flex items-center justify-between px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                          Placements
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                        <div className="ml-4 space-y-1">
                          <Link href="/placements/tracker" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Placement Tracker</Link>
                          <Link href="/placements/recruiters" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Top Recruiters</Link>
                          <Link href="/placements/engineering" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Engineering Placements</Link>
                        </div>
                      </div>

                      {/* Research & Innovation */}
                      <div className="border-b border-gray-100 pb-3">
                        <Link href="/research/brdc-foundation" className="flex items-center justify-between px-4 py-2 text-base font-semibold hover:bg-gray-100 rounded-md">
                          Research & Innovation
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                        <div className="ml-4 space-y-1">
                          <Link href="/research/spec-innovation-cell" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">Innovation Cell</Link>
                          <Link href="/research/rd-center" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">R&D Center</Link>
                          <Link href="/research/mou" className="block px-4 py-1 text-sm text-gray-600 hover:text-[#0b578a]">MOU</Link>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <Link href="tel:+1800121288800" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold bg-[#0b578a] text-white rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <div>
                          <div className="text-xs">Admission Helpline</div>
                          <div className="text-sm">1800121288800</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          {/* Secondary Navigation with Mega Menu */}
          <div className="hidden md:flex mt-1 justify-center">
            <div className="max-w-[1500px] w-full px-4 md:px-6">
              <div className={`hidden lg:flex justify-center items-center py-1 px-6 xl:px-12 rounded-lg ${
                scrolled ? 'bg-white/20 backdrop-blur-lg' : 'bg-black/20 backdrop-blur-sm'
              }`}>
                {[
                  "About",
                  "Programs",
                  "Academics",
                  "Admissions",
                  "Campus Life",
                  "Placements",
                  "Research & Innovation"
                ].map((item) => (
                  <div 
                    className="relative group" 
                    key={item}
                    onMouseEnter={() => handleMenuEnter(item)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button className="px-4 xl:px-8 py-1 flex items-center gap-1 text-white uppercase font-bold text-xs xl:text-sm tracking-wide hover:text-[#fbb03b] transition-colors whitespace-nowrap">
                      {item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>

                    {/* Individual Mega Menu Dropdown */}
                    {activeMenu === item && megaMenus[item] && (
                      <div 
                        className={`absolute top-full ${item === "Programs" ? 'left-0' : item === "Research & Innovation" ? 'right-0' : item === "About" ? 'left-0' : 'left-1/2 -translate-x-1/2'} 
                        bg-white shadow-2xl border-t-4 border-[#0b578a] z-[60] ${item === "Programs" ? 'w-[900px]' : 'w-[600px] xl:w-[700px]'} 
                        rounded-lg overflow-hidden mt-1 ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}`}
                        onAnimationEnd={() => {
                          if (isClosing) {
                            setActiveMenu(null)
                            setIsClosing(false)
                          }
                        }}
                      >
                        <div className="p-4">
                          {item === "Programs" ? (
                            <div className="w-full">
                              <div className="grid grid-cols-2 gap-8">
                                {/* Regular Programs Multi-Column */}
                                <div>
                                  <h3 className="text-sm font-bold text-[#0b578a] uppercase border-b border-gray-200 pb-2 mb-3">
                                    REGULAR PROGRAMS
                                  </h3>
                                  <div className="grid grid-cols-2 gap-4">
                                    {Array.from({ length: Math.ceil((megaMenus[item]?.sections?.[0]?.links?.length || 0) / 4) }).map((_, colIdx) => (
                                      <ul key={colIdx} className="space-y-1 text-sm min-w-[180px] max-w-[220px]">
                                        {(megaMenus[item]?.sections?.[0]?.links || []).slice(colIdx * 4, (colIdx + 1) * 4).map((link, idx) => (
                                          <li key={idx} className="break-words whitespace-normal">
                                            <Link 
                                              href={link.href} 
                                              className="text-gray-700 hover:text-[#0b578a] hover:underline transition-colors duration-200 block py-0.5"
                                            >
                                              {link.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    ))}
                                  </div>
                                </div>
                                {/* Certificate Courses Multi-Column */}
                                <div>
                                  <h3 className="text-sm font-bold text-[#0b578a] uppercase border-b border-gray-200 pb-2 mb-3">
                                    CERTIFICATE COURSES
                                  </h3>
                                  <div className="grid grid-cols-2 gap-4">
                                    {Array.from({ length: Math.ceil((megaMenus[item]?.sections?.[1]?.links?.length || 0) / 4) }).map((_, colIdx) => (
                                      <ul key={colIdx} className="space-y-1 text-sm min-w-[180px] max-w-[220px]">
                                        {(megaMenus[item]?.sections?.[1]?.links || []).slice(colIdx * 4, (colIdx + 1) * 4).map((link, idx) => (
                                          <li key={idx} className="break-words whitespace-normal">
                                            <Link 
                                              href={link.href}
                                              className="text-gray-700 hover:text-[#0b578a] hover:underline transition-colors duration-200 block py-0.5"
                                            >
                                              {link.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-3 gap-8">
                              {/* Menu Sections - Left 2 columns */}
                              <div className="col-span-2 grid grid-cols-2 gap-6">
                                {megaMenus[item].sections.map((section, index) => (
                                  <div key={index} className="space-y-4">
                                    <h3 className="text-sm font-bold text-[#0b578a] uppercase border-b border-gray-200 pb-2">
                                      {section.title}
                                    </h3>
                                    
                                    {section.links && (
                                      <ul className="space-y-1">
                                        {section.links.map((link, linkIndex) => (
                                          <li key={linkIndex}>
                                            <Link 
                                              href={link.href} 
                                              className="text-gray-700 hover:text-[#0b578a] hover:underline transition-colors duration-200 text-sm block py-1"
                                            >
                                              {link.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}

                                    {section.companies && (
                                      <div className="space-y-3">
                                        <p className="text-sm text-gray-600">{section.description}</p>
                                        <div className="grid grid-cols-2 gap-3">
                                          {section.companies.map((company, compIndex) => (
                                            <div key={compIndex} className="bg-[#0b578a] text-white p-2 rounded text-center text-xs font-semibold">
                                              {company}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {section.stats && (
                                      <div className="grid grid-cols-2 gap-3">
                                        {section.stats.map((stat, statIndex) => (
                                          <div key={statIndex} className="bg-red-600 text-white p-3 rounded text-center">
                                            <div className="text-lg font-bold">{stat.number}</div>
                                            <div className="text-xs">{stat.label}</div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>

                              {/* Promotional Image Section - Right column */}
                              {megaMenus[item].image && (
                                <div className="col-span-1">
                                  {megaMenus[item].image?.type === "university-promotion" && (
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg">
                                      <h3 className="text-lg font-bold mb-2">{megaMenus[item].image?.title}</h3>
                                      <p className="text-sm mb-4">{megaMenus[item].image?.subtitle}</p>
                                      <div className="grid grid-cols-2 gap-3">
                                        {megaMenus[item].image?.features?.map((feature, idx) => (
                                          <div key={idx} className="text-center p-2 bg-white/20 rounded">
                                            <div className="text-2xl mb-1">{feature.icon}</div>
                                            <div className="text-xs font-semibold">{feature.title}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {megaMenus[item].image?.type === "placement-stats" && (
                                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg">
                                      <h3 className="text-lg font-bold mb-1">{megaMenus[item].image?.title}</h3>
                                      <p className="text-cyan-300 text-lg font-bold mb-4">{megaMenus[item].image?.subtitle}</p>
                                      <div className="space-y-3">
                                        {megaMenus[item].image?.stats?.map((stat, idx) => (
                                          <div key={idx} className="bg-red-600 text-white p-4 rounded text-center">
                                            <div className="text-2xl font-bold">
                                              {stat.number}{stat.unit && <span className="text-lg"> {stat.unit}</span>}
                                            </div>
                                            <div className="text-xs font-bold">{stat.label}</div>
                                            <div className="text-xs">{stat.subtext}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {megaMenus[item].image?.type === "admissions-cta" && (
                                    <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-6 rounded-lg">
                                      <h3 className="text-lg font-bold mb-2">{megaMenus[item].image?.title}</h3>
                                      <p className="text-yellow-300 text-sm font-bold mb-4">{megaMenus[item].image?.subtitle}</p>
                                      <p className="text-xs mb-4">{megaMenus[item].image?.cta}</p>
                                      <button className="bg-yellow-400 text-red-800 px-4 py-2 rounded font-bold text-sm w-full">
                                        {megaMenus[item].image?.buttonText}
                                      </button>
                                    </div>
                                  )}

                                  {megaMenus[item].image?.type === "research-innovation" && (
                                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg">
                                      <h3 className="text-lg font-bold mb-4">{megaMenus[item].image?.title}</h3>
                                      <div className="grid grid-cols-2 gap-2">
                                        {megaMenus[item].image?.stats?.map((stat, idx) => (
                                          <div key={idx} className="bg-red-600 text-white p-3 rounded text-center">
                                            <div className="text-lg font-bold">{stat.number}</div>
                                            <div className="text-xs">{stat.label}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {(megaMenus[item].image?.type === "programs-grid" || megaMenus[item].image?.type === "academic-features") && (
                                    <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-lg">
                                      <h3 className="text-lg font-bold mb-4">{megaMenus[item].image?.title}</h3>
                                      <div className="grid grid-cols-2 gap-3">
                                        {megaMenus[item].image?.features?.map((feature, idx) => (
                                          <div key={idx} className="bg-white/20 p-3 rounded text-center">
                                            <div className="text-2xl mb-2">{feature.icon}</div>
                                            <div className="text-xs font-semibold">{feature.title}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {megaMenus[item].image?.type === "campus-life" && (
                                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-6 rounded-lg">
                                      <h3 className="text-lg font-bold mb-4">{megaMenus[item].image?.title}</h3>
                                      <div className="space-y-3">
                                        {megaMenus[item].image?.features?.map((feature, idx) => (
                                          <div key={idx} className="flex items-center space-x-3 bg-white/20 p-3 rounded">
                                            <div className="text-2xl">{feature.icon}</div>
                                            <div className="text-sm font-semibold">{feature.title}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
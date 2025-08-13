"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-12 pb-6">
      <div className="cu-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Apply Here */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-lg mb-4">Apply Here</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Admissions</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Education Loan</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">How to Apply?</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Scholarship</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Admission Office</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Student Feedback</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Student Facilitation</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC International Student Facilitation</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Alumni Membership</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">eSanad</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Guinness World Records</Link></li>
            </ul>
          </div>

          {/* Learn Here */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-lg mb-4">Learn Here</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">IQAC</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Organogram</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Other Committees</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Pay Fee Online</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Institutes</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Teaching Practices</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">System of Evaluation</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Placements</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Edge</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">QS Asia Rankings 2024</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">NIRF Rankings 2024</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">SPEC Main Campus</Link></li>
            </ul>
          </div>

          {/* Visit Here */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Pharmacy</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">MBA</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Engineering | B.E & M.E</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">B.Voc | Soft. Development</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">BBA(GEN) | BBA(ISM) | BCA</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">B.Com. | M.Com.</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">B.Ed.</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">B.Sc. | M.Sc.(IT)</Link></li>
            </ul>
          </div>

          {/* Live Here */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-lg mb-4">Contact Numbers</h4>
            <ul className="space-y-2 text-sm">
              <li>+91-757 483 1731</li>
              <li>+91-757 483 1735</li>
              <li>+91-757 485 7901</li>
              <li>+91-799 012 5153</li>
              <li>+91-757 485 7901</li>
              <li>+91-757 483 1736</li>
              <li>+91-799 019 2695</li>
              <li>+91-757 483 1733</li>
              <li>+91-635 203 4272</li>
              <li>+91-757 483 1732</li>
              <li>+91-757 483 1734</li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-lg mb-4">Others</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Courses Fee Details</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Grievance Redressal Cell</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Ombudsperson</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Procedures And Policies</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">PCCB Report</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Mandatory Disclosure</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Disclaimer</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">UGC - Public Self Disclosure document</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">UGC e-Samadhan</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">e-SCR Report</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-cyan-400 font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="font-medium">SPEC Campus</p>
              <p>Sardar Patel Education Campus,</p>
              <p>Vidyanagar - Vadtal Road, Bakrol,</p>
              <p>Anand, Gujarat - 388 315.</p>
              <p className="text-cyan-400 mt-3">Mobile:</p>
              <p>798 488 8427</p>
              <p className="text-cyan-400 mt-3">Email:</p>
              <p>spec_campus@spec.edu.in</p>
              <p>specmanagement@spec.edu.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Logos and Social Media */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Accreditation Logos */}
            <div className="flex items-center space-x-8 mb-6 lg:mb-0">
              <div className="text-white font-semibold">NAAC</div>
              <div className="text-white font-semibold">NIRF</div>
              <div className="text-white font-semibold">NATS</div>
              <div className="text-white font-semibold">Anti-Ragging</div>
              <div className="text-white font-semibold">National Ragging Prevention Programme</div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-2.128 0-3.768-2.245-3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.166-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 mt-6">
            <p>
              © All rights reserved {new Date().getFullYear()} | Developed by{" "}
              <Link 
                href="https://vbentreprise.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                VB Entreprise
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

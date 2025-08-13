"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "./ApplicationForm"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[160px] lg:pt-[180px] pb-8 lg:pb-16">
      {/* Background Image */}
      <Image
        src="/Background.jpg"
        alt="SPEC Institutes Background"
        fill
        priority
        className="object-cover fixed top-0 left-0 -z-10"
      />

      {/* Overlay */}
     /* <div className="fixed inset-0 bg-black/60 -z-10"></div>

      <div className="container mx-auto relative h-full flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-8 lg:gap-16 z-10 px-4 lg:px-8 py-4 lg:py-8">
        {/* Left Content - Visible on larger screens */}
        <div className="text-white max-w-2xl text-center lg:text-left flex-1 lg:pr-8 lg:self-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Best Private Campus<br />
            in Gujarat (India)
          </h1>
          <p className="text-lg lg:text-xl mb-8 leading-relaxed">
          SPEC  Groups  in Gujarat offers B.Tech, BCA, BBA, B.Com, MBA, MCA, M.E. (Structural Engineering), and Pharmacy programs.
          </p>
          
          <Link href="https://spec.edu.in/">
            <Button className="bg-[#c40c12] hover:bg-[#a30a0f] text-white px-8 py-3 text-lg font-semibold mb-8">
              APPLY TODAY
            </Button>
          </Link>
        </div>

        {/* Application Form */}
        <ApplicationForm />
      </div>
    </section>
  )
}

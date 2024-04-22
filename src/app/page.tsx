"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/utils/animations"
import { useEffect } from "react"
import Navigation from "./components/Navigation/Navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section id="section-1" className="page">
        <Image
            src="/profile.jpg"
            width={600}
            height={600}
            alt="Picture of Albin Kempe"
            className="profile-img"
          />
        <div className="profile-div">
          <h1 className="profile-name">Albin Kempe</h1>
          <h2 className="profile-role">UX/UI Designer</h2>
        </div>
      </section>
    </div>
  )
}

export default HomePage
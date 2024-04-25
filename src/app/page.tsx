"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/utils/animations"
import { useEffect } from "react"
import Navigation from "./components/Navigation/Navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div className="home">
      <div className="intro">
        <Image className="profileImg" src={"/profile.jpg"} width={600} height={600} alt="Picture of Albin Kempe"/>
        <div className="introSide">
          <p className="hello">Hello!</p>
          <p className="introText">I'm Albin,</p>
          <p className="introText">a UX/UI designer</p>
          <p className="introText">based in Stockholm, Sweden.</p>
        </div>
      </div>
      <div className="divider"></div>
      <section id="work">
        <h2>Work</h2>
        <p>Coming soon</p>
        <div className="largediv"></div>
      </section>
    </div>
  )
}

export default HomePage
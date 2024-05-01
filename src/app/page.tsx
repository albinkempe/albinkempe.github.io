"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/utils/animations"
import { useEffect } from "react"
import Navigation from "./components/Navigation/Navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Noto_Serif } from "next/font/google";
import CaseCard from "./components/CaseCard/CaseCard"

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
        <a href="/#work"><h2>WORK</h2></a>
        <CaseCard 
          title="Energuesser"
          description="Excessive electricity consumption is a threat towards a sustainable future. 
                      There are a lot of things to do, but we can all start with ourselves. 
                      The purpose of Energuesser is to raise awareness about how much electricity our 
                      electronics and appliances consume."
          imgPath="/energuesser_main.png"
          link="https://www.figma.com/file/5ll8sP2M1RUJN9fx2gh9BM/Energuesser---Personal-Project-Prototype?type=design&node-id=0%3A1&mode=design&t=PbTbhSBA7yfYYaqs-1"
        />
        <CaseCard 
          title="Twig"
          description="Twig is a digital version of Blast Theory's Branch game. 
                      In this unique game, players are to find answers to other players'
                      questions by having conversations with them in real life.
                      The key to this project was to understand and stay true to 
                      the original work while also exploring how a digital version could take shape."
          imgPath="/twig_main.png"
          link="https://www.figma.com/file/dGe9wudSea4sx3FQ3Lbo6I/Branch%2FTwig?type=design&node-id=0%3A1&mode=design&t=tmN33UCfQ8EoVWLA-1"
        />
        <CaseCard 
          title="Mushroom Defense"
          description="This research-focused project explored how multimodal feedback influences user experience in a VR game.
          "
          imgPath="/md_main.png"
          link="https://youtu.be/-rRA9Byxm8k"
        />
        <CaseCard 
          title="Saturn47"
          description="Saturn47 is a retro-style game created in Java using Processing.
          "
          imgPath="/s_main.png"
          link="https://youtu.be/cBHnacziJac"
        />
      </section>
    </div>
  )
}

export default HomePage
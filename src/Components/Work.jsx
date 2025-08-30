import React, { useRef } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText"
import { useGSAP } from '@gsap/react'

const Work = () => {

  const titleRef = useRef(null)

  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description: "We help you execute your plan and deliver result.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description: "We help you create marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];


   gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {
    if (!titleRef.current) return

    const headingSplit = new SplitText(titleRef.current, { type: "lines" })

    gsap.from(headingSplit.lines, {
      scrollTrigger: {trigger: titleRef.current,start: "top 40%",toggleActions: "play none none none"
      },
      yPercent: -100,scale: 1.2,opacity: 0,duration: 1.2,ease: "expo.out",stagger: 0.05
    });

    gsap.from(".cards-wrapper", {
      opacity:0, duration:1.5, delay:1.25, ease:'power3.out',scrollTrigger: {trigger:'.cards-wrapper',start: "top 85%", toggleActions: "play none none none"}
    })

  }, []);

  return (
    <div id="our-work" className="work-section">
      <div  ref={titleRef} className="text-center col-center ">
        <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      </div>

      <div className="cards-wrapper grid sm:grid-col-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="cards hover:scale-105 duration-400 transition-all cursor-pointer"
          >
            <img src={work.image} alt="img" className="w-full rounded-xl " />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

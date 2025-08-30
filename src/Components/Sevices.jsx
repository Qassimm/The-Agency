import React, { useRef } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText"
import { useGSAP } from '@gsap/react'

const Sevices = () => {
  const titleRef = useRef(null)

  const servicesData = [
    {
      title:'Advertising',
      description:'We turn bold ideas into powerful digital solutions that connect, engage. . . ',
      icon:assets.ads_icon
    },
    {
      title:'Content marketing',
      description:'We help you execute your plan and deliver result.',
      icon:assets.marketing_icon
    },
    {
      title:'Content-Writing ',
      description:'We help you create marketing strategy that drives results.',
      icon:assets.content_icon
    },
    {
      title:'Social media ',
      description:'We help you build a strong social media presene and engage with your audience.',
      icon:assets.social_icon
    },    
  ]

  gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {
    if (!titleRef.current) return

    const headingSplit = new SplitText(titleRef.current, { type: "lines" })

    gsap.from(headingSplit.lines, {
      scrollTrigger: {trigger: titleRef.current,start: "top 80%",toggleActions: "play none none none"
      },
      yPercent: -100,scale: 1.2,opacity: 0,duration: 1.2,ease: "expo.out",stagger: 0.05
    });

    const leftCards = gsap.utils.toArray(".service-card.left")
    const rightCards = gsap.utils.toArray(".service-card.right")

    gsap.from(leftCards, {
      x: -150,opacity: 0,duration: 1,delay:0.5,ease: "power3.out",scrollTrigger: {trigger: leftCards[0],start: "top 85%",toggleActions: "play none none none"}
    });

    gsap.from(rightCards, {
      x: 150,opacity: 0,duration: 1,delay:0.5,ease: "power3.out",scrollTrigger: {trigger: rightCards[0],start: "top 85%", toggleActions: "play none none none"}
    });

  }, [])

  return (
    <div id='services' className='service-box'>
      <img src={assets.bgImage2} alt="img2" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

      <div ref={titleRef} className='text-center col-center'>
        <Title 
          title='How can we help ?' 
          desc='From strategy to execution we craft, digital solutions that move your business  forward.'
        />
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2'>
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={`service-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <ServiceCard service={service} index={index}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sevices


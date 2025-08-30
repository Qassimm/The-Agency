import React, { useRef } from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText"
import { useGSAP } from '@gsap/react'

const Team = () => {

  const titleRef = useRef(null)

   gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {
    if (!titleRef.current) return

    const headingSplit = new SplitText(titleRef.current, { type: "lines" })

    gsap.from(headingSplit.lines, {
      scrollTrigger: {trigger: titleRef.current,start: "top 40%",toggleActions: "play none none none"
      },
      yPercent: -100,scale: 1.2,opacity: 0,duration: 1.2,ease: "expo.out",stagger: 0.05
    });

    gsap.from(".team-card-wrapper", {
      opacity:0, duration:1.5, delay:1.25, ease:'power3.out',scrollTrigger: {trigger:'.team-card-wrapper',start: "top 85%", toggleActions: "play none none none"}
    })

  }, []);

  return (
    <div  className='team-section'>
       <div ref={titleRef} className='text-center col-center'>
        <Title 
          title='Meet our Team' 
          desc='A passionated team of digital experts dedicated to yoour brand success.'
        />
      </div>

      <div className='team-card-wrapper grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
          {teamData.map((team, index) =>(
            <div key={index} className='team-card'>
              <img src={team.image} alt="team-img" className='w-12 h-12 rounded-full' />

              <div className='flex-1'>
                <h3 className='font-bold text-sm'>{team.name}</h3>
                <p className='text-xs opacity-60'>{team.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Team

import React from 'react'
import assets, { company_logos } from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const TrustedBy = () => {

  gsap.registerPlugin(ScrollTrigger)

 useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trusted-by",start: "top 75%",end: "bottom 60%",toggleActions: "play none none reverse", 
    },ease: "power1.inOut",
  });

  tl.from(".trust-line", {
    yPercent: -50,opacity: 0,duration: 0.5,
  });
}, []);

  return (
    <div className='trusted-by col-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
      <h3 className='trust-line font-semibold'>Trusted by Leading Companies </h3>
      <div className="logo-strip overflow-hidden w-full">
  <div className="logo-track">
    {company_logos.concat(company_logos).map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt="logos"
        className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
      />
    ))}
  </div>
</div>
    </div>
  )
}

export default TrustedBy

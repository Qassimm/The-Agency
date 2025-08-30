import React from 'react'
import assets from '../assets/assets'
import TrustedBy from './trustedBy'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText";

const Hero = () => {

  useGSAP(() => {

    const heroSplite = new SplitText(".heading", {type:"lines"});
    const heroDescription = new SplitText(".hero-description", {type:"lines"});


    gsap.from(".group-container", {
            opacity:0,yPercent:-50,duration:0.8,delay:1.25
          });

    gsap.from(heroSplite.lines, {
            yPercent:-100,scale:1.2,opacity:0,duration: 1.8,delay:2,ease:'expo.out',stagger:0.05
          });

    gsap.from(heroDescription.lines, {
            yPercent:-100,scale:1.2,opacity:0,duration: 1.8,delay:2,ease:'expo.out',stagger:0.05 
          });
          
    gsap.from(".hero-img", {
      yPercent:-5,opacity:0,duration:1,delay:2.75,ease:"sine.inOut"
    });
    
    gsap.from(".blur", {
      opacity:0,duration:1,delay:2.75,ease:"sine.inOut"
    });
    }, []);

  return (
    <section id='hero' className='hero-section'>
      
      <div className='group-container'>
        <img src={assets.group_profile} alt="group" className='w-20'/>
        <p className='text-xs font-medium'>Trusted by 10k+ people</p>
      </div>

      <h1 className='heading'>Turning imagination into <span className='colored-heading'>digital</span> imapct.</h1>
    
    <p className='hero-description'>Creating meaningdul connections and  turning big ideas into interactive  digital experience.</p>

    <div className='relative'>
        <img src={assets.hero_img} alt="hero-img" className='hero-img w-full max-w-6xl' />
        <img src={assets.bgImage1} alt="blur" className='blur absolute top-40 right-40 sm:-top-100 sm:-right-10 -z-1 dark:hidden' />
    </div>

    <TrustedBy />
    </section>
  )
}

export default Hero

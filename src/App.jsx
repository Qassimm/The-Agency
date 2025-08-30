import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Sevices from './Components/Sevices'
import Work from './Components/Work'
import Team from './Components/Team'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light')

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

   useGSAP(() => {
      const speed = 0.2; 

      const dotX = gsap.quickTo(dotRef.current, "x", {duration: speed, ease:"power3.out"});
      const dotY = gsap.quickTo(dotRef.current, "y", {duration: speed, ease:"power3.out"});
      const outlineX = gsap.quickTo(outlineRef.current, "x", {duration: speed + 0.2, ease:"power3.out"});
      const outlineY = gsap.quickTo(outlineRef.current, "y", {duration: speed + 0.2, ease:"power3.out"});

      const mouseMove = (e) => {
        dotX(e.clientX - 6);
        dotY(e.clientY - 6);
        outlineX(e.clientX - 20);
        outlineY(e.clientY - 20);
      };

      window.addEventListener('mousemove', mouseMove);

      const addHover = () => {
        gsap.to(outlineRef.current, { scale: 1.3, duration: 0.2, ease: "power3.out" });
        gsap.to(dotRef.current, {opacity:0, duration:0})
      };

      const removeHover = () => {
        gsap.to(outlineRef.current, { scale: 1, duration: 0.2, ease: "power3.out" });
        gsap.to(dotRef.current, {opacity:1, duration:0})
      };

      const hoverables = document.querySelectorAll("a, button, .hoverable");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

      return () => {
        window.removeEventListener("mousemove", mouseMove); 
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
      };
}, [])

  
  return (
    <main className='dark:bg-black relative'>
      <Toaster />
      <Navbar  theme={theme} setTheme={setTheme}/>
      <Hero />
      <Sevices />
      <Work />
      <Team/>
      <Contact />
      <Footer theme={theme} setTheme={setTheme}/>

      {/* customized cursor */}
      <div ref={outlineRef} className='ring' style={{transition:' transform 0.1s ease-out'}}></div>
      <div ref={dotRef} className='dot'></div>

    </main>
  )
}

export default App

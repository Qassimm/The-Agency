import React, { useState } from "react";
import assets from "../assets/assets";
import ToggleBtn from './ToggleBtn';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useGSAP(() => {

   gsap.from(
      ".navbar-wrapper",
    {yPercent:-100, duration:1, ease:'expo.inOut'}
    )}, [])


  return (
    <div className="navbar-wrapper">
        <a href="/"><img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" /></a>

        

      <div className={`nav-container ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden':'max-sm:w-60 max-sm:pl-10'}`}>
        
          <img src={assets.close_icon} alt="logo" className=" w-5 absolute right-4 top-4 cursor-pointer sm:hidden" onClick={() => setSidebarOpen(false)} />
          
        <a onClick={() => setSidebarOpen(false)} href="#" className="nav">Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className="nav">Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work" className="nav">Our Work</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact" className="nav">Contact Us</a>
      </div>

        <div className="flex items-center gap-2 sm:gap-4">

          <ToggleBtn theme={theme} setTheme={setTheme}/>
          <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="menu" className="w-8  cursor-pointer sm:hidden" onClick={() => setSidebarOpen(true)}/>
          <a href="#contact" className="contact-btn">Connect <img src={assets.arrow_icon} width={14} alt="" /></a>
        </div>
    </div>
  );
};

export default Navbar;

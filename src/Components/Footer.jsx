import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='footer '>
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme === 'dark'? assets.logo_dark : assets.logo} alt="Logo" className='w-32 sm:w-44 ' />
                <p className='max-w-md '>From strategy to execution, we craft digital solutions that move your business forward.</p>

                <ul className='flex gap-8'>
                    <li><a href="#hero" className='hover:text-primary'>Home</a></li>
                    <li><a href="#services" className='hover:text-primary'>Services</a></li>
                    <li><a href="#our-work" className='hover:text-primary'>Our Work</a></li>
                    <li><a href="#contact" className='hover:text-primary'>Contact Us</a></li>
                </ul>
            </div>
            <div className='text-gay-600 dark:text-gray-400'>
                <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6'>The latest news, articles and resources, sent to your inbox weekly.</p>

                <div className='flex gap-2 text-sm'>
                    <input type="email" placeholder='Enter your email' className='footer-input' />
                    <button className='bg-primary text-white rounded px-6  py-2 cursor-pointer hover:scale-102'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='border border-gray-300 dark:border-gray-600 my-6 '/>

        <div className='copyRight-message-container'>
            <p >CopyRight 2025 © Qasim2.0 - All Right  Reserved.</p>

            <div className='flex items-center justify-between gap-4'>
                <img src={assets.facebook_icon} alt="facbook"/>
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.instagram_icon} alt="instagrm" />
                <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
        </div>
    </div>
  )
}

export default Footer

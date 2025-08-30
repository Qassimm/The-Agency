import React, { useRef, useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

function Contact() {
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false) 

  
  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.target)
    formData.append('access_key', '37a99c34-33ce-4da4-8fd9-d56f2de09c81')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Thank you for your submission!')
        event.target.reset()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false) 
    }
  }

  gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {
    if (titleRef.current) {
      const headingSplit = new SplitText(titleRef.current, { type: 'lines' })

      gsap.from(headingSplit.lines, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        yPercent: -100,
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
      })
    }

    if (formRef.current) {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        scale: 1.1,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'expo.out',
      })
    }
  }, [])

  return (
    <div id="contact" className="contact-section">
      
      <div ref={titleRef} className="text-center col-center">
        <Title
          title="Reach out to us"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </div>

    
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="form grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person-icon" />
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email-icon" />
            <input
              name="email"
              type="email"
              placeholder="Enter Your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 text-sm rounded-lg outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-max flex gap-2 bg-primary text-white py-3 px-10 rounded-full transition-all text-sm cursor-pointer hover:scale-102 disabled:opacity-70"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Contact

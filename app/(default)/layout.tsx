'use client'

import { useEffect } from 'react'
import "./custom-aos-styles.css"
import AOS from 'aos'
 import 'aos/dist/aos.css'
 import { ToastContainer } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
 
import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">

        <PageIllustration />
        <ToastContainer
    theme="dark"
position="top-right"
autoClose={3000}
closeOnClick
pauseOnHover={false}/>


        {children}

      </main>

      <Footer />
    </>
  )
}

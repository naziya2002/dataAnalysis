'use client'

import { useEffect } from 'react'
import "./custom-aos-styles.css"
import AOS from 'aos'
 import 'aos/dist/aos.css'
 import { ToastContainer } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
 <link rel="stylesheet" href="http://localhost:3000/_next/static/css/app/layout.css?v=1690813228735" as="style" />

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode,
  linkPrefetch: false,

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
       

        {children}

      </main>

      <Footer />
    </>
  )
}

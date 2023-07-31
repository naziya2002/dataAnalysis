export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import { ToastContainer } from 'react-toastify'
<link rel="stylesheet" href="http://localhost:3000/_next/static/css/app/layout.css?v=1690813228735" as="style" />

export default function Home() {
  return (
    <>
      <ToastContainer
    theme="dark"
position="top-right"
autoClose={3000}
closeOnClick
pauseOnHover={false}/>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    
    </>
  )
}

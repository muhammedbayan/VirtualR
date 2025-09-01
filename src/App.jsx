import React from 'react'
import { Navbar } from './Components/Navbar'
import { HeroSection } from './Components/HeroSection'
import { FeatureSection } from './Components/FeatureSection'
import { WorkFlow } from './Components/WorkFlow'
import { PricingSection } from './Components/PricingSection'
import { Testimonials } from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-5 md:px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <PricingSection />
        <Testimonials />
        <Footer />
      </div>
      
    </>
  )
}

export default App
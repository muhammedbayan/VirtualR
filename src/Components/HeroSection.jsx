import React from 'react'
import codingVideo from '../assets/coding-video.mp4'
import vrVideo from '../assets/vr-video.mp4'

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-7xl tracking-wide text-center mx-3 md:mx-30">
        VirtualR build tools{' '}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">for developers</span>
      </h1>
      <p className='md:mx-30 mx-0 text-center mt-10 text-lg text-neutral-500'>
        Empower your creativity and bring your ideas to life with our initutive development tools. Get started today and turn your imagination into immersive reality!
      </p>
      <div className="flex space-x-10 mt-10">
        <a href="#" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-md">Start for free</a>
        <a href="#" className="px-4 py-2 bg-transparent border rounded-md">Documentation</a>
      </div>
      <div className="flex justify-center mt-10">
        <video className='w-1/2 border border-orange-700 rounded-md shadow-orange-500 mx-2 my-8' autoPlay loop muted>
          <source src={codingVideo} type="video/mp4" />
        </video>
        <video className='w-1/2 border border-orange-700 rounded-md shadow-orange-500 mx-2 my-8' autoPlay loop muted>
          <source src={vrVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

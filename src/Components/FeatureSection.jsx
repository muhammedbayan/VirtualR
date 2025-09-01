import React from 'react'
import { features } from '../Constants'

export const FeatureSection = () => {
  return (
    <div className='min-h-[600px] border-b border-neutral-800 mt-10'>
        <div className="text-center">
            <span className='p-1 bg-black text-sm text-orange-500 uppercase font-medium rounded-full'>feature</span>
            <h1 className='text-3xl lg:text-5xl mt-14 tracking-wide'>
                Easily build
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> your code</span>
            </h1>
        </div>
        <div className='flex flex-wrap mt-5 lg:mt-10'>
            {features.map((feature, index) => (
                <div key={index} className='w-full md:w-1/3 lg:p-5 p-2'>
                    <div>
                        <h5 className='text-xl mt-3 mb-2 font-bold'>{feature.text}</h5>
                        <p className='text-md p-2 text-neutral-500'>{feature.description}</p>
                    </div>
                </div>
        ))}
        </div>
        
    </div>
  )
}

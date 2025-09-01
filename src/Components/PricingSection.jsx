import React from 'react'
import { pricingOptions} from '../Constants'

export const PricingSection = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-5xl text-center tracking-wider'>Pricing</h1>
        <div className="flex flex-wrap mt-6">
            {pricingOptions.map((option, index)=>(
                <div key={index} className='w-full md:w-1/3 p-2'>
                    <div className="border border-neutral-500 rounded-md p-7">
                        <p className='text-3xl font-bold mb-3'>
                            {option.title}
                            {option.title === 'Pro' && 
                            <span className='text-xl text-orange-600 font-thin '> (Most popular)</span>}
                        </p>
                        <span className="text-3xl mb-3">{option.price}</span>
                        <span className="text-neutral-500 pl-1 tracking-tight">/Month</span>
                        <ul className='space-y-4 mt-5'>
                            {option.features.map((feature, ind)=>(
                                <li key={ind} className='pl-2'>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="w-full p-2 border border-orange-800 rounded-md inline-flex justify-center items-center mt-15 text-xl hover:bg-orange-700 transition duration-200">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

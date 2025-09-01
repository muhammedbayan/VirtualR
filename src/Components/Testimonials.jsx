import React from 'react'
import { testimonials } from '../Constants'

export const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h1 className='text-center text-4xl lg:text-5xl'>What people are saying</h1>
        <div className='mt-15 flex flex-wrap'>
            {testimonials.map((testimonial, index)=>(
                <div key={index} className='w-full md:w-1/3 px-5 py-2'>
                    <div className="p-4 border border-neutral-500 rounded-md">
                        <p className="text-md text-neutral-500">{testimonial.text}</p>
                        <div className='flex items-start mt-6 space-x-3'>
                            <img className='w-12 border border-neutral-200 rounded-full' src={testimonial.image} alt="" />
                            <div className="ml-5 space-y-1">
                                <h1 className='text-xl text-neutral-500'>{testimonial.user}</h1>
                                <span className='text-sm italic text-neutral-600'>{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

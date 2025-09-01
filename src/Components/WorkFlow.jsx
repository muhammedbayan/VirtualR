import React from 'react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../Constants'

export const WorkFlow = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-5xl text-center tracking-wide'>Accelerate your 
            <span className='bg-gradient-to-t from-orange-500 to-orange-800 text-transparent bg-clip-text'> coding workflow.</span>
        </h1>
        <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2'>
                <img  src={codeImg} alt="" />
            </div>
            <div className="w-full lg:w-1/2 py-10 pl-15 space-y-7">
                {checklistItems.map((item, index)=>(
                    <div key={index}>
                        <div className='text-xl mb-2'>
                            {item.title}
                        </div>
                        <div className='text-neutral-500 text-md'>{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

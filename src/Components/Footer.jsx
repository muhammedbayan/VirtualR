import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../Constants'

const Footer = () => {
  return (
    <div className='my-20 border-t border-neutral-500'>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-5">
             <div>
                <h3 className='font-bold mb-4'>Resources</h3>
                <ul className='space-y-3 text-neutral-400'>
                    {resourcesLinks.map((link, index)=>(
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='font-bold mb-4'>Platforms</h3>
                <ul className='space-y-3 text-neutral-400'>
                    {platformLinks.map((link, index)=>(
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='font-bold mb-4 mt-5 lg:mt-0'>Community</h3>
                <ul className='space-y-3 text-neutral-400'>
                    {communityLinks.map((link, index)=>(
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Footer
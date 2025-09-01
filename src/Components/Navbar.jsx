import React from 'react'
import menuIcon from '../assets/menu_icon.png'
import logo from '../assets/logo.png'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                  <img className='w-14 mx-3' src={logo} alt="" />
                  <span className="text-xl tracking-tight">virtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-8'>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Workflow</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Testimonalals</a></li>
                </ul>
                <div className='hidden lg:flex space-x-12'>
                  <a className='px-4 py-2 border rounded-md' href="#">Sign In</a>
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-2 rounded-md text-white">Create an account</a>
                </div>
                <div onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden cursor-pointer">
                  {menuOpen ?   (<h1 className='text-xl'>✖</h1>) : (<img className='w-8' src={menuIcon} alt="" />)}
                </div>
            </div>
            {menuOpen && (
              <div className='flex flex-col items-center justify-center p-10 lg:hidden'>
                <ul className='space-y-6'>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Workflow</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Testimonalals</a></li>
                </ul>
                <div className="flex space-x-10 pt-6">
                  <a className='px-3 py-2 border rounded-md' href="#">Sign In</a>
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-2 rounded-md text-white">Create an account</a>
                </div>
              </div>
            )}
      </div>
    </nav>
  )
}

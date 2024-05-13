import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='h-full w-full flex justify-end items-center gap-4 md:gap-6 mr-6'>
      <Link href='/movie' className=' ml-2 text-sm md:text-lg text-white relative group'>MOVIES <span className='absolute bottom-0 left-0 mt-1 bg-cyan-300 h-[1px] w-0 transform transition-all duration-500 ease-[cubic-bezier(0,1,0,1.08)] group-hover:w-full'></span></Link>
      <Link href='/serie' className='text-sm md:text-lg text-white relative group'>TVSHOW <span className='absolute bottom-0 left-0 mt-1 bg-cyan-300 h-[1px] w-0 transform transition-all duration-500 ease-[cubic-bezier(0,1,0,1.08)] group-hover:w-full'></span></Link>
      <Link href='/release' className=' text-sm md:text-lg text-white relative group'>RELEASE <span className='absolute bottom-0 left-0 mt-1 bg-cyan-300 h-[1px] w-0 transform transition-all duration-500 ease-[cubic-bezier(0,1,0,1.08)] group-hover:w-full'></span></Link>
      <Link href='/search' className='bg-cyan-300 h-[60%] w-20 md:w-28 rounded-full border border-cyan-300 text-center flex justify-center items-center p-2 shadow-xl shadow-teal-700 hover:bg-transparent hover:text-cyan-300'>SEARCH</Link>
    </nav>
  )
}

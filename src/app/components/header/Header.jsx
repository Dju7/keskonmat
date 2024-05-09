import React from 'react'
import Nav from '../nav/Nav'
import Link from 'next/link'
import { ImHome } from "react-icons/im";

export default function Header() {
  return (
    <header className='fixed top-0 z-50 h-16 w-full flex justify-around items-center'>
     <Link href='/' className='text-gray-400 shadow-xl shadow-teal-700 text-2xl ml-10 transition-all duration-300 hover:text-cyan-300 hover:scale-105'><ImHome/></Link>
      <Nav />
      
    </header>
  )
}

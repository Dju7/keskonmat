'use client'
import React from 'react'
import { motion, useScroll } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";


export default function SideBar() {
    const { scrollYProgress } = useScroll();
    
    let currentScrollPosition = 0;

const handleClick = () => {
    currentScrollPosition += window.innerHeight;
    window.scrollTo({ top: currentScrollPosition, behavior: 'smooth' });
};

  return (
    <aside className='hidden md:flex fixed z-20 left-0 h-[97%] w-52 flex-col justify-end items-center'>
        <div className=' absolute top-0 h-[85%] 3xl:h-[90%] w-[1px] bg-gray-500'>
            <motion.div className='bg-red-400 w-[2px] h-full origin-top z-50' style={{scaleY: scrollYProgress}}></motion.div>
        </div>
        <div className=' flex h-[120px] w-[120px] rounded-full border-0 md:border border-gray-500 justify-center items-center text-cyan-300 text-4xl transition-all duration-300  hover:bg-white hover:bg-opacity-10 hover:border-cyan-300' onClick={handleClick}>
            <RxDoubleArrowDown/>
        </div> 
    </aside>
  )
}

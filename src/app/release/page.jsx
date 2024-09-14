import React from 'react'
import Releases from '../components/releases/Releases'

export default function page() {
return (
<main className='relative z-0'>
      <h2 className='absolute top-0 left-20 mt-10 xl:mt-2 md:left-32 text-3xl  md:text-7xl 3xl:text-9xl text-white opacity-30 z-1'>T H E A T E R - M O V I E</h2>
      <h2 className='absolute top-2 left-20 mt-10 xl:mt-2 md:left-32 text-3xl  md:text-7xl 3xl:text-9xl text-teal-800 opacity-30 z-10 hover:opacity-50'>T H E A T E R - M O V I E</h2>
    <section className='z-20 bg-slate-900 flex justify-center items-center'>
      <div className='ml-4 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
        <div className='mt-14 w-full min-h-[95%] overflow-auto'>
        <Releases />
        </div>
      </div>
    </section>
</main>
  )
}

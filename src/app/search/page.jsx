import React from 'react'
import SearchMovie from '../components/searchmovie/SearchMovie'
import Image from 'next/image'

export default function page() {
  return (
    <main className='relative z-0 bg-salle bg-cover flex justify-center items-center'>
      <div className='absolute z-1 h-full w-full bg-slate-800 bg-opacity-50 flex flex-col' />
          <SearchMovie />
    </main>
  )
}

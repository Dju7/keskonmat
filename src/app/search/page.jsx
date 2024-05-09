import React from 'react'
import SearchMovie from '../components/searchmovie/SearchMovie'

export default function page() {
  return (
    <main className='bg-accueil bg-cover bg-repeat flex justify-center items-center'>
     
        <div className='ml-20 min-h-[100vh] w-[90%] flex flex-col justify-center items-center'>
          <SearchMovie />
        </div>
    
    </main>
  )
}

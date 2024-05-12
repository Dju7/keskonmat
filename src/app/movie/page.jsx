import React from 'react'
import ActionMovie from '../components/action-movie/ActionMovie'
import FamilyMovie from '../components/family-movie/FamilyMovie'
import HorrorMovie from '../components/horreur-movie/HorrorMovie'
import EmotionMovie from '../components/emotion-movie/EmotionMovie'
import SfMovie from '../components/fanstastique-movie/SfMovie'

export default function page() {
  return (
    <main id='top' className='relative z-0'>
       <h2 className='absolute top-0 left-32 text-7xl 3xl:text-9xl text-white opacity-30 z-1'>M O V I E</h2>
       <h2 className='absolute top-2 left-36 text-7xl 3xl:text-9xl text-teal-800 opacity-30 z-10 hover:opacity-50'>M O V I E</h2>
    <section id="action" className='z-50 bg-slate-900 flex justify-center items-center'>
      <div className='mt-8 ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
        <div className='z-50 h-[5%] w-full flex justify-center items-center gap-2'>
           <a href='#action' className='h-full w-[150px]'><div className='h-full w-full flex justify-center items-center rounded-full bg-cyan-300'>ACTION</div></a>
           <a href='#fantastique' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>FANTASY</div></a>
           <a href='#emotion' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>EMOTION</div></a>
           <a href='#frisson' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>HORROR</div></a>
           <a href='#famille' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>FAMILY</div></a>
        </div>

        <div className='w-full min-h-[95%] overflow-auto'>
          <ActionMovie />
        </div>
      </div>
      
    </section>
       <section id="fantastique" className='bg-slate-800 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
        <div className='mt-2 h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>

         <div className='w-full min-h-[99%] overflow-auto'>
         <SfMovie />
         </div>
       </div>
       
     </section>

     <section id="emotion" className='bg-slate-900 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
       <div className='h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>

         <div className='w-full min-h-[95%] overflow-auto'>
        <EmotionMovie />
         </div>
       </div>
       
     </section>

     <section id='frisson' className='bg-slate-800 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
       <div className='mt-2 h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>

         <div className='w-full min-h-[99%] overflow-auto'>
        <HorrorMovie/>
         </div>
 
       </div>
       
     </section>

     <section id='famille' className='bg-slate-900 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
       <div className='mt-2 h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>
         <div className='w-full min-h-[99%] overflow-auto'>
          <FamilyMovie/>
 
         </div>
 
       </div>
       
     </section>
     </main>
  )
}

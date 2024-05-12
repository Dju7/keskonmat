import React from 'react'
import ActionSerie from '../components/action-serie/ActionSerie'
import SfSerie from '../components/fantastique-serie/SfSerie'
import HorrorSerie from '../components/horreur-serie/HorrorSerie'
import EmotionSerie from '../components/emotion-serie/EmotionSerie'
import FamilySerie from '../components/family-serie/FamilySerie'

export default function page() {
  return (
    <main className='relative z-0'>
      <h2 className='absolute top-0 left-32 text-7xl 3xl:text-9xl text-white opacity-30 z-1'>S E R I E</h2>
      <h2 className='absolute top-2 left-36 text-7xl 3xl:text-9xl text-teal-800 opacity-30 z-10 hover:opacity-50'>S E R I E</h2>
   <section id="action" className='z-20 bg-slate-900 flex justify-center items-center'>
      <div className='mt-4 ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
        <div className='h-[5%] w-full flex justify-center items-center gap-2'>
           <a href='#action' className='h-full w-[150px]'><div className='h-full w-full flex justify-center items-center rounded-full bg-cyan-300'>ACTION</div></a>
           <a href='#fantastique' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>FANTASY</div></a>
           <a href='#emotion' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>EMOTION</div></a>
           <a href='#frisson' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>CRIME</div></a>
           <a href='#famille' className='h-full w-[150px]'><div className='h-full w-[150px] flex justify-center items-center rounded-full bg-cyan-300'>FAMILY</div></a>
        </div>

        <div className='w-full min-h-[95%]  overflow-auto'>
           <ActionSerie />
        </div>
      </div>
      
    </section>
       <section id="fantastique" className='z-20 bg-slate-800 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
       <div className='h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>

         <div className='w-full min-h-[95%] overflow-auto'>
           <SfSerie />
         </div>
       </div>
       
     </section>

     <section id="emotion" className='z-20 bg-slate-900 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
       <div className='h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>

         <div className='w-full min-h-[95%]   overflow-auto'>
           <EmotionSerie />
         </div>
       </div>
       
     </section>

     <section id='frisson' className='z-20 bg-slate-800 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
       <div className='h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>

         <div className='w-full min-h-[99%] overflow-auto'>
          <HorrorSerie />
         </div>
 
       </div>
       
     </section>

     <section id='famille' className='z-20 bg-slate-900 flex justify-center items-center'>
       <div className='ml-2 md:ml-32 w-[90%] h-[90%] flex flex-col gap-4 '>
       <div className='h-[5%] w-full flex justify-center items-center text-cyan-300 text-xl'><a href='#top'>BACK</a></div>

         <div className='w-full min-h-[99%] overflow-auto'>
           <FamilySerie />
         </div>
 
       </div>
       
     </section>
    </main>
  )
}

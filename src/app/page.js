import Upcoming from './components/upcoming/Upcoming'
import Trending from './components/trending/Trending'
import { motion } from 'framer-motion';

export default function Home() {

  return (
  <>
    <main className="bg-accueil bg-cover">
      <section className=" bg-gray-800 bg-opacity-80 flex justify-center items-center">
        <article className="ml-8 md:ml-14 xl:ml-2 h-[60vh] xl:h-[40%] 3xl:h-[30%] w-[85%] xl:w-[60%] flex flex-col xl:flex-row gap-12 justify-between items-center">

          <div className="h-full w-[90%] xl:w-[60%] flex flex-col gap-4 ">
            <div className="h-[70%] 3xl:h-[60%]">
              <h2 className="text-[7rem] 3xl:text-[8rem] text-cyan-300 m-0  leading-snug whitespace-nowrap">KESS<span className=" ml-2  text-4xl text-cyan-700">T O N I G H T ?</span></h2>
              <h2 className="text-[7rem] 3xl:text-[8rem] text-cyan-300 text-end m-0 leading-10">KONMAT</h2>
            </div>
            <div className="flex h-[10%] justify-center items-center gap-6 mt-10 2xl:mt-0">
              <div className="h-4 bg-cyan-300 w-36"/>
              <p className="text-lg 3xl:text-2xl text-cyan-300">THE GREAT QUESTION AFTER DINER</p>
              <div className="h-4 bg-cyan-300 w-36"/>
            </div>
          </div>

          <div className=" w-[90%] xl:w-[40%] h-[90%] flex flex-col justify-center gap-6 lg:gap-12 ">
            <div  className=" h-2 bg-cyan-300 w-36"/>
            <p className="text-gray-300 text-md md:text-lg xl:text-xl">ONE OF THE MAIN EXISTENTIAL QUESTIONS AMONG WHAT ARE WE EATING TONIGHT, WHERE IS THE TOILET AND WHY DO SOCKS DISAPPEAR IN THE WASHING MACHINE...  </p>
            <p className="h-10 w-36 rounded-full bg-cyan-300 border border-cyan-300 text-center p-2 shadow-xl shadow-teal-700 hover:bg-transparent hover:text-cyan-300"><a href='/search'>MAKE A SEACH</a></p>
          </div>

        </article>
        </section>
    </main>
    <section id='upcoming' className="bg-slate-800 flex justify-center items-center ">
      <div className='ml-2 md:ml-32 w-full md:w-[90%] h-[90%] flex flex-col gap-4 '>
         <div className='w-full min-h-[99%] flex flex-col  overflow-auto'>

            <div className="h-2 w-72 bg-cyan-300" />
            <h3 className="text-5xl md:text-7xl text-cyan-300 mt-2">U P C O M  I N G</h3>
            <div className=" mt-2 ml-[23%] h-2 w-72 bg-cyan-300" />

            <div className=" relative mt-6 min-h-[80%] flex w-full overflow-auto">
              <div className='w-[10%] h-full text-7xl md:text-9xl 3xl:text-[8rem] flex flex-col justify-center items-center text-gray-600 sticky top-0 opacity-90'>
                <p>M</p>
                <p>O</p>
                <p>V</p>
                <p>I</p>
                <p>E</p>
              </div>
              <Upcoming />
            </div>
         
         </div>
      </div>

    </section>

    <section className="bg-slate-800 flex justify-center items-center">
      <div className='ml-2 md:ml-32 w-full md:w-[90%] h-[90%] flex flex-col gap-4 '>
         <div className='w-full min-h-[90%] flex flex-col'>
         <div className="h-2 w-72 bg-cyan-300" />
            <h3 className="text-4xl md:text-7xl text-cyan-300 mt-2">T R E N D I N G -  S E R I E S</h3>
            <div className=" mt-2 ml-[23%] h-2 w-72 bg-cyan-300" />
            <div className=" relative mt-6 min-h-[80%] flex w-full overflow-auto">
              <div className='w-[10%] h-full text-7xl md:text-9xl 3xl:text-[8rem] flex flex-col justify-center items-center text-gray-600 sticky top-0 opacity-90'>
                <p>T<span className='text-5xl'>v</span></p>
                <p>S</p>
                <p>H</p>
                <p>O</p>
                <p>W</p>
              </div>
              <Trending />
            </div>
         
         </div>
      </div>

    </section>
  </>
  );
}

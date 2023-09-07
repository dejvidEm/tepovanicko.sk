import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Recenzie = () => {
  return (
    <div className='w-full h-auto'>
      <div className="min-h-[600px] bg-gray-100 py-28 relative">
      <div className='w-full flex justify-center items-center mb-30'>
        <h1 className='text-4xl font-bold md:py-7 py-3'>Povedali o Nás..</h1>
      </div>
         <div className="w-full mx-auto stylovy">
            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />
               <div
                  className="md:w-3/5 w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100">
                  <div className="py-4 px-8">
                     <div className='flex justify-center flex-row py-3'>
                     <CgProfile size={60}></CgProfile>
                     <h1 className="hover:cursor-pointer mt-[15px] ml-5 mr-5 text-gray-900 font-bold md:text-2xl text-lg tracking-tight">
                        Matej Gašpar
                     </h1>
                     </div>
                     <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                     '' Veľmi som spokojný. Komunikácia na úrovni, profi robota, priateľský prístup, ja zostávam verný dlhodobo. ''
                     </p>
                     <div className='flex flex-row justify-between mt-5'><div className='flex flex-row'><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar></div><p className='md:text-base text-sm'>7 dní dozadu</p></div>
                  </div>
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-3" className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-2" className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-2" />
               <div
                  className="md:w-3/5 w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <div className="py-4 px-8">
                     <div className='flex justify-center flex-row py-3'>
                        <CgProfile size={60}></CgProfile>
                        <h1 className="hover:cursor-pointer mt-[15px] ml-5 mr-5 text-gray-900 font-bold md:text-2xl text-lg tracking-tight">
                           Ema Vajnorová
                        </h1>
                     </div>
                     <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                     '' Chalani umyvali kreslá a tepovali gauce, stolicky i koberce. Boli dochvilni, precizni a odviedli krasnu robotu. Komunikácia ale trvala trochu dlhšie. Napriek tomu veľké Dakujem ''
                     </p>
                     <div className='flex flex-row justify-between mt-5'><div className='flex flex-row'><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiOutlineStar size={24}></AiOutlineStar></div><p className='md:text-base text-sm'>2 týždne dozadu</p></div>
                  </div>
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-1" className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-3" className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-3" checked />
               <div
                  className="md:w-3/5 w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <div className="py-4 px-8">
                     <div className='flex justify-center flex-row py-3'>
                        <CgProfile size={60}></CgProfile>
                        <h1 className="hover:cursor-pointer mt-[15px] ml-5 mr-5 text-gray-900 font-bold md:text-2xl text-lg tracking-tight">
                           Jana Hrasková
                        </h1>
                     </div>
                     <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                     '' Zlatí chlapci! Mali toho dosť, čo bolo treba vyčistiť, perfektne to urobili. Všetko klaplo bez chyby, ďakujeme! ''
                     </p>
                     <div className='flex flex-row justify-between mt-5'><div className='flex flex-row'><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar><AiFillStar size={24}></AiFillStar></div><p className='md:text-base text-sm'>1 mesiac dozadu</p></div>
                  </div>
                  <div class="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-2" class="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-1" class="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Recenzie
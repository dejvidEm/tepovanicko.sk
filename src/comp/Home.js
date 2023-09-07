import React from 'react'
import { Link } from "react-scroll";
import { GrInstagram, GrFacebook } from 'react-icons/gr';
import pozadie from "../img/background.jpg";

const Home = () => {
  return (
    <div name="domov" className='w-full h-auto flex flex-col'>
      <img alt='/' src={pozadie} className='absolute w-screen h-screen top-0 left-0 -z-50 object-cover'></img>
      <div className='w-full h-[50vh] flex justify-center content-center pt-48'>
        <div className='flex w-auto h-auto flex-col justify-center text-center items-center'>
          <h1 className='font-bold md:text-4xl text-3xl'>Tepovaničko</h1>
          <h2 className='md:text-2xl text-lg text-[#94153f] mt-2 mb-5'>Čistý domov pre každého na dosah ruky</h2>
          <Link to="kontakt" smooth duration={1000} className="sm:w-[50%] w-[55%] rounded-md px-3.5 py-2 m-1 z-[0] overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ca1f58]">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ca1f58] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-[#ca1f58] md:text-sm text-base transition duration-300 group-hover:text-white ease">Kontaktuj Nás!</span>
          </Link>
        </div>
      </div>
      <div className='w-full h-[50vh] flex justify-center md:justify-end items-end pb-20'>
        <div className='flex w-32 h-auto justify-around mr-0 md:mr-20'> 
          <a href='https://www.instagram.com/tepovanicko/' target='_blank' rel="noreferrer"><GrInstagram size={35}/></a>
          <a href='https://www.facebook.com/profile.php?id=100090235422451' target='_blank' rel="noreferrer"><GrFacebook size={35}/></a>
        </div>
      </div>
    </div>
  )
}

export default Home
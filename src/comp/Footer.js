import React from 'react'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className='text-center w-full'>
        <div className='w-[100%] bg-black h-[2px] m-auto'></div>
        <h1 className='text-2xl py-2'>Vytepujeme aj u <span className='font-bold text-[#ca1f58]'>Vás!</span></h1>
        <div className='w-[100%] bg-black h-[2px] m-auto'></div>
      </div>
      <div className='w-full flex flex-row justify-around'>
        <div className='my-8'>
          <h2 className='font-bold text-xl text-[#ca1f58] my-2'>Stránky</h2>
          <ul className='flex flex-col'>
            <Link to="domov" smooth duration={500} className='cursor-pointer hover:font-bold'>Domov</Link>
            <Link to="onas" smooth duration={500} className='cursor-pointer hover:font-bold'>O nás</Link>
            <Link to="praca" smooth duration={500} className='cursor-pointer hover:font-bold'>Naša práca</Link>
            <Link to="cennik" smooth duration={500} className='cursor-pointer hover:font-bold'>Cenník</Link>
            <Link to="kontakt" smooth duration={500} className='cursor-pointer hover:font-bold'>Kontakt</Link>
          </ul>
        </div>
        <div className='my-8'>
          <h2 className='font-bold text-xl text-[#ca1f58] my-2'>Kontakt</h2>
          <ul>
            <li>Tepovaničko.sk</li>
            <li>tepovanie.info@gmail.com</li>
            <li>0911 112 334</li>
            <li>Bratislava, Nové Mesto</li>
          </ul>
        </div>
      </div>
      <div className='w-full text-center'>
        <p className='py-2 font-bold'>Tepovanicko © 2023 Všetky práva vyhradené</p>
      </div>
    </div>
  )
}

export default Footer
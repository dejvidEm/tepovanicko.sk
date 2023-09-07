import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-16 md:px-14 lg:px-20 bg-slate-50 fixed z-[20]'>
        <div>
        <Link to="domov" smooth duration={500} className='px-4 cursor-pointer font-bold text-2xl text-[#ca1f58] hover:scale-105 hover:text-[#b62253] hover:font-bold duration-200'>Tepovaničko</Link>
        </div>
        <ul className='hidden md:flex'>
            <Link to="domov" smooth duration={500} className='px-4 cursor-pointer font-medium text-gray-800 hover:scale-105 hover:text-[#ca1f58] hover:font-bold duration-200'>Domov</Link>
            <Link to="onas" smooth duration={500} offset={-70} className='px-4 cursor-pointer font-medium text-gray-800 hover:scale-105 hover:text-[#ca1f58] hover:font-bold  duration-200'>O nás</Link>
            <Link to="praca" smooth duration={500} offset={10} className='px-4 cursor-pointer font-medium text-gray-800 hover:scale-105 hover:text-[#ca1f58] hover:font-bold  duration-200'>Naša práca</Link>
            <Link to="cennik" smooth duration={500} offset={-160} className='px-4 cursor-pointer font-medium text-gray-800 hover:scale-105 hover:text-[#ca1f58] hover:font-bold  duration-200'>Cenník</Link>
            <Link to="kontakt" smooth duration={500} className='px-4 cursor-pointer font-medium text-gray-800 hover:scale-105 hover:text-[#ca1f58] hover:font-bold  duration-200'>Kontakt</Link>
        </ul>
        <div onClick={() => setNav(!nav)} className='text-black cursor-pointer pr-4 z-10 md:hidden'>
            {nav ? <FaTimes size={30} className=''/> : <FaBars size={30}/>}
        </div>

        {nav && (
        <ul className='flex flex-col justify-center items-center left-0 top-16 absolute w-full h-auto bg-slate-50 text-gray-800 md:hidden border-y-2'>
            <Link onClick={() => setNav(!nav)} to="domov" smooth duration={1000} className='px-4 py-2 cursor-pointer font-large hover:scale-105 hover:font-bold duration-200'>Domov</Link>
            <Link onClick={() => setNav(!nav)} to="onas" smooth duration={1000} offset={-60} className='px-4 py-2 cursor-pointer font-large hover:scale-105 hover:font-bold duration-200'>O nás</Link>
            <Link onClick={() => setNav(!nav)} to="praca" smooth duration={1000} offset={-60} className='px-4 py-2 cursor-pointer font-large hover:scale-105 hover:font-bold duration-200'>Naša práca</Link>
            <Link onClick={() => setNav(!nav)} to="cennik" smooth duration={1000} offset={-160} className='px-4 py-2 cursor-pointer font-large hover:scale-105 hover:font-bold duration-200'>Cenník</Link>
            <Link onClick={() => setNav(!nav)} to="kontakt" smooth duration={1000} className='px-4 py-2 cursor-pointer font-large hover:scale-105 hover:font-bold duration-200'>Kontakt</Link>
        </ul>
        )}
    </div>
  )
}

export default Navbar
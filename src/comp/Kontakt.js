import React from 'react'
import fb_chat from "../img/fb-chat-icon.png";

const Kontakt = () => {
  return (
    <div name="kontakt" className='w-full h-screen mb-48'>
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-4xl font-bold md:py-7 py-3'>Kontaktujte Nás</h1>
      </div>
        <div className='w-full h-[30%] m-auto flex flex-col items-center'>
          <div className='flex flex-row mb-4'>
            <img alt='/' src={fb_chat} className='md:w-16 md:h-16 w-10 h-10'></img>
            <h1 className='m-auto md:text-lg text-md ml-10'>Spojte sa s Nami pomocou Messenger-u</h1>
          </div>
          <div className='flex flex-row'>
            <h1 className='m-auto md:text-lg text-md'>Alebo Nás kontaktujte priamo vyplnením formuláru nižšie</h1>
          </div>
        </div>
        <div className='w-full h-[70%] flex justify-center items-center'>
          <form className='flex flex-col md:w-[50%] sm:w-[70%] w-[85%]'>
            <h2 className='font-bold text-xl mb-2 mt-5 ml-2'>Meno a priezvisko</h2>
            <input type='text' placeholder='Janko Mrkvička' className='plejs p-3 rounded-lg bg-[#c46887]'></input>
            <h2 className='font-bold text-xl mb-2 mt-5 ml-2'>Email</h2>
            <input type='text' placeholder='janko1@gmail.com' className='plejs p-3 rounded-lg bg-[#c46887]'></input>
            <h2 className='font-bold text-xl mb-2 mt-5 ml-2'>Mobil</h2>
            <input type='text' placeholder='0905 123 456' className='plejs p-3 rounded-lg bg-[#c46887]'></input>
            <h2 className='font-bold text-xl mb-2 mt-5 ml-2'>Vaša správa</h2>
            <input type='text' placeholder='Dobrý deň, mal by som otázku ohľadom...' className='plejs p-3 rounded-lg h-28 bg-[#c46887]'></input>
            <button type='submit' className="border-2 w-64 m-auto border-[#ca1f58] text-[#ca1f58] font-montserrat my-10 py-2 px-8 font-medium rounded-xl hover:bg-[#ca1f58] hover:text-white transition-all duration-300">Odoslať správu</button>
          </form>
        </div>
    </div>
  )
}

export default Kontakt
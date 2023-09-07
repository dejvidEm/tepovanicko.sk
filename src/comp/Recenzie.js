import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
   <div className='w-5/6 md:w-2/4 auto md:h-64 bg-white border-2 border-black m-auto rounded-xl' onDragStart={handleDragStart}>
      <div className='meno-fotka flex flex-row justify-between items-center m-auto w-56 pt-7'>
         <CgProfile size={70}/>
         <h1 className='text-xl text-[#ca1f58] font-bold'>Patrik Novotný</h1>
      </div>
      <div className='obsah'>
         <div className='px-6 md:px-12 pt-4 text-md'>" Firma Tepovacích Služieb bola neuveriteľne profesionálna a spoľahlivá. Ich pracovníci prišli včas a účinne vykonali tepovanie našej domácnosti. Ceny boli výhodné a výsledok bol úžasný. Odporúčame ich každému! "</div>
         <div className='flex flex-row justify-between p-12'>
            <div className='flex flex-row text-[#ca1f58] '><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/></div>
            <p className='datum'>pred 2 týždňami</p>
         </div>
      </div>
   </div>,
   <div className='w-5/6 md:w-2/4 auto md:h-64 bg-white border-2 border-black m-auto rounded-xl' onDragStart={handleDragStart}>
      <div className='meno-fotka flex flex-row justify-between items-center m-auto w-56 pt-7'>
         <CgProfile size={70}/>
         <h1 className='text-xl text-[#ca1f58] font-bold'>Patrik Novotný</h1>
      </div>
      <div className='obsah'>
         <div className='px-6 md:px-12 pt-4 text-md'>" S tepovaním od tejto firmy sme boli všeobecne spokojní. Ich pracovníci boli zdvorilí a výsledky boli viditeľné. Cena bola primeraná. Jedinou nevýhodou bola dlhšia doba čakania na termín."</div>
         <div className='flex flex-row justify-between p-12'>
            <div className='flex flex-row text-[#ca1f58] '><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/></div>
            <p className='datum'>pred 2 týždňami</p>
         </div>
      </div>
   </div>,
   <div className='w-5/6 md:w-2/4 auto md:h-64 bg-white border-2 border-black m-auto rounded-xl' onDragStart={handleDragStart}>
      <div className='meno-fotka flex flex-row justify-between items-center m-auto w-56 pt-7'>
         <CgProfile size={70}/>
         <h1 className='text-xl text-[#ca1f58] font-bold'>Patrik Novotný</h1>
      </div>
      <div className='obsah'>
         <div className='px-6 md:px-12 pt-4 text-md'>" Bohužiaľ, nemôžem úplne odporučiť túto tepovaciu firmu. Výsledky boli priemerné, a komunikácia a starostlivosť o detaily mala miestami problémy. Cena bola ale výborná, a preto musím povedať že som so službou spokojný. "</div>
         <div className='flex flex-row justify-between p-12'>
            <div className='flex flex-row text-[#ca1f58] '><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/><AiFillStar size={22}/><AiOutlineStar size={22}/></div>
            <p className='datum'>pred 2 týždňami</p>
         </div>
      </div>
   </div>,
 ];


const Recenzie = () => {
  return (
    <div className='w-full h-auto'>
      <div className="min-h-[600px] py-20 relative">
      <div className='w-full flex justify-center items-center mb-30'>
        <h1 className='text-4xl font-bold md:py-7 py-3'>Povedali o Nás..</h1>
      </div>
         <AliceCarousel mouseTracking items={items} animationDuration={700} autoPlay="true" autoPlayInterval={1900} infinite="true" />
      </div>
    </div>
  )
}

export default Recenzie
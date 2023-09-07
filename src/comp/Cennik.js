import React from 'react'
import sedacka from "../img/icons/sedacka.png";
import kreslo from "../img/icons/kreslo.png";
import stolicka from "../img/icons/stolicka.png";
import matrac from "../img/icons/martac.png";
import koberec from "../img/icons/koberec.png";
import vankus from "../img/icons/vankus.png";


const Cennik = () => {
  return (
    <div className='w-full h-auto mb-20'>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold md:pt-7 md:pb-3'>Cenník</h1>
        <p>Ceny platné od 01.01.2023</p>
      </div>
      <div name="cennik" className='max-w-6xl m-auto grid grid-cols-2 md:grid-cols-3' data-aos="fade-right">
        <div className='h-max-24 md:m-12 mx-4 my-6 sm:my-4 rounded-lg flex flex-col justify-between cena border-2 border-black'>
          <div className='w-full md:text-xl text-lg p-4'>Tepovanie</div>
          <img alt='/' src={sedacka} className='md:w-[125px] w-[105px] m-auto mb-4'></img>
          <div className='w-full flex flex-col text-center pb-3'>
            <p className='md:text-xl text-lg'>Sedačka</p>
            <p className='md:text-2xl text-xl'>Cena: <span className='font-bold text-[#9c0c3c]'>45€</span></p>
          </div>
        </div>
        <div className='h-max-24 md:m-12 mx-4 my-6 sm:my-4 rounded-lg flex flex-col justify-between cena border-2 border-black'>
          <div className='w-full md:text-xl text-lg p-4'>Tepovanie</div>
          <img alt='/' src={kreslo} className='md:w-[100px] w-[80px] m-auto mb-4'></img>
          <div className='w-full flex flex-col text-center pb-3'>
            <p className='md:text-xl text-lg'>Kreslo</p>
            <p className='md:text-2xl text-xl'>Cena: <span className='font-bold text-[#9c0c3c]'>10€</span></p>
          </div>
        </div>
        <div className='h-max-24 md:m-12 mx-4 my-6 sm:my-4 rounded-lg flex flex-col justify-between cena border-2 border-black'>
          <div className='w-full md:text-xl text-lg p-4'>Tepovanie</div>
          <img alt='/' src={stolicka} className='md:w-[105px] w-[85px] m-auto mb-4'></img>
          <div className='w-full flex flex-col text-center pb-3'>
            <p className='md:text-xl text-lg'>Stolička</p>
            <p className='md:text-2xl text-xl'>Cena: <span className='font-bold text-[#9c0c3c]'>50€</span></p>
          </div>
        </div>
        <div className='h-max-24 md:m-12 mx-4 my-6 sm:my-4 rounded-lg flex flex-col justify-between cena border-2 border-black'>
         <div className='w-full  md:text-xl text-lg p-4'>Tepovanie</div>
         <img alt='/' src={vankus} className='md:w-[95px] w-[75px] m-auto mb-4'></img>
          <div className='w-full flex flex-col text-center pb-3'>
            <p className='md:text-xl text-lg'>Vankúš</p>
            <p className='md:text-2xl text-xl'>Cena: od <span className='font-bold text-[#9c0c3c]'>3€</span></p>
          </div>
        </div>
        <div className='h-max-24 md:m-12 mx-4 my-6 sm:my-4 rounded-lg flex flex-col justify-between cena border-2 border-black'>
          <div className='w-full md:text-xl text-lg p-4'>Tepovanie</div>
          <img alt='/' src={matrac} className='md:w-[100px] w-[80px] m-auto mb-4'></img>
          <div className='w-full flex flex-col text-center pb-3'>
            <p className='md:text-xl text-lg'>Matrac</p>
            <p className='md:text-2xl text-xl'>Cena: <span className='font-bold text-[#9c0c3c]'>25€</span></p>
          </div>
        </div>
        <div className='h-max-24 md:m-12 mx-4 my-6 sm:my-4 rounded-lg flex flex-col justify-between cena border-2 border-black'>
          <div className='w-full md:text-xl text-lg p-4'>Tepovanie</div>
          <img alt='/' src={koberec} className='md:w-[100px] w-[80px] m-auto mb-4'></img>
          <div className='w-full flex flex-col text-center pb-3'>
            <p className='md:text-xl text-lg'>Koberec</p>
            <p className='md:text-2xl text-xl'>Cena: <span className='font-bold text-[#9c0c3c]'>10€</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cennik
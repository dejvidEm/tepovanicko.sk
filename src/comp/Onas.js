import React from 'react'
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";

const Onas = () => {
  return (
    <div name="onas" className='w-full h-auto'>
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-4xl font-bold md:py-7 pt-8'>Niečo o Nás</h1>
      </div>
      <div className='w-full h-[85%] flex flex-col items-center lg:flex-row'>
        <div className='bg-white h-full md:w-6/12 flex justify-end items-center md:pr-10 py-10'>
          <div className='bg-gray-500 w-[300px] h-[500px] rounded-lg'></div>
        </div>
        <div className='bg-white h-full w-10/12 flex justify-start items-center md:pl-10'>
          <div className='md:w-3/4 w-4/4 h-3/5'>
            <div className='w-full h-[20%] flex flex-col justify-center md:pl-3'>
              <h2 className='font-bol text-2xl'>Prečo si vybrať práve Nás?</h2>
              <p>Našu partiu tvorí mladá a energická skupina jednotlivcov.</p>
            </div>
            <div className='w-full h-[80%] grid grid-cols-1 md:grid-cols-2'>
              <div className=''>
                <div className='w-full h-[50%] flex justify-start items-end'>
                  <img className='w-20' src={icon1} alt='/'></img>
                </div>
                <div className='w-full h-[50%]'>
                  <h2 className='m-2 font-extrabold'>Profesionálny prístup</h2>
                  <p className='text-sm m-2'>
                  Máme za cieľ poskytnúť našim klientom nielen profesionálne tepovaciu služby, ale aj osobitný prístup.
                  Naším zámerom je priniesť vám nielen vynikajúce výsledky tepovania, 
                  ale aj zanechať vo vás bezstarostný a príjemný pocit z nášho stretnutia.
                  </p>
                </div>
              </div>
              <div className=''>
                <div className='w-full h-[50%] flex justify-start items-end'>
                  <img className='w-20' src={icon2} alt='/'></img>
                </div>
                <div className='w-full h-[50%]'>
                <h2 className='m-2 font-extrabold'>Moderné technológie</h2>
                  <p className='text-sm m-2'>
                  Využívame najmodernejšie tepovacie technológie, ktoré zabezpečujú rýchle a 
                  efektívne výsledky. Sme oboznámení s najnovšími trendami a inováciami v 
                  oblasti tepovania, čo nám umožňuje ponúkať špičkové služby v oblasti.
                  </p>
                </div>
              </div>
              <div className='mb-0 md:mb-20'>
                <div className='w-full h-[50%] flex justify-start items-end'>
                  <img className='w-20' src={icon3} alt='/'></img>
                </div>
                <div className='w-full h-[50%]'>
                <h2 className='m-2 font-extrabold'>Široká ponuka služieb</h2>
                  <p className='text-sm m-2'>
                  Naša tepovacia firma poskytuje širokú škálu tepovacích služieb pre 
                  rôzne typy povrchov a aplikácií. Či už ide o tepovanie interiéru, 
                  exteriéru alebo rôznorodých špeciálnych povrchov, sme pripravení splniť všetky 
                  Vaše tepovacie potreby, aj také, ktoré možno v ponuke nemáme.
                  </p>
                </div>
              </div>
              <div className='mb-20'>
                <div className='w-full h-[50%] flex justify-start items-end'>
                  <img className='w-20' src={icon4} alt='/'></img>
                </div>
                <div className='w-full h-[50%]'>
                <h2 className='m-2 font-extrabold'>Spokojnosť zákazníkov</h2>
                  <p className='text-sm m-2'>
                  Našou najväčšou prioritou je spokojnosť zákazníkov. 
                  Sme hrdí na množstvo pozitívnych referencií a opakovaných
                   obchodných vzťahov. Naši verní zákazníci svedčia o kvalite našich 
                   služieb a nášho príjemného prístupu. Vaša radosť a pohoda sú pre nás 
                   kľúčové
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onas
import React from 'react'
import photo1 from "../img/photos/photo1.jpg";
import photo2 from "../img/photos/photo2.jpg";
import photo3 from "../img/photos/photo3.jpg";
import photo4 from "../img/photos/photo4.jpg";
import photo5 from "../img/photos/photo5.jpg";
import photo6 from "../img/photos/photo6.jpg";
import photo7 from "../img/photos/photo7.jpg";

const Praca = () => {
  return (
    <div className='w-full h-auto' id='praca'>
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-4xl font-bold md:pt-10'>Naša práca</h1>
      </div>
        <div class="px-10 pb-6 mt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="container overflow-hidden">
        <div class="gallery_container w-full flex flex-wrap sm:flex-no-wrap justify-evenly pt-5">
          <img src={photo1} alt="/" class="img-gallery rounded-md w-80 mb-5 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" />
          <img src={photo2} alt="/" class="img-gallery rounded-md w-80 mb-5 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" />
          <img src={photo3} alt="/" class="img-gallery rounded-md w-80 mb-5 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" />
          <img src={photo4} alt="/" class="img-gallery rounded-md w-80 mb-5 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" />
          <img src={photo5} alt="/" class="img-gallery rounded-md w-80 mb-5 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" />
          <img src={photo6} alt="/" class="img-gallery rounded-md w-80 mb-5 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" />
          <img src={photo7} alt="/" class="img-gallery rounded-md w-80 mb-5 hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" />
        </div>
      </div>
      </div>
   
    </div>
  )
}

export default Praca
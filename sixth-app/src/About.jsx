import React from 'react'
import img1 from './assets/slider-image-1-large.jpg'
import img2 from './assets/slider-image-2-large.jpg'
import img3 from './assets/slider-image-3-large.jpg'
import img4 from './assets/slider-image-4-large.jpg'
import img5 from './assets/slider-image-5-large.jpg'

import small1 from './assets/slider-image-1-small.jpg'
import small2 from './assets/slider-image-2-small.jpg'
import small3 from './assets/slider-image-3-small.jpg'
import small4 from './assets/slider-image-4-small.jpg'
import small5 from './assets/slider-image-5-small.jpg'
import { useState } from 'react'

const About = () => {

  const imgArr = [img1, img2, img3, img4, img5];
  const mbImgArr = [small1,small2,small3,small4,small5];
  const [currentImg, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage(currentImg === imgArr.length-1 ? 0 : currentImg + 1);
  }

  const handlePrev = ()=>{
    if(currentImg===0){
      setCurrentImage(imgArr.length-1);
    }
    else{
      setCurrentImage(currentImg - 1);
    }
  }

  return (
    <>
      <div className='text-center my-10'>
        <img src={imgArr[currentImg]} alt="" className='w-full hidden m-2 md:block' />
        <img src={mbImgArr[currentImg]} alt="" className='w-full m-2 md:hidden'/>
      </div>
      <div className='flex gap-2 justify-between text-5xl text-center my-10 mx-5'>
        <button type="button" className='border rounded-2xl bg-slate-400 py-1 px-2 cursor-pointer w-35' onClick={handlePrev}>Prev</button>
        <button type="button" className='border rounded-2xl bg-slate-400 py-1 px-2 cursor-pointer w-35' onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default About
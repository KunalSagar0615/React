import React from 'react'
import { useEffect } from 'react'

const About = () => {

  useEffect(()=>{
    console.log("Online")

    document.title = "About Page"

    return ()=>{
      console.log("Last seen")
    }
  })

  return (
    <div className='h-screen flex justify-center items-center bg-amber-100 text-3xl font-bold'>About</div>
  )
}

export default About
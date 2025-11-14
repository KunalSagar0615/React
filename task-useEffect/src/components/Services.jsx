import React from 'react'
import { useEffect } from 'react'

const Services = () => {

  useEffect(()=>{
    console.log("Online")

    document.title = "Services page"

    return ()=>{
      console.log("Last seen")
    }
  },[])

  return (
    <div className='flex h-[90vh] justify-center items-center font-bold text-3xl bg-purple-600 text-white shadow-lg'>Services</div>
  )
}

export default Services
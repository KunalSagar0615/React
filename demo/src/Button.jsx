import React from 'react'

const Button = ({children,btnColor='bg-slate-500',textColour}) => {
  return (
    <button type='button' className={`${btnColor} ${textColour} text-2xl px-5 py-1 rounded-xl cursor-pointer`} >{children}</button>
  )
}

export default Button
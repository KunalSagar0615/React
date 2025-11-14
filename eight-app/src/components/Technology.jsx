import React from 'react'

const Technology = ({title,description,background}) => {
  return (
    <div className={`h-[90vh]  ${background}`}>
        <h1 className='text-center font-bold py-5 text-5xl'>{title}</h1>
        <div className='w-3/4 mx-auto text-xl'>
            {description}
        </div>
    </div>
  )
}

export default Technology
import React from 'react'

const Holiday = ({data}) => {
  return (
    <div className='w-1/3 border-gray-500 border-2 p-4 hover:shadow-lg hover:scale-102 transition-transform'>
        <div className=''>
            <div className='mb-3'>
                <img src={data.link} alt="" className="w-100 h-80 object-cover rounded-xl" />
            </div>
            <div className='text-left'>
                <h1 className='text-xl'><b>{data.title}</b></h1>
                <p>{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Holiday
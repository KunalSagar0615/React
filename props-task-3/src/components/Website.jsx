import React from 'react'

const Website = ({data}) => {
  return (
    <div className='border-2 border-black mt-5 p-5 h-100 hover:bg-purple-400 hover:scale-102 transition-transform rounded-xl'>
        <div className='p-5 h-20 w-1/3 border-2 border-black rounded-xl bg-white text-5xl flex items-center justify-center'>
                {data.icons}
        </div>
        <div>
            <h1 className='text-xl font-bold pt-5'>{data.title}</h1>
            <h1 className='pt-5'>{data.description}</h1>
            <h1 className='pt-5'>{data.link}</h1>
        </div>
    </div>
  )
}

export default Website
import React from 'react'

const MusicEvents = ({data}) => {
  return (
    <div className='mt-5 flex w-294 h-35 justify-around bg-white items-center rounded-[10px]'>
        <div className="w-40 h-30 flex flex-col items-center justify-center rounded-[10px]" style={{ backgroundColor: data.color }}>
            <h6>{data.date}</h6>
            <h1 className='font-bold text-3xl'>{data.time}</h1>
        </div>
        <div className='text-left w-210'>
            <h6 className='font-bold'>{data.title}</h6>
            <p>{data.description}</p>
        </div>
        <div className='w-30'>
            <button className={`w-28 rounded-[10px] hover:shadow-lg hover:scale-102 transition-transform p-3 ${data.status !== "Sold out!" ? "bg-black text-white" : "bg-gray-400 cursor-not-allowed"} `} >
                {data.status}
            </button>
        </div>
    </div>
  )
}

export default MusicEvents
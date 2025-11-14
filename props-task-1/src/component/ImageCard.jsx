import React from 'react'

export const ImageCard = ({image , authorNm}) => {
  return (
    <div className="border-2 border-gray-400 w-1/5 shadow p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform">
        <div className="">
            <img src={image} alt="" srcSet="" className="p-2 mb-4"/>
        </div>
        <div>
            <h1 className=''><p>{authorNm}</p></h1>
        </div>
    </div>
  )
}

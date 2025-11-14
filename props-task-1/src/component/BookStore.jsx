import React from 'react'

export const BookStore = (props) => {
  return (
    <div className="border-2 border-gray-400 w-1/5 shadow p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform">
        <div><img src={props.image} alt="" srcSet="" className="m-4"/></div>
        <div>
            <h1><b className="text-center mb-2 text-blue-400">{props.bkTitle}</b></h1>
            <h3><b>{props.bkSubTitle}</b></h3>
            <h2><b>{props.authorNm?.join(", ")}</b></h2>
            <h2><b>{props.publisherNm}</b></h2>
            <div className="flex justify-between">
                <h6><b>{props.language}</b></h6>
                <h6><b>{props.totalPages}</b></h6>
            </div>
        </div>
    </div>
  )
}


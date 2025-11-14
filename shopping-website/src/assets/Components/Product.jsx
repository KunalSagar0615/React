import React from 'react'

export const Product = (props) => {
    return (
        <div className='border-gray-400 border-2 w-1/5 shadow'>
            <div><img src={props.image} alt="Royal Enfield" /></div>
            <div>
                <h1><b>{props.price}</b></h1>
                <h6><b>{props.averageKM}</b></h6>
                <h5>{props.brand}</h5>
                <div className='flex justify-between pe-2'>
                    <h6>{props.place}</h6>
                    <h6>{props.date}</h6>
                </div>
            </div>
        </div>
    )
}
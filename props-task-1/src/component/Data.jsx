import React from "react";

export const Data = (props) => {
    return (
        <div className='border-2 border-gray-400 w-1/5 shadow p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform'>
            <div><img src={props.image} alt="" srcSet="" className="rounded-full m-4"/></div>
            <div>
                <h1><b>{props.fullName}</b></h1>
                <h5><p>{props.address}</p></h5>
                <div className="flex justify-between pe-2">
                    <h6>Age:{props.birthDate}</h6>
                    <h6>Nat:{props.nationality}</h6>
                </div>
            </div>
        </div>
    )
}


import React from 'react'
import profilePic from "../profile.jpeg"
const Student = ({ name, email, mob, role, city,laptop }) => {
    city="Satara";
    return (
        <div className='border border-blue-600 border-2 w-1/4 rounded-2xl shadow-2xl'>
            <div className='w-70 py-3 px-3 mx-auto' ><img src={profilePic} alt="Profile Picture" className='w-70 border-2 border-black-500 rounded-[50%]' /></div>
            <div className='text-2xl text-center'>
                <h1 className=' text-center mb-2 text-blue-400'>{name}</h1>
                <h2 className='mb-2'>{role}</h2>
                { laptop && <h6 className='mb-2'>{laptop}</h6>}
                <p className='mb-2'>{email}</p>
                <p className='mb-2'>{mob}</p>
            </div>
        </div>
    )
}

export default Student
import React from 'react'
import { useParams } from 'react-router-dom'
import myFriend from '../assets/my-friends.json'

const DisplayData = () => {
    const { id } = useParams()
    const newFriend = myFriend.find(friend => friend.id == id)

    if (!newFriend) return <h1 className='text-center italic text-red-600 text-4xl'>Data Not Found !!</h1>

    return (
        <div className='w-[80vw] h-[80vh] border-2 bg-amber-100 flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-amber-300 hover:via-25% hover:to-amber-500'>
            <h1 className='text-4xl font-extrabold text-shadow-lg'>{newFriend.company}</h1>
            <div>
                <p className='text-center mt-1 italic text-xl'>Location:{newFriend.location}</p>
                <p className='mt-3'>{newFriend.description}</p>
                <p className='style-none'>Requirements:<ul className='mt-4 mb-4'>
                    {newFriend.requirements?.map((req, index) => <li key={index}>{req}</li>)}
                </ul></p>
                <p className=''><span>Education : </span>{newFriend.education}</p>
                <p className='mt-2'><span>Salary : </span>{newFriend.salary}</p>
            </div>
        </div>
    )
}

export default DisplayData
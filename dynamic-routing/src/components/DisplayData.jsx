import React from 'react'
import { useParams } from 'react-router-dom'
import myFriends from '../assets/my-friends.json'

const DisplayData = () => {

    const {id}= useParams();
    console.log(id)
    const newFriend = myFriends.find(friend => friend.id == id)
    console.log(newFriend)

    if (!newFriend) return <h1 className='italic text-2xl text-center text-red-500'>Friend not found!</h1>

    return (
        <div className='border-2 border-black p-5 m-5 w-[80vw] justify-center items-center bg-teal-400'>
            <div className='flex justify-center items-center'>
                <img src={newFriend.imgLink} alt="" className='rounded-[50%] shadow-lg ' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-3xl mt-5 hover:text-purple-600 duration-100'>{newFriend.name}</h1>
                <div className='flex gap-5 mt-2'>
                    <p>{newFriend.mob}</p><span>|</span>
                    <p>{newFriend.email}</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayData
import React from 'react'
import myFriend from '../assets/myFriend.json'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='h-[90vh] bg-cyan-300 p-5 flex gap-10'>
      <ul className='text-3xl'>
        {
          myFriend.map(friend=> <li className='mt-2' key={friend.id}><Link to={`${friend.id}`} >{friend.name}</Link></li> )
        }
      </ul>
      <Outlet/>
    </div>
  )
}

export default Contact
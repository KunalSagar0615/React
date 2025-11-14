import React from 'react'
import myFriends from '../assets/my-friends.json'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <div className='flex h-[100vh] items-center p-5 gap-20px text-white bg-slate-800'>
        <ul className=' w-[15vw]'>
            {
                myFriends.map(friends => <li key={friends.id} className='mt-2 h-[45px] w-[130px]' ><Link className='hover:text-purple-600 transition-all duration-100' to={`${friends.id}`}>{friends.name}</Link></li> )
            }
        </ul>
        <Outlet/>
    </div>
  )
}

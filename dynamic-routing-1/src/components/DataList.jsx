import React from 'react'
import myFriends from '../assets/my-friends.json'
import { Link, Outlet } from 'react-router-dom'

const DataList = () => {
    return (

        <div className='flex gap-10 p-5 w-[100vw] h-[100vh] items-center bg-slate-900'>
          
                <ul className='border-2 border-black p-4 h-[80vh] bg-blue-600 text-amber-50 space-y-3'>
                    {
                        myFriends.map(friends => <li key={friends.id} className='pt-4'><Link to={`${friends.id}`}>{friends.title}</Link></li>)
                    }
                </ul>
    
            <Outlet />
        </div>
    )
}

export default DataList
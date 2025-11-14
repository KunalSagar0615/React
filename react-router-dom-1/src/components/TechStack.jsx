import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

const TechStack = () => {
  return (
    <div className='mx-20 my-10 flex gap-10'>
        <ul className='text-2xl'>
            <li className='mb-5'>
                <Link to="html" >HTML </Link >
            </li>
            <li className='mb-5'>
                <Link to="css" >CSS </Link >
            </li>
            <li className='mb-5'>
                <Link to="javascript" >javascript</Link >
            </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default TechStack

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)

      try {
        const respose = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await respose.json();
        setUserData(data)
      }
      catch (error) {
        console.log("Error: ", data)
      } finally {
        setLoading(false)
      }
    }
    fetchUserData()
  }, [])


  if (loading) {
    return <h1 className='text-4xl'>Loading...</h1>
  }


  return (
    <div className='bg-purple-500 text-center'>
      <h1 className='text-3xl py-5'>Home</h1>
      <div className='grid grid-cols-3 gap-20 '>
        {
          userData.map(user => <div className=' roundrd p-4 bg-black text-white rounded-xl mx-4'>
            <h2 className='text-xl'>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
            <h2>{user.website}</h2>
          </div>)
        }
      </div>
    </div>
  )
}

export default Home
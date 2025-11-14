import React from 'react'
import { useParams } from 'react-router-dom'
import myFriend from '../assets/myFriend.json'

const Friend = () => {

    const {id} = useParams() 
    const myFriend = myFriend.find(myFriend.id == id)

    if(!myFriend) return <h1>Friend not found</h1>

  return (

    <div>
        <h1>{myFriend.name}</h1>
        <h2>{myFriend.email}</h2>
        <h2>{myFriend.mobile}</h2>
        <h2>{myFriend.city}</h2>
    </div>
  )
}

export default Friend
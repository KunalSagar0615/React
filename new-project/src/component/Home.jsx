import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {

    const [count2, setConut2] = useState(0)
    const [count1, setConut1] = useState(0)
    const [search,setSearch] = useState("")

    const getdata = async() => {
        const url = "https://jsonplaceholder.typicode.com/users"
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }

    useEffect(() => {
        getdata()
        console.log("use effect")
    }, [])

    const searchData = (search) =>{
        if (search ==='') return;
        console.log("searching for : ",search)
    }
    useEffect(()=>{
        searchData(search)
    },[search])

    return (
        <div className='bg-green-200 h-200 flex flex-col flex-wrap justify-center'>
            <h1 className='py-14 text-center text-5xl text-green-500 font-bold ' onClick={() => setConut1(count1 + 1)}>Count1: {count1}</h1>
            <h1 className='py-14 text-center text-5xl text-red-500 font-bold ' onClick={() => setConut2(count2 + 1)}>Count2: {count2}</h1>
            <div className="mt-10 flex justify-center">
                <input type="text" onChange={(e)=>setSearch(e.target.value)} className='border p-2 rounded' placeholder='Search here'/>
            </div>
        </div>

    )
}

export default Home
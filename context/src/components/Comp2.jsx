import Comp3 from './Comp3'
import { useState } from 'react'

const Comp2 = () => {
    // const [name,setName]=useState('The Name Is Kunal')
  return (
    <div className='p-10 border rounded bg-amber-100 text-center text-xl'>

        <h1>Comp 2</h1>
        <Comp3/>
    </div>
  )
}

export default Comp2
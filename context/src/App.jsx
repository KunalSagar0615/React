import React from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp4 from './components/Comp4'
import Comp3 from './components/Comp3'
import DemoContext from './context/DemoContext'
import { useState } from 'react'

const App = () => {
  const [name,setName]=useState("The Name Is Kunal")
  const [email,setEmail]=useState('kunalsagar0615@gmail.com')
  return (
    <DemoContext.Provider value={{name,setName,email}}>
    <div className='bg-purple-300 text-center p-10'>
      <h1>App Component</h1>
      <Comp1/>
    </div>
    </DemoContext.Provider>
  )
}

export default App
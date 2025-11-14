import { useState } from 'react'
import './App.css'

function App() {
  
  const [Heading,setHeading]=useState('this is heading');

  const changeColor = () =>{
      
  }

  return (
    <>
      <h1 id="Heading">{Heading}</h1>
      <button onClick={changeColor}>change color</button>
    </>
  )
}

export default App

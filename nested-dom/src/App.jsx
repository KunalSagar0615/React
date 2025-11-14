import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Action from './components/Action'
import Drama from './components/Drama'
import Comedy from './components/Comedy'
import Horor from './components/Horor'
import Scifi from './components/Scifi'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Action />} />
          <Route path='/drama' element={<Drama />} />
          <Route path='/comedy' element={<Comedy />} />
          <Route path='/horor' element={<Horor />} />
          <Route path='/scifi' element={<Scifi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

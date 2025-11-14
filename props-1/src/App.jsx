import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Csk from './components/Csk'
import rcb from './components/rcb'
import Kkr from './components/Kkr'
import Gt from './components/Gt'
import SRH from './components/SRH'
import PBKS from './components/PBKS'
import LSG from './components/LSG'
import RR from './components/RR'
import DC from './components/DC'
import Mi from './components/Mi'


function App() {

  return (
    <>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Csk/>}/>
        <Route path='/kkr' element={<Kkr/>}/>
        <Route path='/gt' element={<Gt/>}/>
        <Route path='/srh' element={<SRH/>}/>
        <Route path='/pbks' element={<PBKS/>}/>
        <Route path='/lsg' element={<LSG/>}/>
        <Route path='/rr' element={<RR/>}/>
        <Route path='/dc' element={<DC/>}/>
        <Route path='/mi' element={<Mi/>}/>
        <Route path='/rcb' element={<rcb/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

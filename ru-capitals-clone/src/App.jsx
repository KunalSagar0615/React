import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import Log from './components/Log'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='m-0'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/signIn' element={<SignIn />}/>
          <Route path='/login' element={<Log />}/>
        </Routes>     
        
      </BrowserRouter>
    </div>
  )
}

export default App

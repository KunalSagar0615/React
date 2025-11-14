import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import Form from './components/Form'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Form/>} />
          <Route path='/services' element={<Services />} />
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App

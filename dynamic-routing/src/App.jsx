import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DisplayData from './components/DisplayData'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path=':id' element={<DisplayData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

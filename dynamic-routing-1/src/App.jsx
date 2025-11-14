import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataList from './components/DataList'
import DisplayData from './components/DisplayData'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataList/>}>
          <Route path=":id" element={<DisplayData/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

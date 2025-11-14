import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HTML from './components/HTML'
import CSS from './components/CSS'
import Javascript from './components/Javascript'
import TechStack from './components/TechStack.jsx'
import myFriend from './assets/myFriend.json'
import Friend from './components/Friend.jsx'
// import { BrowserRouter as Router} from 'react-router-dom' if we want to change the tag name


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/tech-stack" element={ <TechStack/>} >
                        <Route index element={<HTML/>}/>
                        <Route path="html" element={<HTML/>}/>
                        <Route path="css" element={<CSS/>}/>
                        <Route path="javascript" element={<Javascript/>}/>
                       
                </Route >
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} >
              <Route path=':id' element={<Friend/>}/>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

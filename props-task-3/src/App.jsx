import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Holidays from './components/Holidays.jsx'
import MusicEventsData from './components/MusicEventsData.jsx'
import WebsiteData from './components/WebsiteData.jsx'

function App() {
  
  return (
    <>
      <Holidays/>
      <MusicEventsData/>
      <WebsiteData/>
    </>
  )
}

export default App

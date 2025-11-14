import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Technology from './components/Technology'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound'

function App() {
const html = {
  "title": "HTML",
  "description": "HTML (HyperText Markup Language) is the standard language for creating web pages. It structures content using elements, tags, and attributes, forming the foundation for all modern websites.",
  "bgColor": "bg-orange-500"
};

const css = {
  "title": "CSS",
  "description": "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, animations, and responsive design to make websites visually attractive.",
  "bgColor": "bg-orange-500"
};

const js = {
  "title": "JavaScript",
  "description": "JavaScript is a powerful programming language that adds interactivity to websites. It enables dynamic content, handles events, manipulates the DOM, communicates with servers, and builds complex web applications.",
  "bgColor": "bg-yellow-400"
};

const bootstrap = {
  "title": "Bootstrap",
  "description": "Bootstrap is a popular front-end framework that provides pre-designed components and responsive grid layouts. It helps developers build modern, mobile-friendly websites quickly with minimal custom CSS and JavaScript.",
  "bgColor": "bg-purple-600"
};

const react = {
  "title": "React",
  "description": "React is a JavaScript library for building fast, interactive user interfaces. It uses reusable components, a virtual DOM, and declarative syntax to create dynamic, scalable, single-page applications efficiently.",
  "bgColor": "bg-red-200"
};

const angular = {
  "title": "Angular",
  "description": "Angular is a powerful TypeScript-based web framework for building dynamic applications. Developed by Google, it offers two-way data binding, dependency injection, and a modular architecture for large-scale projects.",
  "bgColor": "bg-red-600"
};


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Technology title={html.title} description={html.description} background={html.bgColor}/>}/>
        <Route path='/css' element={<Technology title={css.title} description={css.description} background={css.bgColor}/>}/>
        <Route path='/Bootstrap' element={<Technology title={bootstrap.title} description={bootstrap.description} background={bootstrap.bgColor}/>}/>
        <Route path='/Javascript' element={<Technology title={js.title} description={js.description} background={js.bgColor}/>}/>
        <Route path='/React' element={<Technology title={react.title} description={react.description} background={react.bgColor}/>}/>
        <Route path='/Angular' element={<Technology title={angular.title} description={angular.description} background={angular.bgColor}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

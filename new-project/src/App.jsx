import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./component/About"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Navbar from "./component/Navbar"

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

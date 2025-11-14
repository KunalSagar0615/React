import About from "./components/About"
import HomeComponent from "./components/HomeComponent"
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {

  return (
    <>
      <Navbar/>
      <HomeComponent/>
      <About/>
    </>
  )
}

export default App

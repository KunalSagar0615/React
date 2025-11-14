import Button from "./components/Button"
import { DashBoard } from "./components/DashBoard"
import Navbar from "./components/Navbar"
import './App.css'

function App() {
return <>
  <Button/>
  {Button()}
  {Navbar()}
  <DashBoard/>
  </>
}

export default App

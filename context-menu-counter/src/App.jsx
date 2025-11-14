import { useState } from "react"
import CounterApp from "./component/CounterApp"
import CounterContext from "./context/CounterContext"

function App() {

  const [count,setCount]=useState(0);

  return (
    <CounterContext.Provider value={{count,setCount}}>
      <CounterApp/>
    </CounterContext.Provider>
  )
}

export default App

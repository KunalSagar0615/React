import { useState } from "react";
import Counter from "./Counter"
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const App = () => {

    const[tab,setTab]=useState("home");

    return (
        <div>
            <Navbar setTab={setTab}/>

            {tab=='home' && <Home/>}
            {tab=='about' && <About/>}
            {tab=='contact' && <Contact/>}
            {tab=='counter' && <Counter />}
        </div>
    )
}

export default App


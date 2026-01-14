import { useState } from "react";
import Counter from "./Counter"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const App = () => {

    const [name, setName] = useState('Ram')
    const [tab, setTab] = useState('home');

    return (
        <div>
            <Navbar setTab={setTab} />

            {tab == 'home' && <Home />}
            {tab == 'about' && <About />}
            {tab == 'contact' && <Contact />}
            {tab == 'counter' && <Counter />}

        </div>
    )
}

export default App

/**
 const [heading, setHeading] = useState('Good Morning');

    const changeHeading = () => {
        // heading = "Good Afternoon";
        setHeading('Good Afternoon');
    }

    <h1 className="text-center text-7xl">{heading}</h1>

            <div className="text-center text-4xl mt-10">
                <button type="button" className="bg-sky-400 p-5 rounded-2xl cursor-pointer" onClick={changeHeading}>Change Heading</button>
            </div> 

 */
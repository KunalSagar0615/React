import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import PageNotFound from "./components/PageNotFound"
import Services from "./components/Services"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TechStack from "./components/TechStack"
import Html from "./components/Html"
import Css from "./components/Css"
import Javascript from "./components/Javascript"
import Friend from "./components/Friend"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/tech-stack" element={<TechStack />}>
                        <Route index element={<Html />} />
                        <Route path="css" element={<Css />} />
                        <Route path="javascript" element={<Javascript />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />}>
                        <Route path=":id" element={<Friend />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-slate-700 text-white p-4">
            <ul className="text-2xl flex gap-15">
                <li className="cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="/services">Services</Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="/tech-stack">TechStack</Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="/about">About</Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
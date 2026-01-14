const Navbar = ({ setTab }) => {
    return (
        <nav>
            <ul className="flex gap-10 text-3xl bg-purple-800 text-white p-5">
                <li onClick={() => setTab('home')}>Home</li>
                <li onClick={() => setTab('about')}>About</li>
                <li onClick={() => setTab('contact')}>Contact</li>
                <li onClick={() => setTab('counter')}>Counter</li>
            </ul>
        </nav>
    )
}

export default Navbar
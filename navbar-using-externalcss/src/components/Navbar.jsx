import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {

    return (
    <nav className="navbar">
        <h1>techrel</h1>
        <ul className="list">
            <li>Home</li>
            <li>Pages</li>
            <li>Poertfolio</li>
            <li>Blog</li>
            <li>Element</li>
        </ul>
        <h2>Search</h2>
    </nav>
  )
}

export default Navbar
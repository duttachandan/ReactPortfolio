import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar flex anim'>
            <h3 className='header'> Portfolio.</h3>
            <ul className="middle">
                <li 
                className='hover-lnk'
                >
                <Link to="/">Home.</Link>
                </li>
                <li 
                className='hover-lnk'>
                <Link to="/Projects">Projects.</Link>
                </li>
                <li 
                className='hover-lnk'>
                <Link to="/About">About me.</Link>
                </li>
                <li 
                className='hover-lnk'>
                <Link to="/Contact">
                Contact
                <i className="fa-regular fa-comment"></i>
                </Link> 
                </li>
            </ul>
        </div>
    )
}

export default Navbar
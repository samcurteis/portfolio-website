import { useState } from 'react';
import dropdownIcon from '../assets/black-icons/dropdown-icon.png'

export default function MobileNav() {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
}


    return (
        <container className="component mobile-nav" >
        <img className="dropdown-icon" alt="dropdown icon" onClick={toggleDropdown} src={dropdownIcon} />
        {isDropdownOpen &&
        <>
            <p className="navbar-item"><a href="#skills">Skills</a></p>
        <p className="navbar-item"><a href="#projects">Projects</a></p>
        <p className="navbar-item"><a href="#experience">Experience</a></p>
        <p className="navbar-item"><a href="#about-me">About Me</a></p>
        <p className="navbar-item"><a href="#contact">Contact</a></p>
            </>
    }
        </container>
    )
}

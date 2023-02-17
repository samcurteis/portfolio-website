import { useState, useEffect } from 'react';
import useViewport from '../hooks/useViewport.js'
import DesktopNav from './DesktopNav.js'
import MobileNav from './MobileNav.js'

export default function Navbar() {
const [dropdown, setDropdown] = useState("70px");
const [optionDisplay, setOptionDisplay] = useState("none")
const { width } = useViewport();
const breakpoint = 500;


    return width < breakpoint ? <MobileNav/> : <DesktopNav />;
}

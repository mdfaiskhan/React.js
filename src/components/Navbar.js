import "./NavbarStyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";




const Navbar = () => {

const[click,setClick] = useState(false);
const handleClick = () => setClick(!click);
  return (
    <div className="header">
        <div className="container">
             <Link to="/">
                 <h1>Portfolio</h1>
             </Link>

            
                 <ul className={click ? "nav-menu active" : "nav-menu"}>
                         <li>
                             <Link to="/">Home</Link>
                         </li>
                         <li>
                             <Link to="/About">About</Link>
                         </li>
                         <li>
                             <Link to="/Projects">Projects</Link>
                         </li>
                         <li>
                             <Link to="/Pages">Pages</Link>
                         </li>
                         <li>
                             <Link to="/Contact">Contact</Link>
                         </li>
                 </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color:"#F64648"}} />) :(<FaBars size={30} style={{color:"#F64648"}}></FaBars>) }
                    
                    
                    </div>       
            
         </div>
    </div>
  )
}

export default Navbar

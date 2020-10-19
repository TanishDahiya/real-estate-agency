import React,{useState} from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom"


function Header() {
    const [open,setOpen]=useState(false);
    return (
      <div className="header">
        <div className="header_left">
            <h1 className="header_left_wh">Site Name</h1>
        </div>
        <ul
          className="header_nav_links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <Link to="/">
              <a className="nav-link">
                <span data-hover="Home">Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a className="nav-link">
                <span data-hover="Contact">Contact</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a className="nav-link">
                <span data-hover="About">About</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className="header_menu_icon">
          <MenuIcon onClick={() => setOpen(!open)} />
        </div>
      </div>
    );
}

export default Header

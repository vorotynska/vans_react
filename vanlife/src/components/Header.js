import React from "react";
import { Link, NavLink } from "react-router-dom";
import  imageUrl from "../images/icon-log.png"

export default function Header() {
   const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
   }

  function fakeLogOut() {
    localStorage.remove('loggedin')
  }

    return (
        <header>
            <Link className='site-logo' to="/">#VANLIFE</Link>
              <nav>
                 <NavLink
                  to="/host"
                  style={({isActive}) => isActive ? activeStyles : null}
                  >
                    Host
                 </NavLink>
                  <NavLink 
                  to="about"
                  style={({isActive}) => isActive ? activeStyles : null}
                   >
                     About
                    </NavLink>
                  <NavLink
                   to="vans"
                      style={({isActive}) => isActive ? activeStyles : null}
                   >
                     Vans
                    </NavLink>
                    <Link to="/login" className="login-link">
                      <img 
                          src={imageUrl}
                          className="login-icon"
                          />
                    </Link>
                    <buttbn onClick={fakeLogOut}>X</buttbn>
              </nav>
        </header>
    )
}
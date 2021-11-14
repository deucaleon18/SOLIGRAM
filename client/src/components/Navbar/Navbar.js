import React from 'react';
import Avatar from "@mui/material/Avatar";


import {
  NavContainer,
  NavLink,
  NavLinksContainer,
  NavLogoContainer,
  NavMenu,
  NavElement,
} from "./NavbarStyle";

import TogglerButton from "../TogglerButton/TogglerButton";

const Navbar = ({themeToggler}) => {
    const handleLogout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("name")
    }
    return (
      <div>
        <NavContainer>
          <NavLogoContainer>
            <h1>Soligram</h1>
          </NavLogoContainer>
          <NavLinksContainer>
            <NavMenu>
              <NavLink href="/">
                <NavElement>HOME</NavElement>
              </NavLink>
              {localStorage.getItem("token") !== null ? (
                <>
                  <NavLink href="/app">
                    <NavElement>APP</NavElement>
                  </NavLink>
                  <NavLink href="/new">
                    <NavElement>CREATE</NavElement>
                  </NavLink>
                  <NavLink href="/accounts">
                    <NavElement>ACCOUNT</NavElement>
                  </NavLink>
                  <NavLink href="/">
                    <NavElement
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      LOGOUT
                    </NavElement>
                  </NavLink>
                  <Avatar/>
                </>
              ) : null}
              {localStorage.getItem("token") === null ? (
                <>
                  <NavLink href="/register">
                    <NavElement>REGISTER</NavElement>
                  </NavLink>
                  <NavLink href="/login">
                    <NavElement>LOGIN</NavElement>
                  </NavLink>
                </>
              ) : null}
            </NavMenu>
            <TogglerButton themeToggler={themeToggler} />
          </NavLinksContainer>
        </NavContainer>
      </div>
    );
}

export default Navbar

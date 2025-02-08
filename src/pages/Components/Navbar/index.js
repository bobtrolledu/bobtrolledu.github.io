import React from "react";
import profileImg from "./profile.jpg";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    Logo,
    LogoName,
    NavLogoContainer,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <Nav>
            <NavLogoContainer>
                <Logo src={profileImg} alt="Logo" />
                <LogoName to="/" >
                    .Anson_Ho()
                </LogoName>
            </NavLogoContainer>
            <NavMenu>
                <NavLink to="/About" >
                    .About()
                </NavLink>
                <NavLink to="/Experience" activeStyle>
                    .Experience()
                </NavLink>
                <NavLink to="/Projects" activeStyle>
                    .Projects()
                </NavLink>
                <NavLink to="/Contact" activeStyle>
                    .Contact()
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;
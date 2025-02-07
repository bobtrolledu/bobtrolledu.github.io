import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/jetbrains-mono/400.css"; // Specify weight

export const Nav = styled.nav`
    background: #151515;
    height: 85px;
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: column;  
    align-items: center;
    padding: 0 5%; 
    position: fixed;
    top: 0;
    width: 100%;    
    z-index: 12;
`;

export const NavLogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; /* Controls the space between logo and logoname */
`;

export const Logo = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`;

export const LogoName = styled(Link)`
    color: #808080;
    display: flex;
    align-items: start;
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    padding: 20px;
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;

    &.active {
        color: #ffffff;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-right: 8rem;
`;


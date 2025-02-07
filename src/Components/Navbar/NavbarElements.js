import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/jetbrains-mono/400.css"; // Specify weight

export const Nav = styled.nav`
    background: #151515;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((130vw) / 2);
    position: fixed;  /* Make it fixed */
    top: 0;  /* Stick to the top */
    z-index: 12;
`;

export const Logo = styled.img`
    display: flex;
    height: 60px; /* Adjust the logo size */
    width: 60px; /* Ensure the logo is circular */
    border-radius: 50%; /* Make it a circle */
    object-fit: cover; /* Ensure the image fills the circle without distortion */
    cursor: pointer;
    margin-right: 1150px; /* Space between the logo and the menu */
    margin-left: -1200px; /* Ensures the logo stays on the left */
`;

export const LogoName = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    margin-right: 1000px; /* Space between the logo and the menu */
    margin-left: -1150px; /* Ensures the logo stays on the left */
`;


export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    
    &.active {
        color: #ffffff;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
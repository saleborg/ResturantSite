import styled from "styled-components";
import {NavLink as Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height: 80px;
/*margin-top: -80px;*/
display: flex;
justify-content: center;
align-items: center;
postiion: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`


export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-200%, -50%);
    color: red;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`


import styled from "styled-components";
import {NavLink as Link } from 'react-router-dom'
import { GiSushis } from 'react-icons/gi'

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

    @media screen and (max-width: 1300px){
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

export const Bars = styled(GiSushis)`
    font-size: 3rem;
    transform: translate(-200%, -10%);
    color: red;
    justify-content: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const HeaderImg = styled.img`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const HeaderContainer = styled.header`
    background-color: #770d29;
`;

export const HeaderWrap = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;


export const NavP = styled.p`
    font-size: clamp(2rem, 2vw, 3rem);
`
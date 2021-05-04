import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import { GiHamburger } from 'react-icons/gi'

export const Nav = styled.nav `

background : transparent;
height: 88px;
display: flex;
justify-content: center;
font-weight: 700;
`
export const NavLink = styled(Link)
`
color: #ff7b00;
font-size: 1.8rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;

@media screen and (mim-width: 480px) {
    position: absolute;
    top:  10px;
    left: 20px;
    
}
`


export const NavIcon = styled.div `
display: block;
position: absolute;
top: 30px;
right: 10px;
cursor: pointer;
color: #ff7b00;

p{
    transform: translate(-175%, 100%);
    font-weight: bold;
}
`


export const Bars = styled(GiHamburger)
`
font-size: 2rem;
transform: translate(-50%, -15%);
`
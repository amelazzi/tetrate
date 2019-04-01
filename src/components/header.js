import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { DropdownItem } from 'styled-dropdown-component'

import { darkBleu, bleu, blue } from '../styles/colors'

import SimpleDropDown from './dorpDown'

const StyledHeader = styled.div`
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    padding: 0.2rem 4rem;
    margin: 0;
    display: flex;
    justify-content: space-between;
    * {
        margin: 0;
    }
    @media (max-width: 35em) {
        flex-direction: column;
        justify-content: center;
    }

    nav {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        @media (max-width: 35em) {
            background: ${darkBleu};
            flex-direction: column;
            justify-content: center;
            padding-bottom: 1.5rem;
        }
    }

    a {
        padding: 0.8rem 1.6rem;
        :last-child{
            padding-right: 0;
        }
        position: relative;
        text-decoration: none;
        color: ${darkBleu};
        font-weight: 600;

        &:hover{
            color: ${bleu};
            cursor: pointer;
        }
    }
`;

const StyledLogo = styled.div`
    margin: 0.8rem 0rem;
    display: flex;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    width: 18rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;


const StyledDropdownItem = styled(DropdownItem)`
    padding: 1.5rem;
    color: ${darkBleu};
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: none;
    white-space: nowrap;
    transition: .3s ease-in-out;

    :hover{
        background: ${blue};
        cursor: pointer;
        color: ${darkBleu};
    }
`;
 
const StyledLink = styled(Link)`
    padding: 0 !important;
    margin: 0;
    text-decoration: none;
    font-weight: 400 !important;
    :hover{
        color: ${darkBleu} !important;
    }
`;

/*----------------------------- Variables ---------------------------*/
const Community = [
    {name: "Apache Skywalking", link:'/apache-skywalking'},
    {name: "GetEnvoy", link:'/getenvoy'},
    {name: "Tetrate Istio Cloud Map Operator", link:'/'}
];

const Com = Community.map((cm)=>
    <StyledDropdownItem key={cm.name} >
        <StyledLink to={cm.link}> {cm.name} </StyledLink>
    </StyledDropdownItem>
);

const AboutUs = [
    {name: "Team", link:'/team'},
    {name: "Careers", link:'/careers'},
    {name: "News", link:'/news'}
];

const AbtUs = AboutUs.map((ab)=>
    <StyledDropdownItem key={ab.name} >
        <StyledLink to={ab.link}> {ab.name} </StyledLink>
    </StyledDropdownItem>
);

/*-----------------------------  Component ---------------------------*/

const Header = () => {
    return(
        <StyledHeader>
            <StyledLogo>
                <LogoContainer>
                    <img src={require("../images/logo/logo-text-right.png")} alt='logo'/>
                </LogoContainer>
            </StyledLogo>
            <nav>
                <Link to="/"> Home </Link>
                <SimpleDropDown text='Community' args={Com} />
                <Link to="/resources"> Resources </Link>
                <Link to="/"> Blog </Link>
                <SimpleDropDown text='About Us' args={AbtUs} />
                <Link to="/contact"> Contact </Link>
            </nav>
        </StyledHeader>
    );
}

export default Header

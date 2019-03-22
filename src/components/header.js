import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { darkBleu, bleu } from '../styles/colors'

const StyledHeader = styled.div`
    font-size: 1.6rem;
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
        padding: 0.8rem 2rem;
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
    width: 19rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;

const Header = () => {
    return(
        <StyledHeader>
            <StyledLogo>
                <LogoContainer>
                    <img src={require("../images/logo/logo-text-right.png")} />
                </LogoContainer>
            </StyledLogo>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/"> Community </Link>
                <Link to="/resources"> Resources </Link>
                <Link to="/"> Blog </Link>
                <Link to="/"> About us </Link>
                <Link to="/"> Contact </Link>
            </nav>
        </StyledHeader>
    );
}

export default Header

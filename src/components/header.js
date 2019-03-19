import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { darkBleu, bleu } from '../styles/colors'

const StyledHeader = styled.div`
    width: 100%;
    font-size: 16px;
    padding: 0rem 2rem;
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
        justify-content: flex-end;
        align-items: center;
        @media (max-width: 35em) {
            background: ${darkBleu};
            flex-direction: column;
            justify-content: center;
            padding-bottom: 1.5rem;
        }
    }

    a {
        padding: 0.8rem;
        position: relative;
        text-decoration: none;
        font-weight: bold;
        color: ${darkBleu};

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
    width: 10rem;
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
                    <img src={require("../images/logo-text-right.png")} />
                </LogoContainer>
            </StyledLogo>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/"> Community </Link>
                <Link to="/"> Resources </Link>
                <Link to="/"> Blog </Link>
                <Link to="/"> About us </Link>
                <Link to="/"> Contact </Link>
            </nav>
        </StyledHeader>
    );
}

export default Header

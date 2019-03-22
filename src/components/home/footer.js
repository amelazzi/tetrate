import React from 'react'

import styled from 'styled-components'
import { darkBleu, bleu } from '../../styles/colors';
import { Link } from 'gatsby';

const background = require("../../images/home/footer-background.jpg")

const StyledFooter = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;

    text-align: center;
    padding: 3rem;

    h1{
        color: white;
        font-size: 3.2rem;
        font-weight: 400;
    }

    button{
        margin-top: 2rem;
        border: none;
        background: ${bleu} ;
        font-size: 1.6rem;
        padding: 1rem 4rem;
        color: white;

        :hover{
            background: white;
            color: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Footer = () => {
    return(
        <StyledFooter>
            <h1> Join the Movement. Adopt Service Mesh. </h1>  
            <StyledLink to='/'>
                <button> Request a Preview </button>
            </StyledLink>
        </StyledFooter>
    );
}

export default Footer;
import React from 'react'

import styled from 'styled-components'
import { darkBleu, bleu } from '../styles/colors';
import { Link } from 'gatsby';

const background = require("../images/home/footer-background.jpg")

const StyledFooter = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0rem;

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
        padding: 1rem 5rem;
        color: white;

        :hover{
            background: white;
            color: ${darkBleu};
            cursor: pointer;
        }
    }

    @media (max-width: 35em) {
		padding: 4rem 2rem;
        h1{
            margin: 0;
            padding: 0;
            font-size: 2.4rem;
            font-weight: 300;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const SubFooter = ({title, content, link }) => {
    return(
        <StyledFooter>
            <h1> {title} </h1>  
            <StyledLink to={link}>
                <button> {content} </button>
            </StyledLink>
        </StyledFooter>
    );
}

export default SubFooter;
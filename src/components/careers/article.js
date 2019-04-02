import React from 'react'
import styled from 'styled-components'
import { darkBleu, bleu } from '../../styles/colors';
import { Link } from 'gatsby';

const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem 4rem;
    padding: 4rem 0rem; 
    text-align: left;
    border-top: 2px solid lightgray;

    @media (max-width: 35em) {
        margin: 0rem;
    }
    
    h1{
        margin: 0;
        font-size: 2.5rem;
        font-weight: 300;
    }
    span{
        color: ${darkBleu};
        font-weight: 200;
        line-height: 1.6;
    }
    p{
        color: black;
        font-weight: 200;
        line-height: 1.6;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${bleu};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    :hover{
        text-decoration: none;
        color: ${darkBleu};
        cursor: pointer;
    }
`;

const Article = ({title, resume}) => {
    return(
        <StyledArticle>
            <h1> {title} </h1>
            <p> <span> The Role - </span>  {resume} </p>
            <StyledLink to='/'> Read More </StyledLink>
        </StyledArticle>
    );
}

export default Article
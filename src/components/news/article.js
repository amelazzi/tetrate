import React from 'react'
import styled from 'styled-components'
import { darkBleu, bleu } from '../../styles/colors';
import { Link } from 'gatsby';

const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 0rem; 
    text-align: left;
    @media (max-width: 35em) {
        text-align: center;
    }
    border-bottom: 2px solid lightgray;
    
    h1{
        margin: 0;
        font-size: 3.2rem;
        font-weight: 300;
    }
    small{
        font-size: 1.6rem;
        font-weight: 600;
        margin-top: 1rem;
    }
    p{
        color: black;
        font-weight: 200;
        line-height: 1.6;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    :hover{
        text-decoration: none;
    }
    button{
        border: none;
        background: ${bleu};
        color: white;
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 1rem 4rem;
        :hover{
            color: white;
            background: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const Article = ({title, date, resume}) => {
    return(
        <StyledArticle>
            <h1> {title} </h1>
            <small> {date} </small>
            <p> {resume} </p>
            <StyledLink to='/'>
                <button> Read </button>
            </StyledLink>
        </StyledArticle>
    );
}

export default Article